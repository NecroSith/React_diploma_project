import React from 'react';
import beansLogoBlack from '../../logo/Beans_logo_dark.svg';
import {Container, Row, Col} from 'reactstrap';
import './contact-us.sass';
import {connect} from 'react-redux';
import ContactForm from '../contact-form/';
import Spinner from '../spinner';
import thankyouImg from '../../logo/thankyou.svg';
import {formLoaded} from  '../../actions/';


class ContactUs extends React.Component {

    
    componentDidMount() {
        this.props.formLoaded();
    }

    render() {

        const {error, loading, formSent} = this.props;

        console.log(formSent);

        if (error) {

            return (
                <div>
                    {/* <img src={error502} alt="oh no, server is out there somewhere!" /> */}
                </div>
            )
        } 

        const thankyou = <div className="thankyou">
                            <div className="title">Thank you so much!</div> 
                            <div className="title">We will contact you as soon as possible!</div>
                            <img src={thankyouImg} alt="thank you!" />
                            <button className="want-more">
                                Another?
                            </button>
                        </div>;

        return (
            <>
                <section className="about">
                    <Container>
                        <Row>
                            <Col lg={{ size: 6, offset: 3}} className="centered">
                                <div className="title">Tell us about your tastes</div>
                                <img className="beanslogo" src={beansLogoBlack} alt="Beans logo" />
                                { loading ? <Spinner/> : <ContactForm />}
                                { formSent ? thankyou : null}
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
    formLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);