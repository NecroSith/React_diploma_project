import React from 'react';
import WithCoffeeService from '../hoc/with-coffee-service';
import {connect} from 'react-redux';
import InputMask from 'react-input-mask';

class ContactForm extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let errorState = false;
        if (e.target.querySelector('input[type=name]').value.length < 2) {
            document.querySelector('.error-name').textContent = 'Name is too short!';
            errorState = true;
        }
        else if (e.target.querySelector('input[type=name]').value.length > 15) {
            document.querySelector('.error-name').textContent = 'Name is too long!';
            errorState = true;
        }
        if (errorState === false) {
            const data = {
                name: e.target.querySelector('input[type=name]').value,
                email: e.target.querySelector('input[type=email]').value,
                phone: e.target.querySelector('input[type=phone]').value || '',
                mesage: e.target.querySelector('input[type=text]').value
    
            };
            const {coffeeService} = this.props;
            coffeeService.postData(data)
                .then(res => res.json())
                .then(this.props.formSent)
                .catch(err => new Error(err));
        }
    }


    render() {

        return (
            <form className="form" onSubmit={this.onFormSubmit}>
                <div>
                    <label htmlFor="name" className="required">Name</label>
                    <input type="name" className="error" name="name" required/>
                    <span className="error-name"></span>
                </div>
                <div>
                    <label htmlFor="email" className="required">E-mail</label>
                    <input type="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <InputMask type="phone" name="phone" mask="+7\(999) 999-99-99"/>
                </div>
                
                <label htmlFor="message" className="required">Your message</label>
                <input type="text" className="textarea" name="message" required placeholder="Text us..."/>
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

export default WithCoffeeService()(connect(mapStateToProps)(ContactForm));