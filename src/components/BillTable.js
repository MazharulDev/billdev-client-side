import React from 'react';
import BillText from './BillText';


const BillTable = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <BillText />
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default BillTable;