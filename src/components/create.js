import axios from 'axios';
import React, { useState } from 'react'

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.prevetDefault();
    axios.post("https://62fa57663c4f110faa973373.mockapi.io/crud-crash",
      {
        name: name, email: email, 
      },
    header,);
  };


  return (
    <>

      <form>
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