import React from 'react';

const BillText = ({ info }) => {
    const { _id, name, email, phone, amount } = info;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount}</td>
            <td>
                <button className='btn btn-xs mr-2 btn-success'>Edit</button>
                <button className='btn btn-xs btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default BillText;