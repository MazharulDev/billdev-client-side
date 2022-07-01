import React from 'react';

const EditModal = ({ edit, setEdit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const amount = e.target.amount.value;
        const edited = {
            name: name,
            email: email,
            phone: phone,
            amount: amount
        }
        fetch(`https://multicultural-poutine-84938.herokuapp.com/info/${edit._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(edited)
        })
            .then(res => res.json())
            .then(result => {
                setEdit(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="Edit-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <p>Edited {edit.name} info</p>
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="name" placeholder='name' /> <br />
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="email" placeholder='email' />
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="phone" placeholder='phone' />
                        <input className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="amount" placeholder='amount' /><br />
                        <input className='btn btn-sm mt-4' type="submit" value="Update" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default EditModal;