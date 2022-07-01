import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BillText from './BillText';
import './css/Pagination.css'


const BillTable = () => {
    const [page, setPage] = useState(0);
    const [pageShow, setPageShow] = useState(0)
    const [size, setSize] = useState(10)

    useEffect(() => {
        fetch('https://multicultural-poutine-84938.herokuapp.com/infocount')
            .then(res => res.json())
            .then(data => {
                const count = data.result;
                const pages = Math.ceil(count / size);
                setPage(pages)
            })
    }, [size, page])
    const { data: information, isLoading, refetch } = useQuery('information', () => fetch(`https://multicultural-poutine-84938.herokuapp.com/info?page=${pageShow}&size=${size}`, {
        method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <div className='flex justify-center mt-5'><button className="btn btn-square loading"></button></div>
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
                    </tbody>



                </table>
                <div className='btn-group flex justify-center my-5'>
                    {
                        [...Array(page).keys()].map(number => <button key={number} onClick={() => setPageShow(number)} className={pageShow === number ? 'btn btn-xs btn-active' : 'btn btn-xs'}>{number}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)} className='select select-xs w-15 ml-5'>
                        <option defaultValue='5'>5</option>
                        <option defaultValue='10' selected>10</option>
                        <option defaultValue='15'>15</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default BillTable;