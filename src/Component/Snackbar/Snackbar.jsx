import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + * ' : {
            marginTop: theme.spacing(2),
        },
    },
}));
export default class Snackbar extends Component{
    const classes = useStyles();
    constructor(props){
        super(props)
        this.state={
            open: true;
        }
    }
    render(){
        return(
        <Snackbar open={open} autoHideDuration={6000}>
        This is a success message!
        </Snackbar>
        )
    }
} 