import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Home/Home.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllTask from './component/Home/AllTask/AllTask.jsx';
import AddTask from './component/AddTask/AddTask.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'alltask',
        element:<AllTask></AllTask>
      },
      {
        path:'addTask',
        element:<AddTask></AddTask>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
