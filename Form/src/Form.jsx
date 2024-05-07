import {useState} from "react";

export default function Form() {
   let [formData,setFormData] =useState({
    fullName: "",
    username: "",
    password: "",
   });
    // let handleNameChange = (event) =>{
    //     setFullName (event.target.value);
    //     //Noit dependent on any value
    // }; 

    // let handleUsername = (event) => {
    //     setUsername (event.target.value);
    // };

    let handleInputChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value;
    
        setFormData((currData) => ({
            ...currData,
            [fieldName]: newValue
        }));
        
    };
    

    let handleSubmit = (event) =>{
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: ""
        }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Full Name</label>
            {/* On Clicking this label input box will get Highlighted */}
            <input placeholder="Enter Your Full Name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>
            <br/><br/>
            <label htmlFor="username">User Name</label>
            <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br/><br/>
            <label htmlFor="password">Password</label>
            <input placeholder="Enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    );
}