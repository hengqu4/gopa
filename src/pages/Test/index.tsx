import React, { useEffect } from 'react';
import { useModel } from 'umi';

const Group: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const username = currentUser?.username;

  useEffect(() => {
    console.log('现在是/test测试页面');
  }, []);

  return (
    <div>
      <div>用户信息：{JSON.stringify(currentUser)}</div>
      <div>用户：{username}</div>
    </div>
  );
};

export default Group;
