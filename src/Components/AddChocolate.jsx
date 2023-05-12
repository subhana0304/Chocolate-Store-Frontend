import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddChocolate = () => {

    const handleAddChocolate = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const newChocolate = {name, country, category};

        console.log(newChocolate);

        fetch('http://localhost:5000/chocolates',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Chocolate is successfully added',
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
                <h1 className="text-3xl font-bold text-center ">New Chocolate</h1>
                <p className='mb-8 text-center'>Use the below form to create a new product</p>

                <form onSubmit={handleAddChocolate}>
                    
                    {/* form row */}
                    <div className="mb-5">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Chocolate Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Chocolate Name" className="input input-bordered w-full" />
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
                                <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" />
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
                                <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Chocolate" className="btn bg-red-950 btn-block" />

                </form>
            </div>
        </div>
    );
};

export default AddChocolate;