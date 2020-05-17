import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import SearchBar from './components/SearchBar';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import 'bootstrap/dist/css/bootstrap.min.css';
 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }
 
    render() {
        return (
        <div>
          <Navbar bg="light" expand="lg" className="d-flex">
            <Navbar.Brand href="#" onClick={ () => this.setState({ isPaneOpenLeft: true })}>Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline className="ml-auto p-2">
                <FormControl type="text" placeholder="6-digit postal code.." className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        <div ref={ref => this.el = ref}>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Search the hygiene product'
                from='left'
                width='400px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <SearchBar />
            </SlidingPane>
        </div>
        </div>
        )
    }
}

export default App;