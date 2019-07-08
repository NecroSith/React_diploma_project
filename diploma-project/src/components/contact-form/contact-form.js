import React from 'react';
import WithCoffeeService from '../hoc/with-coffee-service';
import {connect} from 'react-redux';

class ContactForm extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = {
            name: e.target.querySelector('input[type=name]').value,
            email: e.target.querySelector('input[type=email]').value,
            phone: e.target.querySelector('input[type=phone]').value || '',
            mesage: e.target.querySelector('input[type=text]').value

        };
        const {coffeeService} = this.props;
        console.log(coffeeService);
        console.log(data);
        coffeeService.postData(data)
            .then(res => res.json())
            .catch(err => new Error(err));
    }

    render() {
        return (
            <form className="form" onSubmit={(e) => this.onFormSubmit(e)}>
                <div>
                    <label htmlFor="name" className="required">Name</label>
                    <input type="name" className="error" name="name" required/>
                </div>
                <div>
                    <label htmlFor="email" className="required">E-mail</label>
                    <input type="email" name="email" required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name="phone" />
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