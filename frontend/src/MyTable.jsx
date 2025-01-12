import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { json } from 'stream/consumers';

function MyTable() {
  const [info, setInfo] = useState([]);
  
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/form-data')
        .then(res => {
            console.log("Fetched data:", res.data); 
            setInfo(res.data.data);
        }
        )
        .catch(err => console.log(err))
        // console.log("info after update:", info); // Log info after update
    }, [])
    console.log("info after update:", info)


    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>VIAL Query Table</h3>
                <table className='table'>
                    <thead>
                        <tr id='top-row'>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(info.formData) ? (
                            info.formData.map(info => {
                                return <tr key={info.id}>
                                    <td>{info.question}</td>
                                    <td>{info.answer}</td>
                                    <td><button>
                                            +
                                        </button>
                                    </td>
                                </tr>
                            })

                        ):(
                            <tr>
                                <td colSpan="4">No info available</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

  
};

export default MyTable; 