import React from 'react';
import Title from '../Title/Title';
import SingleRelevent from '../AddTask/SingleRelevent';
import useTask from '../../hook/useTask';

const ReleventTask = () => {
    const[allTasks,refetch]=useTask();
    return (
        <div>
            <Title title={'Some Relevant Data'}></Title>
         <div className='grid md:grid-cols-2 justify-between items-center gap-6'>
            {
                allTasks.slice(0,6).map(tasks=><SingleRelevent key={tasks._id} tasks={tasks}></SingleRelevent>)
            }
         </div>
        </div>
    );
};

export default ReleventTask;