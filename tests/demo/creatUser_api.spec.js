import {test, expect} from '@playwright/test'
test('Create user Validate',async ({request}) =>{
    const createUser = await request.post('https://reqres.in/api/users', {
    headers: { 'Content-Type': 'application/json' }, // optional, but good to be explicit
    data: {
      name: 'Manoj',
      job: 'testing'
    }
  });

  console.log('Status:', createUser.status());
  console.log('Response body:', await createUser.text()); // raw response for debugging

  expect(createUser.status()).toBe(201); // should pass if server works as expected

  const createUserData = await createUser.json();
  console.log('User created:', createUserData);

    const loginUser = await request.post('https://reqres.in/api/login', {
        data:{
            email:'eve.holt@reqres.in',
            password:'cityslicka'
        }
    });
    expect(loginUser.status()).toBe(200);
    const loginData = await loginUser.json();
    console.log('user logged in', loginData.token);

    const userId = 2;
    const profileResponse = await request.get(`https://reqres.in/api/users/${userId}`,{
        
            headers:{Authorization : `Bearer ${loginData.token}`}
        
    });
    expect(profileResponse.status()).toBe(200);
    const profileData = await profileResponse.json();
    console.log('fetched profile data',profileData);

});