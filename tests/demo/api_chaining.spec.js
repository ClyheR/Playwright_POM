import {test, expect} from '@playwright/test'

test('Api Chaining', async({request}) =>{

    const postResponse = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(postResponse.status()).toBe(200);

    const post = await postResponse.json();
    const firstpost = post[0]
    const comments= await request.get(`https://jsonplaceholder.typicode.com/posts/${firstpost.id}/comments`);
    expect(comments.status()).toBe(200);
    const comment = await comments.json();
    expect(comment.length).toBeGreaterThan(0);
    expect(comment[0].postId).toBe(firstpost.id);


})