import React from 'react';

const Header = () => {
    return (
        <div className='bg-slate-300'>
            <div className='flex justify-between p-4 mx-10'>
                <h2 className='text-2xl font-bold'>BillDev</h2>
                <p>Paid Total: </p>
            </div>
        </div>
    );
};

export default Header;