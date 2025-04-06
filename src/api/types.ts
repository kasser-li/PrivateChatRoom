// 基础响应类型
export interface ApiResponse<T = any> {
    code: number;
    data: T;
    message?: string;
  }
  
  // 用户相关类型
  export interface UserInfo {
    name: string;
    age: number;
  }
  
  export interface LoginParams {
    username: string;
    password: string;
  }
  