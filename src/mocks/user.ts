import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        data: {
          token: Mock.Random.string(32)
        }
      };
    }
  },
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.integer(20, 60)
        }
      };
    }
  }
] as MockMethod[];
