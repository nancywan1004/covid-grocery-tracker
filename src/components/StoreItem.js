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
        console.log(currProduct);
        // if (currProduct.quantity === 0) {
        //     return (
        //         <div>
        //         <Card style={{ width: '18rem'}, {marginLeft: "-5pt"}}>
        //         <Card.Img variant="top" src="holder.js/100px180" />
        //         <Card.Body>
        //             <Card.Title>{content.name}</Card.Title>
        //             <Card.Text>
        //             Restock on {currProduct.restock_on}
        //             </Card.Text>
        //             <Card.Text>
        //             Location: {currProduct.location}
        //             </Card.Text>
        //         </Card.Body>
        //         </Card>
        //     </div>  
        //     )
        // } else {
        return (
        <div>
            <Card className="text-center" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={content.icon} />
            <Card.Body>
                <Card.Title>{content.name}</Card.Title>
                Availability:
                <Card text="success" border="light">
                    {currProduct.quantity}
                </Card>
                Location:
                <Card.Text>
                 {content.location}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        )
    // }
    }
}

export default StoreItem;
