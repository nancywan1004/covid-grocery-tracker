import React, {Fragment} from 'react';
import StoreItem from './StoreItem.js';

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        }
        this.getStoresByAvail = this.getStoresByAvail.bind(this);
    }

    getStoresByAvail(pType) {
        fetch("http://localhost:9000/inventory/" + pType)
            .then(res => res.json())
            .then(res => this.setState({ stores: res }))
            .catch(err => err);
    }

    componentDidUpdate(prevProps) {
        if (!!this.props.pType && this.props !== prevProps) {
        this.getStoresByAvail(this.props.pType);
        }
    }

    render() {
        const {stores} = this.state;
        console.log(stores);
        return (
            <Fragment>
            <ul>{stores.map((item, index) => (
                   <StoreItem
                    content={item}
                    key={index}
                    pType={this.props.pType}
                    placesOnMap={this.props.placesOnMap}/>
            ))}</ul>
            </Fragment>
        )
    }
}

export default StoreList;