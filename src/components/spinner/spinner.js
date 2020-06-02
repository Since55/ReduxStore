import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// import Loader from 'react-loader-spinner'


// const Spinner2 = () => {
//     return(
//      <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs

//      />
//     );
// }

const Spinner = () => {
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
