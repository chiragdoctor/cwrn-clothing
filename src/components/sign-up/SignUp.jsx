import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';

import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    console.log('displayName', displayName);
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('error', error.message);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Signup with your email and passowrd</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='email'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
