import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    padding: 0,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: '12px',
    padding: '0 40px',
  },
  suntButton: {
    textTransform: 'initial',
    fontSize: '14px',
    fontWeight: 'lighter',
    minWidth: '54px',
    color: 'rgb(178, 131, 119)',
  },
  buttonText: {
    textTransform: 'initial',
    fontSize: '10px',
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
      backgroundColor: 'rgb(81, 82, 83) !important',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    backgroundColor: 'rgb(81, 82, 83)',
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'rgb(154, 155, 156)',
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

class MenuBar extends Component {
  state = {
    switch1: false,
    switch2: true,
  };

  toggleSwitch = event => {
    this.setState({
        [event.target.id]: event.target.checked
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar + ' theme-grey-dark-background'}>
            <Button className={classes.suntButton}>Sunt</Button>

            <div className='divider-vertical' />
            
            <Button className='theme-grey-text'>
                <Grid 
                container 
                direction='column'
                justify="center"
                alignItems="center"
                >
                    <i className="material-icons">keyboard_arrow_down</i>
                    <span className={classes.buttonText}>Beatae Vita</span>
                </Grid>
            </Button>
            <div className='divider-vertical' />

            <p className={'theme-grey-text ' + classes.title}>Doloremque laudantium otam Dolaremque laudantium otam</p>

            <div className='divider-vertical' />

            <div className={classes.grow} />

            <div className='divider-vertical' />

            <div className='theme-grey-text'>
                <IconButton color="inherit">
                    <i className="material-icons">delete</i>
                </IconButton>
                
                <Switch 
                classes={{
                    switchBase: classes.iOSSwitchBase,
                    bar: classes.iOSBar,
                    icon: classes.iOSIcon,
                    iconChecked: classes.iOSIconChecked,
                    checked: classes.iOSChecked,
                }}
                disableRipple
                id='switch1' 
                checked={this.state.switch1} 
                onChange={this.toggleSwitch}
                />
                
                <Switch 
                classes={{
                    switchBase: classes.iOSSwitchBase,
                    bar: classes.iOSBar,
                    icon: classes.iOSIcon,
                    iconChecked: classes.iOSIconChecked,
                    checked: classes.iOSChecked,
                }}
                disableRipple
                id='switch2' 
                checked={this.state.switch2} 
                onChange={this.toggleSwitch}
                />

                <IconButton color="inherit">
                    <i className="material-icons">mail</i>
                </IconButton>
            </div>
            <div className='divider-vertical' />

            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
