import React from 'react';

const DeleteModal = ({ del, setDel }) => {
    const { _id, name, email } = del;
    const handleDelete = (id) => {
        const url = `https://multicultural-poutine-84938.herokuapp.com/info/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setDel(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='text-red-600'>Are you sure you want to delete?</h2>
                    <p>{name}</p>
                    <p>{email}</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-xs btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;