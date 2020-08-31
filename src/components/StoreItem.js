import React from 'react';
import Card from 'react-bootstrap/Card';
import '../style.css';

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverState: false // isOnMap hover state toggle
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({ hoverState: !this.state.hoverState });
    }

    render() {
        const { content } = this.props;
        const currProduct = content.products.find(product => product.name === this.props.pType);
        console.log(currProduct);
        let isOnMap;
        console.log([...this.props.placesOnMap]);
        [...this.props.placesOnMap].forEach((place) => console.log(place.id));
        console.log(content.place_id);
        console.log([...this.props.placesOnMap].some((place) => place.id === content.place_id));
        if ([...this.props.placesOnMap].some((place) => place.id === content.place_id) && this.state.hoverState === true) {
            isOnMap = "Yes, locate on map!";
        } else if (this.state.hoverState === true && ![...this.props.placesOnMap].some((place) => place.id === content.place_id)) {
            isOnMap = "Sorry, the shop is out of scope!"
        } else {
            isOnMap = "Near me?"
        }
        return (
            <div className="card-item">
                <Card className="text-center" style={{ width: '18rem' }}>
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
                        <p onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{isOnMap}</p>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default StoreItem;
