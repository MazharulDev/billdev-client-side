import React from 'react';
import { useQuery } from 'react-query';
import BillText from './BillText';


const BillTable = () => {
    const { data: information, isLoading, refetch } = useQuery('information', () => fetch('http://localhost:5000/info', {
        method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <div className='flex justify-center mt-5'><button class="btn btn-square loading"></button></div>
    }
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
                        {
                            information.map(info => <BillText key={info._id} info={info} />)
                        }
                        {/* <BillText info={info} /> */}
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default BillTable;