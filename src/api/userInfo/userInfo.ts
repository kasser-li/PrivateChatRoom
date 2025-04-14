// 账号信息
export interface AccountInfo {
  acc: string
  pwd: string
}

// 用户相关类型
export interface UserInfo {
  id: string | number
  name: string
  age: number
  toekn: string
}

export interface LoginParams {
  username: string
  password: string
}
