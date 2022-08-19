import axios from 'axios';
import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    getData();
  }, []);



  return (<>
    <h2>Read Data</h2>
    <a href='/' className='btn btn-info ' >Add Data</a>
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
                    <button type="button" className="btn btn-warning ">Update</button>
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