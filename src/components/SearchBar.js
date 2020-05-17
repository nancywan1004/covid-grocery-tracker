import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'products'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        console.log(event);
        this.setState({value: event});
      }
    
      handleSubmit(event) {
        alert('Your are looking for ' + this.state.value);
        event.preventDefault();
      }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose your product:
                        <Dropdown value={this.state.value} onSelect={this.handleChange}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.value}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item eventKey="toilet paper">Toilet Paper</Dropdown.Item>
                                <Dropdown.Item eventKey="sanitizer">Sanitizer</Dropdown.Item>
                                <Dropdown.Item eventKey="wet tissue">Wet Tissue</Dropdown.Item>
                                <Dropdown.Item eventKey="masks">Masks</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default SearchBar;
