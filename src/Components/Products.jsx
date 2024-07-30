import React, { useState } from 'react'
import { PRODUCTS_DATA } from '../Products/ProductsData'
import { useDispatch } from 'react-redux'
import { addItem, increament } from '../Store/Slice/AddItem'

const Products = () => {

    const [sameCart, setsameCart] = useState([]);

    const dispatch = useDispatch()

    const AddItemHandler = (product) => {
        if (!sameCart.includes(product.id)) {
            dispatch(increament())
            dispatch(addItem(product))
            setsameCart([...sameCart, product.id])
        }
        else {
            alert("Item already in cart")
        }
    }

    return (
        <>
            <div className="">
                <h1 className='text-5xl font-extrabold text-center text-themeColor py-10 pt-16'>Latest Products</h1>
                <div className="flex max-w-[70rem] w-full m-auto justify-center items-center gap-x-5 gap-y-8 flex-wrap">
                    {
                        PRODUCTS_DATA.map((product, index) => (
                            <div key={index} className="max-w-[20rem] shadowCards overflow-hidden w-full">
                                <img src={product.image} className='hover:scale-105 transition-all duration-700' loading='lazy' alt={product.name} />
                                <div className="px-2 pb-3">
                                    <h2 className='pt-3 font-bold'>{product.name}</h2>
                                    <p className='pb-4 pt-1'>{product.description.slice(0, 70)}... </p>
                                    <button className='w-full cursor-pointer hover:opacity-90 transition-all bg-themeColor text-white p-2 rounded-lg mb-2'>Buy Now</button>
                                    <button onClick={() => AddItemHandler(product)} className='w-full cursor-pointer hover:opacity-90 transition-all bg-black text-white p-2 rounded-lg'>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products