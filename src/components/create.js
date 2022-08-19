import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 


const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios.post("https://62fa57663c4f110faa973373.mockapi.io/crud-crash",
      {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };


  return (
    <>

      <form>
        <a href='/read' className='btn btn-info ' >Rad Data</a>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text" className="form-control"
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email" className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>


        <button type="submit" className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>



    </>
  )
}

export default Create