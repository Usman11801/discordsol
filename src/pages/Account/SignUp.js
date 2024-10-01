import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import axios from "axios"; // Import axios at the top of your file

const SignUp = () => {
  // Consolidated state for inputs and error messages
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    password: "",
    checked: false,
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // Event Handler to update input values and clear errors
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for this field
    }));
  };

  // Email Validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validate fields
    if (!formData.clientName) newErrors.clientName = "Enter your name";
    if (!formData.email) newErrors.email = "Enter your email";
    else if (!EmailValidation(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Create a password";
    else if (formData.password.length < 6) newErrors.password = "Passwords must be at least 6 characters";
  
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log('Form data:', formData); // Log form data for debugging
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/auth/signup`, {
          name: formData.clientName,
          email: formData.email,
          password: formData.password,
        });
  
        setSuccessMsg(response.data.message);
        setFormData({
          clientName: "",
          email: "",
          password: "",
          checked: false,
        });
      } catch (error) {
        // Check if error response exists
        if (error.response) {
          setErrors({ api: error.response.data.message }); // Adjust based on your API error structure
        } else {
          setErrors({ api: "An unexpected error occurred." });
        }
      }
    }
  
    setErrors(newErrors); // Set all errors at once
  };
  
  

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Get started for free</h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          {["Get started fast with OREBI", "Access all OREBI services", "Trusted by online Shoppers"].map((msg) => (
            <div key={msg} className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1"><BsCheckCircleFill /></span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">{msg}</span>
                <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">© OREBI</p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Terms</p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Privacy</p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">Security</p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">{successMsg}</p>
            <Link to="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300">Sign in</button>
            </Link>
          </div>
        ) : (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <form style={{height:'100vh',display:'flex',alignItems:'center'}} className="w-full lgl:w-[500px] flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">Create your account</h1>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full Name", name: "clientName", type: "text", placeholder: "eg. John Doe" },
                  { label: "Work Email", name: "email", type: "email", placeholder: "john@workemail.com" },
                  { label: "Password", name: "password", type: "password", placeholder: "Create password" },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} className="flex flex-col gap-0.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">{label}</p>
                    <input
                      onChange={handleChange}
                      value={formData[name]}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    />
                    {errors.api && (
  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
    <span className="font-bold italic mr-1">!</span>
    {errors.api}
  </p>
)}
                  </div>
                ))}
                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={handleChange}
                    name="checked"
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the OREBI{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    formData.checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button>
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="text-primeColor font-semibold cursor-pointer hover:underline">Sign In</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
