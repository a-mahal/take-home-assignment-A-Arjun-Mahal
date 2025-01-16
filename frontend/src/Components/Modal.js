import React, { useState } from "react";
import "./Modal.css"

export default function Modal(props) {
    
    const [modal, setModal] = useState(false);
    const [val, setVal] = useState();
    const [date, setDate] = useState();

    const toggleModal = () => {
        setModal(!modal)
    }

    // function to get the date 
    function getCurrentDate() {
        const today = new Date();
      
        // Get the year, month (0-indexed), and day
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months are 0-indexed (January is 0)
        const day = today.getDate();
      
        // Format the date as "YYYY-MM-DD"
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      }
      
    // Get the current date string
    const currentDate = getCurrentDate();

    // This is the function that should update the data on the database
    const addQuery = () => {
        const updatedData = {
            id: props.formID,
            question: props.question,
            answer: props.answer,
            description: val, //this will be the input value
            createdAt: currentDate,
            updatedAt: date,
            title: "test",
            status: "open",
        }
        props.updateFormData(props.formID, updatedData)
    }

    // this changes the val
    const change = event => {
        setVal(event.target.value)
    }

    // this changes the date
    const changeDate = event => {
        setDate(event.target.value)
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
                        <textarea 
                            onChange={change}
                            value={val} 
                            type="text" 
                            style={{ width: '90%',
                                    height: '110px',
                                    margin: '10px auto',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    fontSize: '14px',
                                    resize: 'vertical', }}
                        />
                        <h3>Write the date</h3>
                        <input 
                            onChange={changeDate}
                            value={date} 
                            type="text" 
                            style={{ height: '10px', width: '100px' }}
                        />
                        <button className="submit-query" onClick={addQuery}> Submit Query</button>
                        <button className="close-modal" onClick={toggleModal}> X </button>
                    </div>
            </div>)}
            

        </>


    )
}