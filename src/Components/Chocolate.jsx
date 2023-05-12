import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Chocolate = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, category } = chocolate;

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure to delete it?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolates/${id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if(data.deletedCount>0){
                          Swal.fire(
                            'Deleted!',
                            'Your Chocolate has been deleted.',
                            'success'
                          )
                          const remaining = chocolates.filter(choco => choco._id !== _id);
                          setChocolates(remaining);
                        }
                    })

            }
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{country}</td>
            <td>{category}</td>
            <td className="items-center">
                <Link to={`/updateChocolate/${_id}`}><button className='btn bg-gray-200 border-0 text-red-950'><FaPencilAlt /></button></Link>
                <button onClick={() => handleDelete(_id)} className='btn bg-gray-200 border-0 text-2xl ms-3 text-red-950 font-bold'>X</button>
            </td>
        </tr>
    );
};

export default Chocolate;