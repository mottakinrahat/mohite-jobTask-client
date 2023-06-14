import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTask from '../../hook/useTask';
import Swal from 'sweetalert2';

const UpdateData = () => {
    const [singleData, setSingleData] = useState([]);
    const { id } = useParams();
    const [allTasks,refetch] = useTask();

    useEffect(() => {
        const singleData = allTasks.find((singleTask) => singleTask._id === id);
        setSingleData(singleData);
    }, [allTasks, id]);

  
    const handleSubmit = (e) => {
        const form=e.target;
        const image=form.image.value;
        const taskName=form.taskName.value;
        const taskDescription=form.taskDescription.value;
        const taskStatus=form.taskStatus.value;
        const updatedData={image,taskName,taskDescription,taskStatus}
        
        
    
        fetch(`https://mohite-job-task-server.vercel.app/allTask/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire('Updated!', 'Your task has been Updated!!!', 'success');
                }
            });
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-pink-500">Update Your Task</h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mt-10"
            >
                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                    <input type="text" id="image" defaultValue={singleData?.image} name="image" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name of the Task:</label>
                    <input type="text" id="name" defaultValue={singleData?.taskName} name="taskName" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">Task Description:</label>
                    <textarea id="taskDescription" defaultValue={singleData?.taskDescription} name="taskDescription" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="taskStatus" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                    <input type="text" id="taskStatus" defaultValue={singleData?.taskStatus} name="taskStatus" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-pink-500 w-full text-white py-2 px-4 rounded hover:bg-pink-600">Update Task</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateData;
