import React,{useState} from 'react'


const UseState = () => {
    const [state, setstate] = useState(0);
    if(state<=0){
        setstate(0)
    }
  return (
    <>
    <h4>Total {state}</h4>
    <button onClick={()=>setstate((c)=>c+1)}>Increment</button>
    <button onClick={()=>setstate((c)=>c-1)}>decrement</button>
    </>
  )
}

export default UseState