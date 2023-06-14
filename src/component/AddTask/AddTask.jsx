import React from 'react';
import { useForm } from "react-hook-form";
import useTask from '../../hook/useTask';
import Swal from 'sweetalert2';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [, refetch] = useTask();
    const onSubmit = updateData => {
        console.log(updateData);
        fetch('https://mohite-job-task-server.vercel.app/allTask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch()
                    Swal.fire(
                        'Added!',
                        'Your task has been added.',
                        'success'
                    )
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mt-10">
                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                    <input type="text" id="image" {...register("image")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name of the Task:</label>
                    <input type="text" id="name" {...register("name")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">Task Description:</label>
                    <textarea id="taskDescription" {...register("taskDescription")} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="taskStatus" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                    <input type="text" id="taskStatus" {...register("taskStatus")} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-pink-500 w-full text-white py-2 px-4 rounded hover:bg-pink-600">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;