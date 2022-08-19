import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";




export const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios
            .put(`https://62fa57663c4f110faa973373.mockapi.io/crud-crash/${id}`, {
                name: name,
                email: email,
            })
            .then(() => {
                navigate("/read");
            });
    };

    return (
        <>

            <form>
                <Link to="/ ">
                    <button type="button" className="btn btn-info  mx-2">Add Data</button>
                </Link> 

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


                <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={handleUpdate}
                >
                    Update
                </button>

                <Link to="/read">
                    <button className="btn btn-secondary mx-2"> Back </button>
                </Link>
            </form>


        </>
    )
}


export default Update
