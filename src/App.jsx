import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import './App.css'
import Layout from './layout'
import { TableDemo } from './components/TableDemo'
import { Component } from './components/Component';
import { CardWithForm } from "./components/CardWithForm";
import Dashboard from "./components/Dashboard";

// Define router outside of the component
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Use : instead of =
    children: [ 
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/component", element: <Component /> },
      { path: "/table-demo", element: <TableDemo /> },
      { path: "/cardwithform", element: <CardWithForm /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />; // Return the RouterProvider component
}

export default App;
