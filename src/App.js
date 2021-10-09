import ReactMarkdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ``
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <Container>
      <Row>
        <Col>
          <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
        </Col>
        <Col>
          <div id="preview">
            <ReactMarkdown children={this.state.input} />
          </div>
        </Col>
      </Row>
      </Container>
    );
  }
}
