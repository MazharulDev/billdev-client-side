import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';
import EditModal from '../Shared/EditModal';

const BillText = ({ info }) => {
    const [del, setDel] = useState(null)
    const [edit, setEdit] = useState(null)
    const { _id, name, email, phone, amount } = info;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount}</td>
            <td>
                <label onClick={() => setEdit(info)} htmlFor='Edit-modal' className='btn btn-xs mr-2 btn-success'>Edit</label>
                <label onClick={() => setDel(info)} htmlFor="delete-modal" className='btn btn-xs btn-error'>Delete</label>
            </td>
            {
                del && <DeleteModal del={del} setDel={setDel} />
            }
            {
                edit && <EditModal edit={edit} setEdit={setEdit} />
            }
        </tr>
    );
};

export default BillText;