import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  FormField,
  Input,
  Dropdown
} from "wix-style-react";

export default class extends React.Component {
  state = {
    inputValue: "",
    dropdownSelectedId: -1
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header title="Inputs and Selection" />
              <Card.Content>
                <Container fluid>
                  <Row>
                    <Col span={8}>
                      <FormField
                        label="<Input/> - A simple Input"
                        infoContent="Use this for regular text input"
                      >
                        <Input
                          value={this.state.inputValue}
                          onChange={e =>
                            this.setState({ inputValue: e.target.value })
                          }
                          status="error"
                        />
                      </FormField>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>
                      <FormField
                        label="<Dropdown/> - A simple select component"
                        infoContent="Use this to pick a value from a set"
                      >
                        <Dropdown
                          selectedId={this.state.dropdownSelectedId}
                          onSelect={option =>
                            this.setState({ dropdownSelectedId: option.id })
                          }
                          options={[
                            {
                              id: 0,
                              value: "first option"
                            },
                            {
                              id: 1,
                              value: "second option"
                            },
                            {
                              id: 2,
                              value: "MY option"
                            }
                          ]}
                        />
                      </FormField>
                    </Col>
                  </Row>
                </Container>
              </Card.Content>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
