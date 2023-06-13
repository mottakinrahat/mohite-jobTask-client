import React from 'react';
import { useQuery } from '@tanstack/react-query'

const useTask = () => {
    const {isLoading,refetch,data:allTasks=[]}=useQuery({
        queryKey:['allTask'],
        queryFn:async ()=>{
            const response=await fetch ('http://localhost:5000/allTask')
            return response.json();
        },
    })

    return [allTasks,refetch]
};

export default useTask;