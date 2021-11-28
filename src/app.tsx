import React, { useEffect } from 'react';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

const loginPath = '/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
export type currentUserType = {
  username: string;
  role: string;
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * async 的 function。会在整个应用最开始执行，返回值会作为全局共享的数据。
 * Layout 插件、Access 插件以及用户都可以通过 useModel('@@initialState') 直接获取到这份数据
 * initialState:运行时配置中，getInitialState 的返回值。
 * */
export async function getInitialState(): Promise<{
  currentUser?: currentUserType;
  settings?: Partial<LayoutSettings>;
}> {
  console.log('getInitialState');

  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');

  // 如果不是登录页面/user/login
  if (history.location.pathname !== loginPath && username && role) {
    const currentUser = { username, role };
    console.log('currentUser_init:', currentUser);
    return {
      currentUser,
      settings: {},
    };
  }
  // 如果是登录页面
  return { settings: {} };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  console.log('initialState', initialState);
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        console.log('未登录');
        history.push(loginPath);
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};
