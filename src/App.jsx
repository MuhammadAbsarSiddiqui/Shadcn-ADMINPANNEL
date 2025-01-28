import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from './layout'
import { TableDemo } from './components/TableDemo'
function App() {

  return (
    <>
    const router = createBrowserRouter ([
      {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Intro /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/intro", element: <Intro /> },
      { path: "/table", element: <Table /> },
      { path: "/forms", element: <Forms /> },
    ],
  }
    ])
    <Layout />
    children {

    <TableDemo />
    }
   {/* <Button>Click me</Button> */}
    </>
  )
}

export default App
