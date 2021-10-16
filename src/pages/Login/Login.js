import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
import favIcon from "../../images/logo2.png";
import "./Login.css";


const Login = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const{signInWithEmailAndPassword}=useFirebase();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(favIcon);
  const onSubmit = (data) => {
      setEmail(data.Email);
      setPassword(data.Password);
      console.log(data.Email,data.Password);
      signInWithEmailAndPassword(data.Email,data.Password);
      
  };
  return (
    <div className="login-banner mb-5 text-center">
        <div className="col-md-3 mx-auto">
            <img src={favIcon} className="img-fluid my-5" alt="" />
        </div>
      <form className="d-flex flex-column  align-items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3 mb-3">
        <input {...register("Name", { required: true })} className="form-control" placeholder="Name"/>
        {errors.Name?.type === "required" && <p className="error">Name is required</p>}
        </div>
      
        <div className="col-md-3 mb-3">
        <input type="email" {...register("Email", { required: true })} className="form-control" placeholder="Email" />
        {errors.Email?.type === "required" && <p className="error">Email address is required</p>}
        </div>
     
        <div className="col-md-3 mb-3">
        <input type="password" {...register("Password", { required: true })} className="form-control"  placeholder="Password"/>
        {errors.Password?.type === "required" && <p className="error">Password is required</p>}
        </div>
     
        <div className="col-md-3 mb-3">
        <input type="password" {...register("ConfirmPassword", { required: true })} className="form-control" placeholder="Confirm password" />
        {errors.ConfirmPassword?.type === "required" && <p className="error">Password can not match</p>}
        </div>
      
        <div className="col-md-3 mb-3">
        <input type="submit" className="form-control" />
        </div>
        <br />
      </form>
    </div>
  );
};

export default Login;
