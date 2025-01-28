import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from './layout'
import { TableDemo } from './components/TableDemo'
import { Component } from './components/Component';

// Define router outside of the component
const router = createBrowserRouter([
  {
    path: "/", // Use : instead of =
    element: <Layout><Outlet /></Layout>, // Use : instead of =
    children: [ // Use : and add missing =
      { path: "/component", element: <Component /> },
      { path: "/table-demo", element: <TableDemo /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />; // Return the RouterProvider component
}

export default App;
