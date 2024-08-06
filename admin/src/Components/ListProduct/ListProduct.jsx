import React, {useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

export const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);
    
    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }
    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

  return (
    <div className='list-product'>
        <h1>All Product List</h1>
        <div className='listproduct-format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            <hr />
            {allproducts.map((product,index)=>{
                return<> <div key={index} className="listproduct-format-main listproduct-format">
                    <img className='listproduct-product-icon' src={product.image} alt="" />
                    <p>{product.name}</p>
                    <p>KSH.{product.old_price}</p>
                    <p>KSH.{product.new_price}</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                </div>
                <hr />
                </>
            })}
        </div>
    </div>
  )
}
