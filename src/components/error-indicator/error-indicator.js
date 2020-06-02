import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <section className='jumbotron'>
             <div className='justify-content-center align-items-center'>
                <img 
                    className='errImg'
                    alt='Everything is going wrong in this world, don`t mind,
                    You don`t really need it' 
                    src="https://i.ya-webdesign.com/images/error-transparent-3.png"></img>        
             </div>


            <p className='text-center'>
                <span className='badge-danger'>We're sorry, but something went wrong.
                Please, try again, and if this persist,
                contact website administrator</span>
            </p>
        </section>
    )
}

export default ErrorIndicator;