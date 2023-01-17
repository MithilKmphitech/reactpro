import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Onchange() {
    const navigate=useNavigate();
    const[formdata, setFormdata]=useState({
        first:'',
        last:'',
    })

    const[chekedbox,setChekedbox]=useState(false)
    const chekbox=()=>{
        setChekedbox(!chekedbox)
    }
    const handelsubmit=(e)=>{
        e.preventDefault()
        if(chekedbox){
            console.log("Onchange  formdata", formdata);
            navigate('/crud');
        }else{
            console.log('Please Submit Data');
        }
    }
  
    const handleChange=(e)=>{   
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
          });
    }
    return (
        <>
            <section>
                <div className='container'>
                    <h2 className='heading'>Crud Opration</h2>
                    <div className='formdata'>
                        <form onSubmit={handelsubmit}>
                            <div className='form_data'>
                                <label htmlFor="">First Name :</label>
                                <p><input type="text" name={"first"} value={formdata.first} onChange={handleChange} placeholder='First Name' /></p>
                            </div>
                            <div className='form_data'>
                                <label htmlFor="">Last Name :</label>
                                <p><input type="text" name={"last"}  value={formdata.last} onChange={handleChange} placeholder='Last Name' /></p>
                            </div>
                            <div className='form_data'>
                            <p><input type="checkbox" onChange={chekbox}  placeholder='Last Name' />I agree Term And Condition</p>
                            <button type='submit'>Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Onchange;