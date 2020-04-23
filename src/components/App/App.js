import React from "react";
import { Container, Row, Col, Card } from "wix-style-react";

export default () => (
  <Container>
    <Row stretchViewsVertically>
      <Col span={6}>
        <Card stretchVertically>
          <Card.Header title="first card" subtitle="nice" />
          <Card.Content>some content</Card.Content>
        </Card>
      </Col>
      <Col span={6}>
        <Card stretchVertically>
          <Card.Header title="What is Lorem Ipsum?" />
          <Card.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Content>
        </Card>
      </Col>
    </Row>
    <Row stretchViewsVertically>
      <Col span={4}>
        <Card>
          <Card.Header title="first card" subtitle="one third" />
          <Card.Content>some content</Card.Content>
        </Card>
      </Col>
      <Col span={4}>
        <Card>
          <Card.Header title="What is Lorem Ipsum?" />
          <Card.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Content>
        </Card>
      </Col>
      <Col span={4}>
        <Card>
          <Card.Header title="third card" subtitle="last third" />
          <Card.Content>some content</Card.Content>
        </Card>
      </Col>
    </Row>
  </Container>
);
