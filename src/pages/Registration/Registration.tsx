import { Button, Card, Divider, Flex, Form, Input, Image, Typography, } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import { RegistrationFormValues } from '../../interface';
import { useAuth } from '../../components/Context/AuthContext';
import { APP_ROUTES } from '../../utils';
const { Title } = Typography;

const Registration = () => {
  const [form] = Form.useForm<RegistrationFormValues>();
  const navigate = useNavigate()
  const { login } = useAuth();
  const onFinish = (values: RegistrationFormValues) => {
    try {
      const userData = { username: values.username, email: values.email, password: values.password }
      login(userData)
      navigate(APP_ROUTES.LOGIN)
    }
    catch(e){
      console.log('Registration Failed',e)
    }
  }
  const handleRegistration = async () => {
    console.log('calling regis');
  };
  return (
    <Flex justify="center">
      <Card style={{ width: '450px', height: '90%', padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image width={120} src={logo} preview={false} />
        </div>
        <Divider />
        <div className='itemAligment'>
          <Title level={3} style={{ margin: '0' }}>TODO APPLICATION</Title>
        </div>
        <br />
        <br />
        <Form
          form={form}
          onFinish={onFinish}
          labelWrap
          labelAlign="left"
          size="large"
          style={{ maxWidth: '100%' }}
        >
          <Form.Item name="username"
            rules={[{ required: true, message: ' Please input your username!' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="email"
            rules={[{ required: true, message: ' Please input your email!' }]}>
            <Input placeholder="Email" style={{ marginTop: '10px' }} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size='large'
            className='full-width'
            onClick={handleRegistration}
            style={{ width: '100%', marginTop: '15px' }}
          >
            Register
          </Button>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Link to={APP_ROUTES.LOGIN} style={{ marginTop: '10px' }}>Sign In</Link>
          </div>
        </Form>
      </Card>
    </Flex>
  )
}

export default Registration
