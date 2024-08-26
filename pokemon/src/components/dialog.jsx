import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useSelector, useDispatch } from 'react-redux';
import { catchYa } from '../store/myPokemons';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [nickname, setNickname] = React.useState('');
    const [catchInfo, setCatchInfo] = React.useState('');
    const myPokemon = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function catchPokemon() {
        fetch(`http://localhost:4000/`, {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "your-api-key",
              "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                if (data) trueCatchPokemon()
                    else setCatchInfo('You failed... Try again')
            })
            .catch((error) => console.log(error));
    }

    function trueCatchPokemon() {
        let trigger = true;
        let temp = {nickname}
        for (let index = 0; index < myPokemon.length; index++) {
            const element = myPokemon[index];
            if (element.payload.id === props.pokemon.id) trigger = false;
        }

        for (const property in props.pokemon) {
            temp[`${property}`] = props.pokemon[property]
        }
        if (trigger === true) dispatch(catchYa(temp)) // CAN NOT DOUBLE POKEMON
        setOpen(false);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getInputNickname = (e) => {
        setNickname(e.target.value)
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
            <img width={'50px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png' alt=""></img>
            Catch Pokemon</Button>
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
                    <InputLabel>Nickname of the pokemon</InputLabel>
                    <Input value={nickname} onChange={getInputNickname} type='text'></Input>
                    <DialogContentText id="alert-dialog-description">You have 50% chance to get the pokemon. Good luck</DialogContentText>
                    <DialogContentText style={{ color: 'orange' }} id="alert-dialog-description">{catchInfo}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={catchPokemon} autoFocus>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
