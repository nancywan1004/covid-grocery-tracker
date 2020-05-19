import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import SearchBar from './components/SearchBar';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import './style.css'
 
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
          <Navbar expand="lg" className="d-flex">
            <Button variant="outline-success" onClick={ () => this.setState({ isPaneOpenLeft: true })}>Inventory</Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline className="ml-auto p-2">
                <Button variant="outline-success" onClick={ () => this.setState({ isPaneOpen: true })}>GroceryCheck</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        <div ref={ref => this.el = ref} style={{backgroundColor: 'black'}}>
        <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='Type in your grocery list'
                width='400px'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
            <TodoList />
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Search for hygiene product'
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

const domContainer = document.getElementById('inventory');
ReactDOM.render(<App />, domContainer);
