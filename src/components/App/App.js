import React from "react";
import { Container, Row, Col, Box } from "wix-style-react";

export default () => (
  <Container>
    <Row>
      <Col>
        <Box border="1px solid black" margin="5px">
          Full row
        </Box>
      </Col>
    </Row>
    <Row>
      <Col span={6}>
        <Box border="1px solid black" margin="5px">
          I take half of the size
        </Box>
      </Col>
      <Col span={6}>
        <Box border="1px solid black" margin="5px">
          me too
        </Box>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <Box border="1px solid black" margin="5px">
          One third
        </Box>
      </Col>
      <Col span={4}>
        <Box border="1px solid black" margin="5px">
          Another third
        </Box>
      </Col>
      <Col span={4}>
        <Box border="1px solid black" margin="5px">
          Last third
        </Box>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <Box border="1px solid black" margin="5px">
          One third
        </Box>
      </Col>
      <Col span={8}>
        <Box border="1px solid black" margin="5px">
          Two! thirds
        </Box>
      </Col>
    </Row>
  </Container>
);
