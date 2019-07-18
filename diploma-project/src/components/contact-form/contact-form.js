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
        const {coffeeService} = this.props;
        coffeeService.postData(this.state)
            .then(res => res.json())
            .then(this.props.formSent)
            .catch(err => new Error(err));
        this.clearForm(e);
    }

    clearForm = (e) => {
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        })
    }

    validateData(data, type) {
        const input = data.target.value.trim();
        let inputBlock = data.target;
        if (type === 'phone') {
            if (input.length !== 0) {
                inputBlock.style.borderColor = 'green';
                this.setState({
                    phone: input
                })
            }
        }
        if (type === 'name') {
            let nameField = document.querySelector('.error-name');
            if (input.length < 2 && input !== '') {
                nameField.textContent = 'Name is too short!';
                inputBlock.style.borderColor = 'red';
                return false;
            }
            else if (input.length > 20) {
                nameField.textContent = 'Name is too long';
                inputBlock.style.borderColor = 'red';
                return false;
            }
            else if (input === '') {
                nameField.textContent = null;
                inputBlock.style.borderColor = 'grey';
                return false;
            }
            inputBlock.style.borderColor = 'green';
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
                inputBlock.style.borderColor = 'green';
                emailField.textContent = null;
                this.setState({
                    email: input
                });
                return true;
            }
            emailField.textContent = 'Email is not valid!';
            inputBlock.style.borderColor = 'red';
            return false;
        }
        else if (type === 'message') {
            let msgField = document.querySelector('.error-message');
            if (input !== '' && input.length < 2) {
                inputBlock.style.borderColor = 'red';
                msgField.textContent = 'Message is too short!';
                return false;
            }
            msgField.textContent = null;
            inputBlock.style.borderColor = 'green';
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
                    <span className="error-field error-name"></span>
                    <input type="name" className="error" name="name" required onChange={(e) => this.validateData(e, 'name')}/>
                </div>
                <div>
                    <label htmlFor="email" className="required" >E-mail</label>
                    <span className="error-field error-email"></span>
                    <input type="email" name="email" required onChange={(e) => this.validateData(e, 'email')} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <InputMask type="phone" name="phone" mask="+7 \(999) 999-99-99" placeholder="+7 (___) ___-__-__" onChange={(e) => this.validateData(e, 'phone')} />
                </div>
                
                <label htmlFor="message" className="required">Your message</label>
                <div>
                    <span className="error-field error-message"></span>
                    <input type="text" className="textarea" name="message" required placeholder="Text us..." onChange={(e) => this.validateData(e, 'message')} />
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