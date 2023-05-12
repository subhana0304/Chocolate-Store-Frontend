import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';


const UpdateChocolate = () => {
    const {_id, name, country, category} = useLoaderData();

    const handleUpdateChocolate = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const updatedChocolate = {name, country, category};

        // console.log(updatedChocolate);

        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedChocolate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Chocolate is updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }

    return (
        <div className='my-10 mx-24'>
            <div className='my-5'>
                <Link className='flex items-center' to="/"><FaArrowLeft /> All Category</Link>
            </div>
            <div className="bg-[#F4F3F0] p-12">
                <h1 className="text-3xl font-bold text-center ">Update Chocolate</h1>
                <p className='mb-8 text-center'>Use the below form to create a new product</p>

                <form onSubmit={handleUpdateChocolate}>
                    
                    {/* form row */}
                    <div className="mb-5">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Chocolate Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Chocolate Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    {/* form row */}
                    <div className="mb-5">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" defaultValue={country} placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    {/* form row */}
                    <div className="mb-10">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={category} placeholder="Category Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Updated Chocolate" className="btn bg-red-950 btn-block" />

                </form>
            </div>
        </div>
    );
};

export default UpdateChocolate;