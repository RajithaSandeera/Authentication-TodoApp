import { Button, Card, Typography, Image, Divider, Input, Flex, Form } from 'antd';
import logo from '../../assets/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { LoginFormValues } from '../../interface';
import { useAuth } from '../../components/Context/AuthContext';
import { APP_ROUTES } from '../../utils';

const { Title, Text } = Typography;

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm()

  const handleLogin = async () => {
    console.log('calling login');
  };

  const onFinish = async (values: LoginFormValues) => {
    try {
      const userData = { email: values.email, password: values.password };
      login(userData);
      navigate(APP_ROUTES.TODO);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <Flex justify="center">
      <Card style={{ width: '450px', padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image width={120} src={logo} preview={false} />
        </div>
        <Divider />
        <div className='itemAligment'>
          <Title level={3} style={{ margin: '0' }}>TODO APPLICATION</Title>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Text disabled>Create an Account if you don't have one</Text>
          <Link to='/user-registration' style={{ marginTop: '10px' }}>Create an Account</Link>
        </div>
        <br />
        <Form
          form={form}
          onFinish={onFinish}
          labelWrap
          labelAlign="left"
          size="large"
          style={{ maxWidth: '100%' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Input password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size='large'
            className='full-width'
            onClick={handleLogin}
            style={{ width: '100%', marginTop: '15px' }}
          >
            Login
          </Button>
        </Form>
        <br />
        <Divider />
      </Card>
    </Flex>
  );
};

export default Login;
