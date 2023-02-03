import axios from 'axios';
import React, { useState, useEffect } from 'react'
const Crud = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        firstName: '',
        lastName: '',
        title: '',
    });
    const [post, setPost] = useState();
    const [isedit, setIsedit] = useState(false);
    const [editItem, setEditItem] = useState();
    const [currentpage, setCurrentpage] = useState(0);
    const [totalPage, setTotalpage] = useState();
    const [submitedData, setSubmitedData] = useState([])
    const getData = () => {
        axios({
            method: 'get',
            url: ``,
            headers: {
                "app-id": '63c4cf3aa7d40fea56baa7b1',
            },
        })
            .then((response) => {
                setPost(response.data.data);
                let totalpages = Math.floor(response.data.total / 10)
                setTotalpage(totalpages)
            });
    }
    const previous = () => {
        setCurrentpage(currentpage - 1)
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/user?page=${currentpage}&limit=10`,
            headers: {
                "app-id": '63c4cf3aa7d40fea56baa7b1',
            },
        })
            .then((response) => {
                setPost(response.data.data);
            });
    }
    const nextPaggi = () => {
        setCurrentpage(currentpage + 1)
        axios({
            method: 'get',
            url: `https://dummyapi.io/data/v1/user?page=${currentpage}&limit=10`,
            headers: {
                "app-id": '63c4cf3aa7d40fea56baa7b1',
            },
        })
            .then((response) => {
                setPost(response.data.data);

            });
    }
    const deleteData = (id) => {
        axios({
            method: 'delete',
            url: `https://dummyapi.io/data/v1/user/${id}`,
            headers: {
                "app-id": '63c4cf3aa7d40fea56baa7b1',
            },
        })
            .then((response) => {
                getData()
            });
    }
    const editdata = (item) => {
        setIsedit(true)
        setEditItem(item)
        setFormdata({
            firstName: item.firstName,
            lastName: item.lastName,
            title: item.title,
        })
    }
    const handleupdate = (e) => {
        e.preventDefault();
        let currentItem = editItem
        currentItem.firstName = formdata.firstName;
        currentItem.lastName = formdata.lastName;
        currentItem.title = formdata.title;
        const updatedItem = post.map((todo) => {
            return todo.id === editItem.id ? currentItem : todo;
        });
        setFormdata({
            firstName: '',
            lastName: '',
            title: '',
            email: '',
        })
        setPost(updatedItem)
        setIsedit(false);
        setEditItem('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://dummyapi.io/data/v1/user/create',
            headers: {
                "app-id": '63c4cf3aa7d40fea56baa7b1',
            },
            data: {
                "firstName": formdata.firstName,
                "lastName": formdata.lastName,
                "email": formdata.email,
                "title": formdata.title,
            }
        })
            .then((response) => {
                setFormdata(response.data);
            });
        if (formdata.firstName === '' || formdata.lastName === '' || formdata.email === '') {
            console.log('Fill the Data')
            return
        } else {
            setSubmitedData([
                ...submitedData,
                formdata])
            setFormdata({
                firstName: '',
                lastName: '',
                title: '',
                email: '',
            })
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        })
    }
    useEffect(() => {
        document.title = 'Crud App';
        getData();
    }, []);
    return (
        <>
            <div className='container'>
                <div className={"bg"}>
                    <form className='formdata' onSubmit={isedit ? handleupdate : handleSubmit}>
                        <div className='form_data'>
                            <label htmlFor="title">Title</label>
                            <p><input type="text" name={'title'} onChange={handleChange} value={formdata.title} /></p>
                        </div>
                        <div className='form_data'>
                            <label htmlFor="First Name">First Name</label>
                            <p><input type="text" name={'firstName'} onChange={handleChange} value={formdata.firstName} /></p>
                        </div>
                        <div className='form_data'>
                            <p> <label htmlFor="Last Name">Last Name</label> </p>
                            <input type="text" name={'lastName'} onChange={handleChange} value={formdata.lastName} />
                        </div>
                        <div className='form_data'>
                            <p> <label htmlFor="email">Email</label> </p>
                            <input type="email" name={'email'} onChange={handleChange} value={formdata.email} />
                        </div>

                        <div className='form_data'>
                            {isedit ? <button>Update</button> : <button>Add</button>
                            }
                        </div>
                    </form>
                    <div className='table_data'>
                        <table className='input_data'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post && post.map((item, index) => (
                                        <tr key={index} id={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>
                                                <span className='btn' onClick={() => editdata(item)}>Edit</span>
                                                <span className='btn' onClick={() => deleteData(item.id)}>Delete</span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='paggignation'>
                            {currentpage > 0 && <button onClick={previous}>Previous</button>}
                            {currentpage <= totalPage && <button onClick={nextPaggi}>Next</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Crud;