import React from 'react';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import {Container, Row, Col} from 'reactstrap';
import './contact-us.sass';
import {connect} from 'react-redux';
import ContactForm from '../contact-form/';
import Spinner from '../spinner';
import thankyouImg from '../../logo/thankyou.svg';
import {formLoaded, formError} from  '../../actions/';
import oops from '../../img/oops.png';

class ContactUs extends React.Component {

    componentDidMount() {
        this.props.formLoaded();
    }

    componentDidCatch() {
        this.props.formError();
    }

    render() {

        const {error, loading, formSent} = this.props;

        console.log(formSent);

        if (error) {

            return (
                <div className="error-block">
                    <img src={oops} alt="oh no, server is out there somewhere!" />
                </div>
            )
        } 

        const content = formSent ? <div className="thankyou">
                            <div className="title">Thank you so much!</div> 
                            <div className="title">We will contact you as soon as possible!</div>
                            <img src={thankyouImg} alt="thank you!" />
                            <button className="want-more">
                                Another?
                            </button>
                        </div> : <ContactForm />;

        return (
            <>
                <section className="about">
                    <Container>
                        <Row>
                            <Col lg={{ size: 6, offset: 3}} className="centered">
                                <div className="title">Tell us about your tastes</div>
                                <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                                { loading ? <Spinner/> : content}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formSent: state.formSent,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    formLoaded,
    formError
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);