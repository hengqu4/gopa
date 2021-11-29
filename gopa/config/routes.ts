export default [
  { path: '/', redirect: '/test' },
  { path: '/group', name: 'group', icon: 'table', component: './Group' },
  { path: '/member', name: 'member', icon: 'dashboard', component: './Member' },
  {
    path: '/group-authority',
    name: 'group-authority',
    icon: 'crown',
    component: './GroupAuthority',
  },
  { path: '/user', name: 'user', icon: 'user', component: './User' },
  { path: '/test', name: 'test', icon: 'smile', component: './Test' },
  { path: '/login', component: './Login', layout: false },
  // 当role==="admin"时，出现管理员页面。此处暂时无用
  // {
  //   path: '/admin',
  //   name: '管理页',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     { path: '/admin/sub-page', name: '二级管理页', icon: 'smile', component: './Test' },
  //     { component: './404' },
  //   ],
  // },
  { component: './404' },
];
