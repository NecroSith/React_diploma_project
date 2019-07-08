import React from 'react';
import oops from '../../img/oops.png';;

const ErrorBlock = () => {
    return <div className="error">
        <img src={oops} alt="oh no!"/>
    </div>
}

export default ErrorBlock;