import React, { useEffect, useState } from 'react';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Component1 = ({ tableData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from tableData (e.g., data1.json)
    // Update the data state
  }, [tableData]);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header 1</TableCell>
              <TableCell>Header 2</TableCell>
              {/* Add more headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.field1}</TableCell>
                <TableCell>{item.field2}</TableCell>
                {/* Render more table cells based on your data structure */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Component1;
