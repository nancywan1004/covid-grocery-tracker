import React from 'react';
import Card from 'react-bootstrap/Card';

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name,
            icon: this.props.icon,
            location: this.props.location,
            products: this.props.products
         };
    }

    render() {
        const {content} = this.props;
        return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{content.name}</Card.Title>
                <Card.Text>
                {content.location}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        )
    }
}

export default StoreItem;
