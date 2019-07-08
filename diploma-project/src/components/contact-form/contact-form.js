import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import CoffeeService from '../../services/service';
import {connect} from 'react-redux';

class ContactForm extends React.Component {

    onFormSubmit = (e) => {
        const data = {
            name: e.target.querySelector('input[type=name]').value,
            email: e.target.querySelector('input[type=email]').value,
            phone: e.target.querySelector('input[type=phone]').value,
            mesage: e.target.querySelector('input[type=text]').value

        };
        console.log(data);
        const result = new CoffeeService()
        result.postData(data)
            .then(res => res.json())
            .catch(err => new Error(err));
    }

    render() {
        return (
            <Formik 
                render={() => (
                    <Form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        return this.onFormSubmit(e);
                    }} >
                        <div>
                            <label htmlFor="name" className="required">Name</label>
                            <Field type="name" className="error" name="name" required/>
                            <ErrorMessage name="name">Name is not correct</ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="email" className="required">E-mail</label>
                            <Field type="email" name="email" required/>
                            <ErrorMessage name="email" component="div">  
                            {/* {errorMessage => <div className="error">{errorMessage}</div>} */}
                            </ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field type="phone" name="phone" />
                            <ErrorMessage name="email" component="div">  
                            {/* {errorMessage => <div className="error">{errorMessage}</div>} */}
                            </ErrorMessage>
                        </div>
                        
                        <label htmlFor="message" className="required">Your message</label>
                        <Field type="text" className="textarea" name="message" required placeholder="Text us..."/>
                        {/* <ErrorMessage name="social.twitter" className="error" component="div"/>  
                        {status && status.msg && <div>{status.msg}</div>} */}
                        <button type="submit">
                            Send us
                        </button>
                    </Form>
                )}
            /> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formSent: state.formSent
    }
}


export default connect(mapStateToProps)(ContactForm);