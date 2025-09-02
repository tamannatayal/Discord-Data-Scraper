import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import MainLayout from './Layout/MainLayout';
import SearchUser from './component/SearchUser';
import Layout from './Layout/Layout';
import Server from './Layout/Server'

const App = () => {
  // const response = await getHash();
  // console.log(response);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='server' element={<Server />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
