import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams()
    console.log("Profile  id", id);
    const[profiledata,setProfiledata]=useState();
    const getData = () => {
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/post/${id}`,
            headers: {
                "app-id": '63c4cb9ea7d40fa0b2baa7ad',
            },
        })
        .then((response) => {
            setProfiledata(response.data)
        });
    }
    console.log("Profile  profiledata",profiledata&& profiledata.owner);
    useEffect(() => {
        getData();
    }, [])
  return (
    <>
    {profiledata&&
    <section className='profile_section'>
        <h2>{profiledata.owner.firstName}&nbsp;{profiledata.owner.lastName}</h2>
        <div className='container'>
            <div className='profile_img'>
            <img src={profiledata.owner.picture} alt="" />
            <div className='profile_description'>
            <h3>{profiledata.owner.firstName.toLowerCase()}{profiledata.owner.lastName.toLowerCase()}</h3>
            <p>{profiledata.text}</p>
            </div>
            </div>
            <div className='total_post'>
            <img src={profiledata.image} alt="" />
            </div>
        </div>
    </section>}
        </>
  )
}

export default Profile;