import React from 'react'
import {
    TableCell,
    TableRow,
  } from "@/components/ui/table"
function TableFetch({S_No,userid,user_name,user_email,user_address}) {
  return (
      
            <TableRow >
              <TableCell>{S_No}</TableCell>
              <TableCell className="font-medium">{userid}</TableCell>
              <TableCell>{user_name}</TableCell>
              <TableCell>{user_email}</TableCell>
              <TableCell className="text-right">{user_address}</TableCell>
            </TableRow>
       
  )
}

export default TableFetch
