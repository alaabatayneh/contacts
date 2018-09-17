import React, { Component } from 'react'
import { Consumer } from '../../context'
class AddContact extends Component {
  constructor(props) {
    super(props)
    this.nameInput = React.createRef()
    this.mailInput = React.createRef()
    this.phoneInput = React.createRef()
  }
  onSubmit = (e) => {
      e.preventDefault()
      const contact = {
          name: this.nameInput.current.value,
          mail: this.mailInput.current.value,
          phone: this.phoneInput.current.value,
      }
      console.log(contact)
  }

  static defaultProps = {
      name: 'A',
      mail: 'mail',
      phone: '434'
  }

  render() {
    const {name, mail, phone} = this.props
    return (
      <div>
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input ref={this.nameInput} name="name" className="form-control form-control-lg" placeholder="Enter name" defaultValue={name} />
                        <label htmlFor="Email">Name</label>
                        <input ref={this.mailInput} name="mail" className="form-control form-control-lg" placeholder="Enter email" defaultValue={mail}  />
                        <label htmlFor="Phone">Name</label>
                        <input ref={this.phoneInput} name="phone" className="form-control form-control-lg" placeholder="Enter phone" defaultValue={phone}  />
                    </div>
                    <input type='submit' value='Add contact' className="btn btn-light btn-block" />
                </form>
            </div>
        </div>

      </div>
    )
  }
}

export default AddContact