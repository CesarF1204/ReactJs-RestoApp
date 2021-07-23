import React from 'react';

class DataBindingActivity extends React.Component {
    state = {
        first_name: '',
        last_name: '',
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    resetButton = (e) => {
        this.setState({
            first_name: '',
            last_name: ''
        })
    }

    render() {
        return (
            <div>
                First Name: <input type="text" name="first_name" value={this.state.first_name} onChange={this.inputChangeHandler} />
                Last Name: <input type="text" name="last_name" value={this.state.last_name} onChange={this.inputChangeHandler} />
                <button onClick={this.resetButton}>Reset</button>
                <p>Welcome, {this.state.first_name} {this.state.last_name}</p>
            </div>
        )
    }
}

export default DataBindingActivity;