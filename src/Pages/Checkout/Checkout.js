import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleConfirmOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        console.log(order);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=> {
            alert('Order Confirmed');
            form.reset();
            navigate('/orders')
        })
        .catch(err=>console.error(err))
    }

    console.log(title);
    return (
        <div className='my-20'>
            <form onSubmit={handleConfirmOrder} action="">
                <h2 className="text-2xl text-center">{title}</h2>
                <h4 className="text-xl text-center">Price: ${price}</h4>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder='First Name' className='input input-ghost w-full input-bordered'/>
                    <input name='lastName' type="text" placeholder='Last Name' className='input input-ghost w-full input-bordered'/>
                    <input name='phone' type="text" placeholder='Your Phone' className='input input-ghost w-full input-bordered' required/>
                    <input name='email' type="text" placeholder='Your Email' defaultValue={user?.email} readOnly className='input input-ghost w-full input-bordered'/>
                </div>
                <br />
                <textarea name='message' className='textarea textarea-bordered h-24 w-full gap-4' placeholder='Your message' required></textarea>
                <input className='btn w-full bg-orange-600' type="submit" value="Confirm Order"/>
            </form>
        </div>
    );
};

export default Checkout;