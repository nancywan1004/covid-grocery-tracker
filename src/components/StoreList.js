import React, {Fragment} from 'react';
import StoreData from '../data/store_data.json';
import StoreItem from './StoreItem.js';

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: StoreData.stores
        }
        this.getAvailableStores = this.getAvailableStores.bind(this);
    }

    getAvailableStores() {
        const checkAvail = (elem) => elem.name === this.props.pType && elem.quantity > 0;
        const availStores = this.state.stores.filter(store =>
            store.products.some(checkAvail)
        );
        console.log(availStores);
        return (
            availStores.map((item, index) => {
                return (
                    <StoreItem
                    content={item}
                    index={index}/>
                )
            }
        )
        )
    }



    render() {
        return (
            <Fragment>
            <div>{this.props.pType}</div>
            <ul>{this.getAvailableStores()}</ul>
            </Fragment>
        )
    }
}

export default StoreList;