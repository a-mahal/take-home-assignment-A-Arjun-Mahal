import React, { useState } from "react";
import "./Modal.css"

export default function Modal() {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const addQuery = () => {

    }
    
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                +
            </button>

            {modal && (<div className="modal">
                <div className="overlay"></div>
                    <div className="modal-content">
                        <h2>Create a Query</h2>
                        <input type="text" style={{ height: '50px', width: '300px' }}/>
                        <button className="submit-query" onClick={addQuery}> Submit Query</button>
                        <button className="close-modal" onClick={toggleModal}> X </button>
                    </div>
            </div>)}
            

        </>


    )
}