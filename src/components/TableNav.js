import React from 'react';

const TableNav = () => {
    return (
        <div className='bg-slate-300 container mx-auto p-2 mt-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <p>Billings</p>
                    <input className='p-2 rounded-md' type="text" name="search" placeholder='search' />
                </div>
                <button className='btn'>Add New Bill</button>
            </div>
        </div>
    );
};

export default TableNav;