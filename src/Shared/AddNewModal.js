import React, { useState } from 'react';

const AddNewModal = ({ setAddInfo }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
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
        e.preventDefault()
        console.log(name, email, phone, amount);
        setAddInfo(null)

    }
    return (
        <div>
            <input type="checkbox" id="Add-new" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <h2 className='text-center font-bold'>Type your information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your full name?</span>
                                </label>
                                <input onChange={handleNameChange} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your Email?</span>
                                </label>
                                <input onChange={handleEmailChange} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your phone Number?</span>
                                </label>
                                <input onChange={handlePhoneChange} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Type your paid Amount?</span>
                                </label>
                                <input onChange={handleAmountChange} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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