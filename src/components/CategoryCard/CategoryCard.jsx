import { Card, Col, Row } from 'antd';

import React from 'react'

export const CategoryCard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Row gutter={[16, 16]} className="w-full">
        <Col xs={24} sm={8}>
          <Card
            className="rounded-xl border-gray-200 bg-green-500"
            title="Productos Categoria A"
            bordered={false}
          >
            Empezar Conteo
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card
            className="rounded-xl border-gray-200 bg-yellow-500"
            title="Productos Categoria B"
            bordered={false}
          >
            Empezar Conteo
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card
            className="rounded-xl border-gray-200 bg-red-500"
            title="Productos Categoria C"
            bordered={false}
          >
            Empezar Conteo
          </Card>
        </Col>
      </Row>
    </div>
  );
};

