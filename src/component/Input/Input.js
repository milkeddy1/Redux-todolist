import React from 'react';
import './input.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'
import { v4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../../data/action/data';


const useStyles = makeStyles({
    root: {
        background: '#FF9224',
        '&:hover': {
            background: '#82D900',
        },
        margin: '0.5rem'
    },

});

function Input({ setNote, note }) {

    const classes = useStyles()

    const dispatch = useDispatch()

    return <div className="input_container">
        <input type="text" className="input" value={note} onChange={(e) => { setNote(e.target.value) }}  ></input>
        <Button className={classes.root} color="primary" variant="contained" onClick={() => {
            dispatch({
                type: ADD_TODO,
                note,
                id: v4(),
                complete: false
            });
            setNote('')
        }}>ADD</Button>
    </div>;
}

export default Input;
