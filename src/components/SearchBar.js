import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import StoreList from './StoreList';
import '../style.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'products', pType: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        console.log(event);
        // this.setState({pType: event});
        // event.preventDefault();
        this.setState({value: event});
      }
    
      handleSubmit(event) {
        this.setState({pType: this.state.value});
        event.preventDefault();
      }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose your product: <br></br>
                        <Dropdown value={this.state.value} onSelect={this.handleChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.value}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item eventKey="bleach">Bleach</Dropdown.Item>
                                <Dropdown.Item eventKey="sanitizer">Sanitizer</Dropdown.Item>
                                <Dropdown.Item eventKey="disinfectant_wipes">Disinfectant Wipes</Dropdown.Item>
                                <Dropdown.Item eventKey="mask">Mask</Dropdown.Item>
                                <Dropdown.Item eventKey="soap">Soap</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                    </label>
                    <Button variant="secondary" type="submit">submit</Button>
                </form>

                <StoreList pType={this.state.pType} placesOnMap={this.props.placesOnMap}/>
            </div>
        )
    }
}
export default SearchBar;
