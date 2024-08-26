import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function BasicTable(props) {
    function getId(url) {
        let pieces = url.split('/')
        let id = pieces[pieces.length - 2]
        return id
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.pokemons.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"><Link to={`/pokemon-detail?id=${getId(row.url)}`}>{row.name}</Link></TableCell>
              <TableCell align="right"><Link to={`/pokemon-detail?id=${getId(row.url)}`}>{row.url}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}