import React, { useState } from 'react';

const AddNewModal = ({ setAddInfo }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }
    const handleAmountChange = e => {
        setAmount(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (phone.length < 11) {
            setError("Phone Number must 11 digit");
            return;
        }
        const infoList = {
            name: name,
            email: email,
            phone: phone,
            amount: amount
        }
        fetch('https://multicultural-poutine-84938.herokuapp.com/info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


        setAddInfo(null)

    }
    return (
        <div>
            <input type="checkbox" id="Add-new" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Add-new" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <h2 className='text-center font-bold'>Type your information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your full name?</span>
                                </label>
                                <input onChange={handleNameChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your Email?</span>
                                </label>
                                <input onChange={handleEmailChange} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your phone Number?</span>
                                </label>
                                <input onChange={handlePhoneChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your paid Amount?</span>
                                </label>
                                <input onChange={handleAmountChange} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <input className='btn mt-4' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewModal;