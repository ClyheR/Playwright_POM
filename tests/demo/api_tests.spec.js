
// import { test, expect, request as playwrightRequest } from '@playwright/test'
// test('PUT Request', async ({ request }) => {
//   const response = await request.put('https://reqres.in/api/users/2', {
//     data: {
//       name: "Manoj",
//       job: "Gamer"
//     }
//   })
//   expect(response.status()).toBe(200)
//   const text = await response.text()
//   expect(text).toContain('Manoj')

//   console.log(await response.json())
// })

// test('POST Request', async ({ request }) => {
//   const response = await request.post('https://reqres.in/api/users', {
//     data: {
//       name: "Raghav",
//       job: "Teacher"
//     }
//   })
  
//   const text = await response.text()
//   expect(response.status()).toBe(201)
//   expect(text).toContain('Raghav')

//   console.log(await response.json())
// })

// test('API Get Request', async ({ request }) => {
//   const response = await request.get('https://reqres.in/api/users/2')
//   expect(response.status()).toBe(200)
//   const text = await response.text()
//   expect(text).toContain('Janet')

//   console.log(await response.json())
// })



// test('Delete Request', async () => {
//   const apiContext = await playwrightRequest.newContext()
//   const response = await apiContext.delete('https://reqres.in/api/users/2')

//   console.log('Delete status:', response.status())
//   expect(response.status()).toBe(204)

//   await apiContext.dispose()
// })

