// import './App.css';
import './Components/Modal'
import './MyTable.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Components/Modal';
import QueryModal from './Components/QueryModal';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';

function MyTable() {
  const [info, setInfo] = useState([]);
    // this is to get the formData with a GET request 
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

    // this is to update the formData with a PUT request 
    const updateFormData = async(id, updatedData) => {
        try {
            const endpoint = `http://127.0.0.1:8080/put-data`; // Update endpoint if necessary
            const response = await axios.put(endpoint, updatedData);
            console.log('Update successful:', response.data);
      
            // Update the frontend state with the new data
            setInfo((prevInfo) =>
              prevInfo.formData.map((item) =>
                item.id === id ? { ...item, ...updatedData } : item
              )
            );
          } catch (error) {
            console.error('Error updating form data:', error);
          }
        
    }

    return (
        <TableContainer component={Paper}>
          <Typography variant="h6" align="center" gutterBottom>
            VIAL Query Table
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Question</strong></TableCell>
                <TableCell><strong>Answer</strong></TableCell>
                <TableCell><strong>Query</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(info.formData) ? (
                info.formData.map(info => (
                  <TableRow key={info.id}>
                    <TableCell>{info.question}</TableCell>
                    <TableCell>{info.answer}</TableCell>
                    <TableCell>
                      {info.description ? (
                        <QueryModal
                          formID={info.id}
                          question={info.question}
                          answer={info.answer}
                          description={info.description}
                          createdAt={info.createdAt}
                          updatedAt={info.updatedAt}
                          status={info.status}
                          updateFormData={updateFormData}
                        />
                      ) : (
                        <Modal
                          formID={info.id}
                          question={info.question}
                          answer={info.answer}
                          description={info.description}
                          createdAt={info.createdAt}
                          updatedAt={info.updatedAt}
                          status={info.status}
                          updateFormData={updateFormData}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">No info available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      );

  
};

export default MyTable; 