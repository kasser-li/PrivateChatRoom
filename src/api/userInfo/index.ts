import instance from '@/request/request.ts'
import type { AccountInfo } from './userInfo.ts'

// 用户登录
export const userLogin = (data: AccountInfo): Res<string> => instance.post('/user/login', data)
// 账号注册
export const userRegister = (data: AccountInfo): Res<string> =>
  instance.post('/user/register', data)

export const getUserInfo = (): Res<AccountInfo> => instance.get('/user/info')
