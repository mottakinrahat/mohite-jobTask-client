import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTask from '../../hook/useTask';
import Swal from 'sweetalert2';

const UpdateData = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  const [allTasks, refetch] = useTask();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const singleData = allTasks.find((singleTask) => singleTask._id === id);
    setSingleData(singleData);

    // Set default form field values using setValue from React Hook Form
    setValue('image', singleData?.image || '');
    setValue('taskName', singleData?.taskName || '');
    setValue('taskDescription', singleData?.taskDescription || '');
    setValue('taskStatus', singleData?.taskStatus || '');
  }, [allTasks, id, setValue]);

  const onSubmit = (data) => {
    const { image, taskName, taskDescription, taskStatus } = data;
    const updatedData = { image, taskName, taskDescription, taskStatus };

    fetch(`https://mohite-job-task-server.vercel.app/allTask/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire('Updated!', 'Your task has been updated!', 'success');
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-pink-500">Update Your Task</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mt-10"
      >
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('image')}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name of the Task:
          </label>
          <input
            type="text"
            id="name"
            name="taskName"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('taskName')}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Task Description:
          </label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('taskDescription')}
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="taskStatus" className="block text-gray-700 text-sm font-bold mb-2">
            Status:
          </label>
          <input
            type="text"
            id="taskStatus"
            name="taskStatus"
            className="w-full p-2 border border-gray-300 rounded"
            {...register('taskStatus')}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-pink-500 w-full text-white py-2 px-4 rounded hover:bg-pink-600"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateData;
