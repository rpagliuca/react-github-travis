import React, { Component } from 'react';
import * as rs from 'reactstrap';

class App extends Component {
  render() {
    return (
      <rs.Container>
        <rs.Row>
          <rs.Col>
            <rs.Form>
              <rs.FormGroup>
                <rs.Label for="exampleEmail">Example Form Label</rs.Label>
                <rs.Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </rs.FormGroup>
              <rs.Button>Example Button</rs.Button>
            </rs.Form>
          </rs.Col>
        </rs.Row>
        <rs.Row>
          <rs.Col>
            <rs.ListGroup>
              <rs.ListGroupItem className="justify-content-between">Example List Item 1<rs.Badge pill>14</rs.Badge></rs.ListGroupItem>
              <rs.ListGroupItem className="justify-content-between">Example List Item 2<rs.Badge pill>2</rs.Badge></rs.ListGroupItem>
              <rs.ListGroupItem className="justify-content-between">Example List Item 3<rs.Badge pill>1</rs.Badge></rs.ListGroupItem>
            </rs.ListGroup>
          </rs.Col>
        </rs.Row>
        <rs.Alert>Example Alert</rs.Alert>
      </rs.Container>
    );
  }
}

export default App;
