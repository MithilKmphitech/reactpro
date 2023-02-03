import React, { useEffect, useState } from 'react'
import SelectMenu from './Components/SelectMenu';
function Home() {
  const[data,setData]=useState({
    first:'',
    email:'',
    gender:'',
    country:'',
  })
  console.log("Home  data", data);
  const option = [
    { value: '1', text: "Hello" }, { value: '2', text: 'World' }, { value: '3', text: 'Welcome' }, { value: '4', text: 'Four', }, { value: '5', text: 'Five' },
  ]
  const option1 = [
    { value: '1', text: "ggfgg" }, { value: '2', text: 'fggf' }, { value: '3', text: 'ggdgd' }, { value: '4', text: 'dggdfgf', }, { value: '5', text: 'dfgfgdf' },
  ]
  const handlechange1 = (e, name) => {
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('first')
  }
  const dataget=(e)=>{
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,

    })
  }
  useEffect(() => {
    document.title = 'Home Page';
  }, []);
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' name='first' value={data.first} onChange={dataget} /><br></br><br></br>
      <input type="text" placeholder='Email' name='email' value={data.email} onChange={dataget} /><br></br><br></br>
      <SelectMenu option={option} handlechange={handlechange1} name={'gender'} value={data.gender} /><br></br>
      <SelectMenu option={option1} handlechange={handlechange1} name={"country"} value={data.country} />
      <button>Submit</button>
    </form>
    </>
  )
}
export default Home;