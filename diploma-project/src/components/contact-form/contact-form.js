import React from 'react';
import WithCoffeeService from '../hoc/with-coffee-service';
import {formSent} from '../../actions';
import {connect} from 'react-redux';
import InputMask from 'react-input-mask';

class ContactForm extends React.Component {
    state = {
        name: null,
        email: null,
        phone: '',
        message: null,
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let errorState = false;
        if (errorState === false) {
            const {coffeeService} = this.props;
            coffeeService.postData(this.state)
                .then(res => res.json())
                .then(this.props.formSent)
                .catch(err => new Error(err));
            this.clearForm(e);
        }
    }

    clearForm = (e) => {
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        })
    }

    validateData(data, type) {
        console.log(this.state);
        const input = data.target.value;
        if (type === 'name') {
            let nameField = document.querySelector('.error-name');
            if (input.length < 2 && input !== '') {
                nameField.textContent = 'Name is too short!';
                return false;
            }
            else if (input.length > 20) {
                nameField.textContent = 'Name is too long';
                return false;
            }
            else if (input === '') {
                nameField.textContent = null;
                return false;
            }
            nameField.textContent = null;
            this.setState({
                name: input
            });
            return true;
        }
        else if (type === 'email') {
            let emailField = document.querySelector('.error-email');
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const result = re.test(String(input).toLowerCase());
            if (result || input.length === 0) {
                emailField.textContent = null;
                this.setState({
                    email: input
                });
                return true;
            }
            emailField.textContent = 'Email is not valid!';
            return false;
        }
        else if (type === 'message') {
            let msgField = document.querySelector('.error-message');
            if (input !== '' && input.length < 2) {
                msgField.textContent = 'Message is too short!';
                return false;
            }
            msgField.textContent = null;
            this.setState({
                message: input
            });
            return true;
        }
    }


    render() {

        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                <div>
                    <label htmlFor="name" className="required">Name</label>
                    <input type="name" className="error" name="name" required onChange={(e) => this.validateData(e, 'name')}/>
                    <span className="error-field error-name"></span>
                </div>
                <div>
                    <label htmlFor="email" className="required" >E-mail</label>
                    <input type="email" name="email" required onChange={(e) => this.validateData(e, 'email')} />
                    <span className="error-field error-email"></span>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <InputMask type="phone" name="phone" mask="+7 \(999) 999-99-99" placeholder="+7 (___) ___-__-__"/>
                </div>
                
                <label htmlFor="message" className="required">Your message</label>
                <div>
                    <input type="text" className="textarea" name="message" required placeholder="Text us..." onChange={(e) => this.validateData(e, 'message')} />
                    <span className="error-field error-message"></span>
                </div>
                
                <button type="submit" >
                    Send us
                </button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formSent: state.formSent
    }
}

const mapDispatchToProps = {
    formSent
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ContactForm));