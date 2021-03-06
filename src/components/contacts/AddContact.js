import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddContact extends Component {
  state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
  }
  
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  
  onSubmit = async (dispatch, e) => {
      e.preventDefault() 
      const { name, email, phone } = this.state
      if (name === '') {
        this.setState({errors: {name: 'Name is required'}})
        return;
      }
      if (email === '') {
        this.setState({errors: {name: 'Email is required'}})
        return;
      }
      if (phone === '') {
        this.setState({errors: {name: 'Phone is required'}})
        return;
      }
      const newContact = {
          name,
          email,
          phone,
      }

      const res = await axios
        .post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({type: 'ADD_CONTACT', payload: res.data})

      this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}
      }) 

      // redirect to homepage
      this.props.history.push('/')
  }

  render() {
    const { name, email, phone, errors } = this.state

    

    return (
        <Consumer>
            {value => {
                const {dispatch} = value
                return (
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className='card-body'>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter phone"
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <input type='submit' value='Add contact' className="btn btn-light btn-block" />
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default AddContact