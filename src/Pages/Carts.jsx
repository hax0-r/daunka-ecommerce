import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, removeItem } from '../Store/Slice/AddItem';

const Carts = () => {
    const { cart } = useSelector(state => state.addToCartItem);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
        dispatch(decrement())
    }

    return (
        <>
            <div className="pt-16">
                <div className="flex max-w-[70rem] w-full m-auto justify-center items-center gap-x-5 gap-y-8 flex-wrap">
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <div key={index} className="max-w-[20rem] shadowCards w-full">
                                <img src={item.image} alt={item.name} />
                                <div className="px-2 pb-3">
                                    <h2 className='pt-3 font-bold'>{item.name}</h2>
                                    <p className='pb-4 pt-1'>{item.description.slice(0, 70)}... </p>
                                    <button className='w-full cursor-pointer hover:opacity-90 transition-all bg-themeColor text-white p-2 rounded-lg mb-2'>Purchase</button>
                                    <button onClick={() => handleRemove(item.id)} className='w-full cursor-pointer hover:opacity-90 transition-all bg-red-600 text-white p-2 rounded-lg '>Remove</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='select-none text-zinc-400 text-lg pt-10'>No items in the cart.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Carts;
