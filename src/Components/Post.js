import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import axios from 'axios';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
const Post = () => {
    const navigate=useNavigate();
    const [getapidata, setGetapidata] = useState();
    const getData = () => {
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/post`,
            headers: {
                "app-id": '63c4cb9ea7d40fa0b2baa7ad',
            },
        })
            .then((response) => {
                setGetapidata(response.data.data)
            });
    }
    const handleClick=(id)=>{
        console.log(id);
        navigate(`/profile/${id}`);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className=''>
                <section className='post'>
                    {getapidata && getapidata.map((dataone, index) => {
                        return (
                            <div key={dataone.id} id={dataone.id} className='individual_post'>
                                <div className='header_content'>
                                    <div className='profile_content'>
                                        <img src={dataone.owner.picture} alt="" />
                                        <p onClick={()=>handleClick(dataone.id)} className='account_name'><span className='capitlize'> {dataone.owner.title}.</span>&nbsp;{dataone.owner.firstName}&nbsp;{dataone.owner.lastName}</p>
                                    </div>
                                </div>
                                <div className='body_content'>
                                    <img src={dataone.image} alt="" />
                                    <div className='d_set'>
                                        <div className='like_set'>
                                            <AiOutlineHeart className='icon' />
                                        </div>
                                        <IoChatbubbleOutline className='icon' />
                                        <RiShareForwardLine className='icon' />
                                    </div>
                                    <div className='post_data'>
                                        <p className='like_set'>{dataone.likes} Likes</p>
                                        <h5>{dataone.text}</h5>
                                        <p><b>{moment(dataone.publishDate).format('MMMM DD YYYY')}</b></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    )
}
export default Post;





