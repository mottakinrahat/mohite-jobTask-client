import React from 'react';
import useTask from '../../../hook/useTask';
import ShowAllTask from './ShowAllTask';

const AllTask = () => {
    const[allTasks,refetch]=useTask();

    console.log(allTasks);
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-4'>
          {
             allTasks.map(tasks=><ShowAllTask key={tasks._id} tasks={tasks}></ShowAllTask>)
          }
        </div>
    );
};

export default AllTask;