import Mock from 'mockjs';

// 开发环境启用 Mock
if (import.meta.env.MODE === 'development') {
  Mock.setup({
    timeout: '200-600' // 响应延迟
  });

  // 动态加载所有 mock 模块
  const mockModules = import.meta.glob('./modules/*.ts');
  
  Object.values(mockModules).forEach(module => {
    module().then((mod: any) => {
      mod.default.forEach((mock: Mock.MockjsMock) => {
        Mock.mock(...mock);
      });
    });
  });
}

export default Mock;
