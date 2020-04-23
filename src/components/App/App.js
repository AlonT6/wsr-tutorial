import React from "react";
import { Card, Col, Row, FormField, Input } from "wix-style-react";

class App extends React.Component {
  state = {
    input1Length: 0,
    input2Length: 0
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Card>
          <Card.Header title="first card" />
          <Card.Divider />
          <Row>
            <Col span={12}>
              <FormField
                label="An input field"
                required
                infoContent="Help me fill the field"
                charCount={5 - this.state.input1Length}
              >
                <Input
                  onChange={e =>
                    this.setState({
                      input1Length: e.target.value.length
                    })
                  }
                />
              </FormField>
              <FormField
                label="An input field"
                required
                infoContent="Help me fill the field"
                charCount={5 - this.state.input2Length}
              >
                <Input
                  onChange={e =>
                    this.setState({
                      input2Length: e.target.value.length
                    })
                  }
                />
              </FormField>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default App;
