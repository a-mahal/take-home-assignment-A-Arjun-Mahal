import React, { useState } from "react";
import "./QueryModal.css"

export default function Modal(props) {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    // This is the function that should update the data on the database
    const resolveQuery = () => {
        const updatedData = {
            id: props.formID,
            question: props.question,
            answer: props.answer,
            description: props.description, //this will be the input value
            createdAt: props.createdAt,
            updatedAt: props.updatedAt,
            title: props.title,
            status: "Closed",
        }
        props.updateFormData(props.formID, updatedData)
    }


    
    return (
        <>
            
                {props.status === 'Closed' ? (
                    <button onClick={toggleModal} className="btn-modal">✅</button>
                ):(
                    <button onClick={toggleModal} className="btn-modal">❌</button>
                )}
            

            {modal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Query | {props.question}</h3>
                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
                        <div className="modal-details">
                        <div className="status-created">
                            <div className="status">
                            <span className={`status-dot ${props.status === 'open' ? 'open' : 'closed'}`}></span>
                            <span>Query Status: {props.status}</span>
                            </div>
                            <div className="created-on">
                            <span>Created on: </span>
                            <span>{props.createdAt}</span>
                            </div>
                        </div>
                        <div className="resolve-button">
                            {props.status === 'Closed' ? (
                                <button className="resolve" onClick={resolveQuery}>Closed</button>
                            ):(
                                <button className="resolve" onClick={resolveQuery}>✔ Resolve</button>
                            )}
                            
                        </div>
                        </div>
                        <h3>Query Description</h3>
                        <h5>{props.description}</h5>
                        <button className="close-modal" onClick={toggleModal}> X </button>
                    </div>
                </div>
            )}
            

        </>


    )
}