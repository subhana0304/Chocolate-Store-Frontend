import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import Chocolate from './Chocolate';

const Main = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);
    // console.log(chocolates);
    return (
        <div className='my-10 mx-24'>
            <div>
                <Link className='flex items-center' to="/addChocolate"><FaPlus />Add New Chocolate</Link>
            </div>
            <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr className='text-red-950 text-2xl font-semibold'>
                            <th>Chocolate Name</th>
                            <th>Country</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            chocolates.map(chocolate => <Chocolate key={chocolate._id} chocolate={chocolate} chocolates={chocolates} setChocolates={setChocolates}></Chocolate>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Main;