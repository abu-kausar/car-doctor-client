import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// eslint-disable-next-line
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403) {
                    return logoutUser();
                }
                return res.json()})
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, logoutUser])

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure you want to delete');
        if(confirmation){
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
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

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved';

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })
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
                            <th></th>
                            <th>Name</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <OrderRow
                            key = {order._id}
                            order = {order}
                            handleDelete = {handleDelete}
                            handleStatusUpdate = {handleStatusUpdate}
                        >
                        </OrderRow>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;