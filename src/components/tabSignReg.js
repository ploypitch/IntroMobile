import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid'
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import SignIn from '../components/SignIn';
import Reg from '../components/Register';

const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class tabSignReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle: true
        }
    }




handleChangeLogin = () => {
    this.setState({
        toggle: true
    })
}

handleChangeRegis = () => {
    this.setState({
        toggle: false
    })
}


render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
    
      <AppBar position="static">
        <Toolbar>
        <Typography variant="title" color="inherit" className={classes.grow}>
            PloyPetch
          </Typography>
          <Button onClick={this.handleChangeLogin} color="inherit">SIGN IN </Button>
          <Button onClick={this.handleChangeRegis} color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
      
      {this.state.toggle ? <SignIn /> : <Reg />}
    
    </div>
  );
}
}


export default withStyles(styles)(tabSignReg);