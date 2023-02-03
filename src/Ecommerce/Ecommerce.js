import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Ecommerce = () => {
  const [productlist, setProductlist] = useState();
  console.log("Ecommerce  productlist", productlist);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  console.log("Ecommerce  searchInput", searchInput);
  const getProductList = () => {
    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    })
      .then(function (response) {
        setProductlist(response.data)
      });
  }
  useEffect(() => {
    getProductList();
  }, []);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = productlist.filter((list) => {
        return Object.values(list).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData && filteredData)
    }
    else {
      setFilteredResults(productlist)
    }
  }
  return (
    <div className='container'>
      <input className='serachbox' placeholder='Search' type="search" onChange={(e) => searchItems(e.target.value)} />
      <div className='select_div'>
        <select className='select_data' onChange={(e) => searchItems(e.target.value)}>
          <option value="" hidden>Select Category</option>
          <option value="">All</option>
          <option value="men's">Mens</option>
          <option value="women's">Womens</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <table className='datatable' >
        
        <thead>
          <tr>
            <th>Title</th>
            <th>category</th>
            <th>Price</th>
            <th>description</th>
            <th>image</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {searchInput.length > 1 ? (
            filteredResults && filteredResults.map((list, index) => (
              <tr key={index} id={index}>
                <th>{list.title}</th>
                <th>{list.category}</th>
                <td>{list.price}&nbsp;$</td>
                <td>{list.description}</td>
                <td><img src={list.image} alt="" /></td>
                <td><span>Count:{list.rating.count}</span><br></br>
                  <span>Count:{list.rating.rate}</span>
                </td>
              </tr>
            ))
          ) : (
            productlist && productlist.map((list, index) => (
              <tr key={index} id={index}>
                <th>{list.title}</th>
                <th>{list.category}</th>
                <td>{list.price}&nbsp;$</td>
                <td>{list.description}</td>
                <td><img src={list.image} alt="" /></td>
                <td><span>Count:{list.rating.count}</span><br></br>
                  <span>Count:{list.rating.rate}</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Ecommerce;