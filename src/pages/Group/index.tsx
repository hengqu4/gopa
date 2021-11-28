import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// form 的style
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
// form button的style
const buttonLayout = {
  wrapperCol: { offset: 10, span: 8 },
};

const Group: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('现在是/group page');
  }, []);

  const onFormChange = (values: any) => {
    console.log(values);
  };

  const onFinish = (values: any) => {
    console.log('form finish');
    console.log(values);
  };

  const onReset = () => {
    console.log('form Reset');
    form.resetFields();
  };

  return (
    <>
      <PageContainer
        header={{
          title: '所有组',
        }}
        content="这是xxxx页面，用于......，可查看....."
        style={{ marginBottom: 30 }}
      />
      <ProCard>
        <Form
          form={form}
          name="group-form"
          layout="horizontal"
          onFinish={onFinish}
          onValuesChange={onFormChange}
          {...formLayout}
        >
          <Form.Item name="input" label="输入">
            <Input />
          </Form.Item>
          <Form.Item name="text" label="输入长文本">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="select" label="选择框">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="TreeSelect" label="树选择">
            <TreeSelect
              treeData={[
                {
                  title: 'Light',
                  value: 'light',
                  children: [{ title: 'Bamboo', value: 'bamboo' }],
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="Cascader" label="级联选择">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="DatePicker" label="日期选择器">
            <DatePicker />
          </Form.Item>
          <Form.Item name="RangePicker" label="起始日期">
            <RangePicker />
          </Form.Item>
          <Form.Item name="InputNumber" label="数字输入框">
            <InputNumber />
          </Form.Item>
          <Form.Item name="Switch" label="开关" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item {...buttonLayout}>
            <Button htmlType="button" onClick={onReset}>
              清空
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </ProCard>
    </>
  );
};

export default Group;
