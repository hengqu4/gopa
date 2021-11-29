import React, { useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';

const Member: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  useEffect(() => {
    console.log('现在是/member page');
  }, []);

  return (
    <>
      <PageContainer
        header={{
          title: '所有成员',
        }}
        content="这是xxxx页面，用于......，可查看....."
        style={{ marginBottom: 30 }}
      />
      <ProCard>
        <div>用户信息：{JSON.stringify(currentUser)}</div>
      </ProCard>
    </>
  );
};

export default Member;
