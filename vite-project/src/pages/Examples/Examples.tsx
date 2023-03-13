import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import { Products } from '../../types/products';


const Examples =() => {
    const createData = (
        name:string, 
        calories: number, 
        fat: number, 
        carbs: number, 
        protein: number
        ) => {
        return {name, calories, fat, carbs, protein};
    };
    
    const rows = [
        createData ("Frozen Yoghurt",125, 6.0, 24, 4.0),
        createData ("Frozen Yoghurt",125, 6.0, 24, 4.0),
    ]
  return (
    <TableContainer component={Paper} sx={{ width: 500 }}>
      <Table sx={{ 
        width: 500,
        height:300,
        }}
        >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Examples;