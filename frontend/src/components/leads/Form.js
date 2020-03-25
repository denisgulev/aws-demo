import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLead } from '../../actions/leads';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSumbit = e => {
    e.preventDefault();
    // Here we use the state, beacuse every change in the input fields,
    // is reflected to the state
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
    console.log('e', e);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Fragment>
        <h2>Add Lead</h2>
        <form onSubmit={this.handleSumbit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(undefined, { addLead })(Form);
