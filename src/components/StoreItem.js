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
        const currProduct = content.products.find(product => product.name === this.props.pType);
        return (
        <div>
            <Card style={{ width: '18rem'}, {marginLeft: "-5pt"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{content.name}</Card.Title>
                <Card.Text>
                Availability: {currProduct.quantity} are left
                </Card.Text>
                <Card.Text>
                Location: {currProduct.location}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        )
    }
}

export default StoreItem;
