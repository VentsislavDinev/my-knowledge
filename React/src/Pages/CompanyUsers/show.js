import React, { useEffect, useState } from "react";
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams, useHistory, useNavigate } from 'react-router-dom';

function Show() {
 
  const [user, setUser] = useState();
  const {id} = useParams();

  const loadUsers = () => {  
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=> {
          setUser(res.data)
          console.log(res)
      });
  };
  return (
    <MDBTable>
    <MDBTableHead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>First</th>
        <th scope='col'>Last</th>
        <th scope='col'>Handle</th>
      </tr>
    </MDBTableHead>
        {user && (
          // Customer Additional contact
          <MDBTableBody>
          <tr>
            <th scope='row'>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            
            <td>{user.address.street} {user.address.suite} {user.address.city}</td>
          </tr>
        </MDBTableBody>
    
        )}
    </MDBTable> 
   )
}

export default Show