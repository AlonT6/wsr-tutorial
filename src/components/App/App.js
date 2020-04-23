import React from "react";
import {
  Page,
  Grid,
  Card,
  Box,
  Input,
  InputArea,
  Dropdown,
  Checkbox,
  Button,
  FormField,
  Text,
  Heading,
  Container,
  Row,
  Col
} from "wix-style-react";

export default class extends React.Component {
  initialState = {
    name: "",
    dropdownSelectedId: -1,
    funFact: "",
    agreed: false
  };

  state = {
    name: "",
    dropdownSelectedId: -1,
    funFact: "",
    agreed: false,
    submitted: false
  };

  submittedInfo = {
    name: "",
    color: "",
    funFact: ""
  };

  isSubmitEnabled = () => this.state.agreed && this.state.name;
  clearForm = () => {
    this.setState({ ...this.initialState });
  };

  handleSubmit = () => {
    this.submittedInfo.name = this.state.name;
    this.submittedInfo.color = this.colorsOptions.find(
      col => col.id === this.state.dropdownSelectedId
    ).value;
    this.submittedInfo.funFact = this.state.funFact;

    this.setState({ submitted: true });
  };

  colorsOptions = [
    {
      id: 0,
      value: "Red"
    },
    {
      id: 1,
      value: "Blue"
    },
    {
      id: 2,
      value: "Green"
    },
    {
      id: 3,
      value: "Yellow"
    },
    {
      id: 4,
      value: "Pink"
    }
  ];

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <Container>
          <Row>
            <Box align="space-between" padding="3">
              <Heading appearance="H1">FED for BED form</Heading>
              <Box align="space-between" padding="2">
                <Button
                  priority="secondary"
                  style={{ marginRight: "12px" }}
                  onClick={this.clearForm}
                >
                  Clear
                </Button>
                <Button
                  disabled={!this.isSubmitEnabled()}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Row>
          <Row>
            <Col span={8}>
              <Card>
                <Card.Header
                  title="FED for BED"
                  subtitle="Create your own page with wix-style-react"
                />
                <Card.Divider />
                <Card.Content>
                  <Row>
                    <Col span={6}>
                      <FormField label="Name" required>
                        <Input
                          value={this.state.name}
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                          placeholder="Enter a name"
                        />
                      </FormField>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <FormField
                        label="Favorite color"
                        infoContent="Use this to pick a value from a set"
                      >
                        <Dropdown
                          placeholder="Enter a color"
                          selectedId={this.state.dropdownSelectedId}
                          onSelect={option =>
                            this.setState({ dropdownSelectedId: option.id })
                          }
                          options={this.colorsOptions}
                        />
                      </FormField>
                    </Col>
                  </Row>
                  <Row>
                    <Box align="space-between">
                      <Checkbox
                        checked={this.state.agreed}
                        onChange={() =>
                          this.setState({ agreed: !this.state.agreed })
                        }
                      >
                        I agree for the terms of use
                      </Checkbox>
                      <Box align="space-between" padding="2">
                        <Button
                          priority="secondary"
                          style={{ marginRight: "12px" }}
                          onClick={this.clearForm}
                        >
                          Clear
                        </Button>
                        <Button
                          disabled={!this.isSubmitEnabled()}
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
            <Col span={4}>
              <Row>
                <Card>
                  <Card.Header title="Extra" />
                  <Card.Divider />
                  <Card.Content>
                    <FormField label="Fun Fact">
                      <InputArea
                        rows={4}
                        placeholder="Enter something interesting"
                        value={this.state.funFact}
                        onChange={e =>
                          this.setState({ funFact: e.target.value })
                        }
                      />
                    </FormField>
                  </Card.Content>
                </Card>
              </Row>
              <Row>
                {this.state.submitted && (
                  <Card>
                    <Card.Header title="Submitted Info" />
                    <Card.Divider />
                    <Card.Content>
                      <Row>
                        <Col span={6}>
                          <Text skin="standard">Name:</Text>
                        </Col>
                        <Col span={6}>
                          <Text skin="standard">{this.submittedInfo.name}</Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={6}>
                          <Text skin="standard">Favorite Color:</Text>
                        </Col>
                        <Col span={6}>
                          <Text skin="standard">
                            {this.submittedInfo.color}
                          </Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={6}>
                          <Text skin="standard">Fun Fact:</Text>
                        </Col>
                        <Col span={6}>
                          <Text skin="standard">
                            {this.submittedInfo.funFact}
                          </Text>
                        </Col>
                      </Row>
                    </Card.Content>
                  </Card>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
