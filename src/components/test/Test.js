import React, { Component } from 'react'
class Test extends Component {
    
    state = {
        title: '',
        body: ''
    }

    // HTTP calss happen below
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
    }

    // Runs before DidMount
    componentWillMount() {

    }

    // When the component is updated by changes a state or something
    componentDidUpdate() {

    }

    componentWillUpdate() {

    }

    // takes 2 args, when the component recieves new state, usually used in Redux
    componentWillReceiveProps(nextProps, state) {

    }

    render() { 
        const {title, body} = this.state
        return (
            <React.Fragment>
                <h1>Test Page</h1>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </React.Fragment>
        );
    }
}

export default Test;