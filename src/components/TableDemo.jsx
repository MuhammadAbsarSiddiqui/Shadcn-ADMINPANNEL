import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    // TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import TableFetch from "./TableFetch";
  export function TableDemo() {
  
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableContent = async () => {
    setLoading(true);
    try {
      const url = 'https://raw.githubusercontent.com/devopsdeveloper1107/jsonfile/main/userData';
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      let parsedData = await data.json();
      setContent(parsedData || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    tableContent();
  }, []); 
    return (
      <>
        {loading ? (
        <div>Loading...</div>
      ) : (
      <Table>
        <TableCaption>A list of your recent customer</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >S.No</TableHead>
            <TableHead >ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
      
          {content.map((element,index) => (
              <TableFetch 
                 key={element.userid}
                 S_No={index+1}
                 userid={element.userid}
                 user_name={element.user_name}
                 user_email={element.user_email}
                 user_address={element.user_address}/> ))}
        </TableBody> 
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>) }
      </>
    )
  }
  