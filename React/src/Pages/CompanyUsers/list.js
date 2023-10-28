import React, { useEffect, useState } from "react";
import axios from 'axios';

import { useLocation, Link } from "react-router-dom";
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

 function List() {
  
  const [users, setUsers] = useState([
  ]);
  
  const [value, setValue] = useState("");
  
  const [search, setSearch] = useState("");
  
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(0);  
//  const [currentPage, setCurrentPage] = useState(0);
  const sortOptions = [ 
      "name", "options"
  ];
  useEffect(() => {
    const data = loadUsers()?.filter((data)=> data.name.toLowerCase().includes(search.toLowerCase()));
    loadUsers();
  }, [search]);

  const loadUsers = () => {  
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=> {
          setUsers(res.data)
      });
  };

return (
    
  <>
 <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Email</th>
          <th scope='col'>Website</th>
          <th scope='col'>Phone</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <>
       {
         users.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td><Link  to={{
                    pathname: `/employee/${item.id}`,
                    state: { users: item }
                    }}>{item.name}</Link></td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.website}</td>
              <td>{item.phone}</td>
            </tr>
        ))}
    </>
      </MDBTableBody>
    </MDBTable>
</>
)
}
 
export default List