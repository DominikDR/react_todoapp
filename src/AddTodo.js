import React from 'react';

class AddTodo extends React.PureComponent {
    state = {
        content: '',
    }

    handleChange = (event) => {
        this.setState({ content: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ content: ''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;