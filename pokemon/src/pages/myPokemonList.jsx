import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { releaseYa } from '../store/myPokemons';

function MyPokemonList() {
  const myPokemon = useSelector((state) => state.counter.value)
  const [pokemons, setPokemons] = useState([]);
  const [nickname, setNickname] = React.useState('');
  const [releaseInfo, setReleaseInfo] = React.useState('success');
  const [changeNicknameTimes, setChangeNicknameTimes] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setPokemons(myPokemon)
  }, [myPokemon]);

  function releaseButton(id) {
    fetch(`http://localhost:5000/`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data % 2 === 0) {
          setReleaseInfo('warning')
        } else {
          setReleaseInfo('success')
          successRelease(id)
        }
      })
      .catch((error) => console.log(error));
  }

  function successRelease(id) {
    let sample = [];
    for (let index = 0; index < myPokemon.length; index++) {
      const element = myPokemon[index];
      if (element.payload.id !== id) sample.push(element)
    }
    dispatch(releaseYa(sample))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getFormatNickname(id) {
    fetch(`http://localhost:6060/?times=${changeNicknameTimes}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        changeNickname(id, data)
        setChangeNicknameTimes(changeNicknameTimes + 1)
      })
      .catch((error) => console.log(error));
  }

  const changeNickname = (id, data) => {
    let temp = {};
    let result = [];
    for (let index = 0; index < myPokemon.length; index++) {
      const element = myPokemon[index];
      if (element.payload.id === id) {
        for (const property in element.payload) {
          if (property === 'nickname') temp[`${property}`] = `${nickname}-${data}`
          else temp[`${property}`] = element.payload[property]
        }
        result.push({payload: temp})
      } else {
        result.push({payload: element.payload})
      }
    }
    dispatch(releaseYa(result))
    setOpen(false);
  }

  const getInputNickname = (e) => {
    setNickname(e.target.value)
  }

  return (
    <div className="About">
      <h1>List of Pokemons</h1>
      <div className='card' style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Nickname</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>Picture</TableCell>
                <TableCell align="right" style={{ fontWeight: 'bold' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.payload.name}</TableCell>
                  <TableCell>{row.payload.nickname}</TableCell>
                  <TableCell align="right"><img src={row.payload.sprites.front_default} alt=""></img></TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={handleClickOpen}>Change Nickname</Button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are you sure to do this?"}
                      </DialogTitle>
                      <DialogContent>
                        <InputLabel>Change Nickname of the pokemon</InputLabel>
                        <Input value={nickname} onChange={getInputNickname} type='text'></Input>
                        <DialogContentText id="alert-dialog-description"></DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={() => getFormatNickname(row.payload.id)} autoFocus>Agree</Button>
                      </DialogActions>
                    </Dialog>
                    <Button variant="contained" color='success' onClick={() => releaseButton(row.payload.id)}>Release</Button>
                    <Alert severity={releaseInfo} style={{width: '150px'}}>{releaseInfo === 'success' ? 'Owned' : 'Fail release..'}</Alert>

                  </TableCell>
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default MyPokemonList;
