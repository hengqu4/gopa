import React, { useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';

const GroupAuthority: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  useEffect(() => {
    console.log('现在是GroupAuthority page');
  }, []);

  return (
    <>
      <PageContainer
        header={{
          title: '组权限',
        }}
        content="这是组权限页面，用于......，可查看....."
        style={{ marginBottom: 30 }}
      />
      <ProCard>
        <div>用户信息：{JSON.stringify(currentUser)}</div>
      </ProCard>
    </>
  );
};

export default GroupAuthority;
