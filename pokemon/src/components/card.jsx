import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Dialog from './dialog';

export default function MediaCard(props) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 500 }}
                image={props.pokemon.sprites.front_default}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.pokemon.species.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Weight : {props.pokemon.weight}, Base Experience : {props.pokemon.base_experience}
                </Typography>
            </CardContent>
            <CardActions>
                <List sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                    subheader={<li />}
                >
                    <li>
                        <ul>
                            <ListSubheader>Moves</ListSubheader>
                            {props ? props.pokemon.moves.map((item) => (
                                <ListItem key={`item-${item.move.name}`}>
                                    <ListItemText primary={`Move Name: ${item.move.name}`} />
                                </ListItem>
                            )) : []}
                        </ul>
                    </li>
                </List>
                <List sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                    subheader={<li />}
                >
                    <li>
                        <ul>
                            <ListSubheader>Types</ListSubheader>
                            {props ? props.pokemon.types.map((item) => (
                                <ListItem key={`item-${item.type.name}`}>
                                    <ListItemText primary={`Type Name: ${item.type.name}`} />
                                </ListItem>
                            )) : []}
                        </ul>
                    </li>
                </List>
                <CardMedia
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
                    title="green iguana"
                />
                <Dialog pokemon={props.pokemon} />
            </CardActions>
        </Card>
    );
}