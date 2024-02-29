import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {

const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [name, setName] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault()
  axios.post('', {name, email, password})
  .then( res => console.log(result)
  .catch(err=> console.log(err)))
}


    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">

            <div className="bg-white p-3 rounded w-250">

                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>

                        <input type="text" placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0" 
                            onChange={(e)=> setName(e.target.value)}
                            />

                    </div>


                    <div className="mb-3">

                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>

                        <input type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0" 
                             onChange={(e)=> setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">

                        <label htmlFor="Pass">

                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            className="form-control rounded-0" 
                             onChange={(e)=> setPassword(e.target.value)} />

                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0"> Register</button>
                    <p>Already have an Account</p>
                </form>

                <Link to ="/login"  className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"> SignIn</Link>

            </div>




        </div>
    );
}

export default Signup;
