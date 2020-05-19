import React, {Component, Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.delete(this.props.index);
    }
    render() {
        const {content} = this.props;
        return (
            <Fragment>
            <Card style={{ width: '18rem'}}>
            <ListGroup variant="flush" onClick={this.handleDelete}>
                <ListGroup.Item>{content}</ListGroup.Item>
            </ListGroup>
            </Card>
            </Fragment>
        )
    }
}

export default TodoItem;
