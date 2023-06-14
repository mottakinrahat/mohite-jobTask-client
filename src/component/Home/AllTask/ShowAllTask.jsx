import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowAllTask = ({ tasks, refetch }) => {
    const { image, taskDescription, taskName, taskStatus } = tasks;

    const handleDelete = (tasks) => {
        console.log(tasks._id);
        fetch(`http://localhost:5000/allTask/${tasks._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }

    return (
        <div className='mb-4'>
            <div className="bg-white rounded-lg shadow-lg p-6 gap-4 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={image} alt="Card Image" className="w-full h-auto rounded-lg" />
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <h2 className="text-pink-500 text-2xl font-bold mb-4">{taskName}</h2>
                    <p className="text-gray-700"><span className='font-bold'>Description: </span>{taskDescription}</p>
                    <p className="text-gray-700"><span className='font-bold'>Status: </span>{taskStatus}</p>
                    <div className="flex mt-4 justify-end">
                        <Link to={`/updatedata/${tasks._id}`}><button className="bg-pink-500 text-white py-2 px-4 rounded mr-2">Update</button></Link>
                        <button onClick={() => handleDelete(tasks)} className="bg-gray-500 text-white py-2 px-4 rounded">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowAllTask;