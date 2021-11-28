import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
};

export async function login(params: LoginParamsType) {
  console.log('/api/login', params);
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

// /** 退出登录接口 POST /api/login/outLogin */
// export async function outLogin(options?: { [key: string]: any }) {
//   return request<Record<string, any>>('/api/login/outLogin', {
//     method: 'POST',
//     ...(options || {}),
//   });
// }
