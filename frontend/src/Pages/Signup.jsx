import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../APi/api';
import { ToastContainer, toast } from 'react-toastify';
// import authStore from '../Store/auth';

export const Signup = () => {
  const navigate = useNavigate();
  // const setAuth = authStore((state) => state.setAuth);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Change Handler
  function changeHandler(event) {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Submit Handler
  const submitHandler = async (event) => {
    event.preventDefault(); // Prevents page refresh on form submission
    setIsLoading(true); // Start loading

    try {
      const res = await axios.post(signup, userData);
      console.log('Registration Successful:', res.data);

      if (res.status === 201) {
        // setAuth(res.data);
        toast.success("Successfully Registered! Kindly Login");
        setTimeout(() => {
          navigate('/login');
        }, 2000); // 2-second delay
      }
    } catch (err) {
      console.error('Error in Registration:', err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-4 flex justify-center items-center min-h-screen">
      <form
        className="flex flex-col space-y-4 p-6 border rounded-md hover:shadow-md shadow-black transition ease-in-out"
        onSubmit={submitHandler}
      >
        <h4 className="flex justify-center text-lg font-semibold">Sign Up</h4>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          required
          className="border rounded p-2"
          name="name"
          value={userData.name} // Binding state to input
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          className="border rounded p-2"
          name="email"
          value={userData.email} // Binding state to input
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          required
          className="border rounded p-2"
          name="password"
          value={userData.password} // Binding state to input
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="mt-3 bg-blue-400 text-white p-2 rounded hover:bg-blue-600 transition ease-in-out"
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
        <p>
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-1">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};