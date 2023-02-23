import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// eslint-disable-next-line
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    // const email = user ? user.email : null;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // if (email) {
        //     fetch(`http://localhost:5000/orders?email=${user?.email}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setOrders(data)
        //         })
        // }

        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure you want to delete');
        if(confirmation){
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = orders.filter(odr => odr._id !== id);
                setOrders(remaining)
            }
        })
        }
    }

    return (
        <div>
            <h1>{user?.email}</h1>
            <h2>Total orders: {orders?.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className='checkbox' />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <OrderRow
                            key = {order._id}
                            order = {order}
                            handleDelete = {handleDelete}
                        >
                        </OrderRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;