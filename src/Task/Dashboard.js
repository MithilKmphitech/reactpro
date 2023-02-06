import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Post from '../Components/Post';
const Dashboard = () => {
    useEffect(()=>{
        localStorage.setItem("Demo",'Hello World');
    },[])
    return (
        <>
        <Header/>
        <Post/>
        </>
    )
}
export default Dashboard;





