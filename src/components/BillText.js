import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';

const BillText = ({ info }) => {
    const [del, setDel] = useState(null)
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
                <label onClick={() => setDel(info)} for="delete-modal" className='btn btn-xs btn-error'>Delete</label>
            </td>
            {
                del && <DeleteModal del={del} setDel={setDel} />
            }
        </tr>
    );
};

export default BillText;