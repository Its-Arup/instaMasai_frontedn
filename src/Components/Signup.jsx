import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    age: 0,
    city: "",
    is_married: false,
  });

const handelClick =(e)=>{
    if(e.target.checked){
        setUser({...user,is_married : true})
    }else{
        setUser({...user,is_married : false})
    }
}

const handelSubmit=(e)=>{
    e.preventDefault()
    
    axios.post("https://fancy-shoulder-pads-calf.cyclic.app/users/register",user)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          placeholder="Enter Name"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <select
          value={user.gender}
          onChange={(e) => {
            setUser({ ...user, gender: e.target.value });
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text"
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <input type="radio" name="gender" value={true} onClick={handelClick}/>
        <label>True</label>
        <input type="radio" name="gender" value={false} onClick={handelClick}/>
        <label>False</label>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default Signup;
