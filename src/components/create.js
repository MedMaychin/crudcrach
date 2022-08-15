import React, { useState } from 'react'

const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  


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
                onClick={handleSubmit }
        >
        Submit
        </button>
      </form>



    </>
  )
}

export default Create