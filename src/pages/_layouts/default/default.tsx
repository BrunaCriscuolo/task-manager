import { ReactNode } from 'react';

import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Row>
    <Col>
      <Title>Task Manager</Title>
    </Col>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Row>
);
