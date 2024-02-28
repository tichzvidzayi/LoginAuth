import { useState } from "react";

function Signup(){

    return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">

     <div className="bg-white p-3 rounded w-25">

      <h2>Register</h2>
      <form>
   <div className="mb-3">
   <label htmlFor="email">
    <strong>Nme</strong>
   </label>

   <input type="text" placeholder="Enter Name"
   autoComplete="off"
   name="email"
   className="form-control rounded-0" />



   </div>


<div className="mb-3">

    <label htmlFor="email">
        <strong>Email</strong>
    </label>

    <input type="email"
    placeholder="Enter email"
    autoComplete="off"
    name="email"
    className="form-control rounded-0"/>
</div>

<div className="mb-3">

    <label htmlFor="email">

        <strong>Password</strong>
    </label>
    <input 
    type="password"
    placeholder="Enter password"
    name="password"
    className="form-control rounded-0"/>

</div>
<button type="submit" className="btn btn-sucess w-100 rounded-0"></button>

      </form>



     </div>




    </div>





    )









}