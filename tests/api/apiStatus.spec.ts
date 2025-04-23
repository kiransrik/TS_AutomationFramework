import { test, expect, request } from '@playwright/test';

test('GET /posts should return 200', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts');
  
  expect(response.status()).toBe(200);
});
