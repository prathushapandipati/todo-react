import React, { Component } from "react";


export class AddTodo extends Component {

    state = {  //Initial State av vår Component
        title: ''
    };

    onChange = (e) => {  //Method som ändrar värdet av this.state.title
        this.setState({ title: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();  // så sidan laddas inte om
        this.props.addTodo(this.state.title); //använder metoder addTodo från App.js
        this.setState({ title: '' }); //Säger vi att bara skriva title state som tom sträng
    };

    render() {  // Allt här visas i webbläsare
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo" style={{ flex: '10', padding: '5px' }} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
};

export default AddTodo;