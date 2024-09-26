import request from '@/utils/request';
const baseUrl = '/api/v1/user/member/private'

// 表单登录接口
interface LoginFormType {
  memberId: string;
  memberPwd: string;
}

/** 登录api */
export const loginApi = (data: LoginFormType) => {
  return request.post(baseUrl + '/login', data)
}