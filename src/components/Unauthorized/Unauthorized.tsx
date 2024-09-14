import { Row, Col } from 'antd';
import UnAuthorized401 from '../../assets/img/unauthorized.png'

const UnAuthorized = () => {
  return (
    <Row justify="center" align="middle" style={{ marginTop: '10rem', height: '100vh' }}>
      <Col>
        <img width="auto" height="700px" src={UnAuthorized401} alt="Unauthorized" />
      </Col>
    </Row>
  );
};

export default UnAuthorized;
