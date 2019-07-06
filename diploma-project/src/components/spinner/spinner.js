import React from 'react';
import './spinner.sass';

const style = {
    margin: '0 auto'
}

const Spinner = () => {
    return (
        <div style={style} className="lds-dual-ring">
            <div></div>
        </div>
    )
}

export default Spinner;