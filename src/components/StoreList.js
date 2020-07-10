import React, {Fragment} from 'react';
import StoreData from '../data/store_data.json';
import StoreItem from './StoreItem.js';

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: StoreData.stores
        }
        this.getStoresByAvail = this.getStoresByAvail.bind(this);
        this.checkAvail = this.checkAvail.bind(this);
    }

    checkAvail(elem) {
        return elem.name === this.props.pType && elem.quantity > 0;
    }

    getStoresByAvail() {
        const availStores = this.state.stores.filter(store =>
            store.products.some(this.checkAvail)
        );
        console.log(availStores);
        // this.state.stores.forEach(store => {
        //     if (!availStores.includes(store)) {
        //         availStores.push(store);
        //     }
        // })
        return (
            availStores.map((item, index) => {
                return (
                    <StoreItem
                    content={item}
                    key={index}
                    pType={this.props.pType}
                    placesOnMap={this.props.placesOnMap}/>
                )
            }
        )
        )
    }

    render() {
        return (
            <Fragment>
            <ul>{this.getStoresByAvail()}</ul>
            </Fragment>
        )
    }
}

export default StoreList;