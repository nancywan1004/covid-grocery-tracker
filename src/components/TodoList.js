import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import '../style.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: JSON.parse(localStorage.getItem('list')) || [],
      inputValue: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  resetForm = () => {
    this.setState(this.baseState)
}
  getTodoItems() {
    if (typeof window !== 'undefined') {
        localStorage.setItem('list', JSON.stringify(this.state.list));
    }
    return (
    this.state.list.map((item, index) => {
      return (
        <TodoItem
        delete={this.handleDelete}
        content={item}
        index={index}/>
        )
      })
    )
  }
  render() {
    return (
      <Fragment>
        <div>
          <input style={{margin: 0}} value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul style={{marginTop: 10}}>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}
export default TodoList;
