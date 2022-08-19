import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
const Read = () => {

  const [data, setData] = useState([]);
  function getData() {
    axios.get("https://62fa57663c4f110faa973373.mockapi.io/crud-crash").then(
      (res) => {
        console.log(res.data);
        setData(res.data);
      });
  };


  function handleDelete(id) {
    axios.delete(`https://62fa57663c4f110faa973373.mockapi.io/crud-crash/${id}`).then(() => {
      getData();
    })
  };

  const setToLocalStorage = (id,name,email) => {
    localStorage.setItem( "id",id );
    localStorage.setItem( "name",name );
    localStorage.setItem( "email",email );
  };

  useEffect(() => {
    getData();
  }, []);


  return (<>
    <h2>Read Data</h2>
    <Link to="/ ">
      <button type="button" className="btn btn-info ">Add Data</button>
    </Link>
    <table className="table table-hover ">
      <thead className='table-dark'>
        <tr >
          <th >#</th>
          <th >Name</th>
          <th >Email</th>
          <th >Actions</th>
        </tr>
      </thead>
      {
        data.map((eachData) => {
          return (
            <>
              <tbody className="table-light">
                <tr>
                  <th>{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td >
                    <Link to="/update ">
                      <button type="button" className="btn btn-warning " onClick={() => 
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }>Update{""}</button>
                    </Link>

                    <button type="button" className="btn btn-danger" onClick={() => {
                      handleDelete(eachData.id)
                    }}>Delete</button>
                  </td>
                </tr>

              </tbody>
            </>
          );
        })
      }
    </table>



  </>
  )
}

export default Read