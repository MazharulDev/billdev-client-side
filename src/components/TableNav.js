import React, { useState } from 'react';
import AddNewModal from '../Shared/AddNewModal';

const TableNav = () => {
    const [addInfo, setAddInfo] = useState(null)

    return (
        <div className='bg-slate-300 container mx-auto p-2 mt-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <p>Billings</p>
                    <input className='p-2 rounded-md' type="text" name="search" placeholder='search' />
                </div>
                <label onClick={() => setAddInfo('open')} htmlFor="Add-new" className='btn'>Add New Bill</label>
            </div>
            {
                addInfo && <AddNewModal setAddInfo={setAddInfo} />
            }
        </div >
    );
};

export default TableNav;