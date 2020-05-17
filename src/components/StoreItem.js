import React from 'react';


class StoreItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    render() {
        return (
        <div>
            <h1>Store</h1>
            <p>Availability</p>
            <img src='' alt='' />
        </div>
        )
    }
}

export default StoreItem;
