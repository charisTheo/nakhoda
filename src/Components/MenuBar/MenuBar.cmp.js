import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Grid,
  Button,
  Switch,
  IconButton,
  Toolbar,
  AppBar
} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 13px 9px rgba(0,0,0,0.14), 0px 1px 10px 20px rgba(0,0,0,0.07)',
    padding: 0,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: 12,
    padding: '0 40px',
    fontWeight: 'bold',
  },
  suntButton: {
    textTransform: 'initial',
    fontSize: 14,
    fontWeight: 'lighter',
    color: 'rgb(178, 131, 119)',
    minWidth: 54,
  },
  downArrowButton: {
    backgroundColor: 'rgb(94, 95, 96)',
    color: 'rgb(35, 36, 37)',
    borderRadius: '50%',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 3,
  },
  buttonIcon: {
    padding: 0,
  },
  buttonText: {
    textTransform: 'initial',
    fontSize: 10,
    fontWeight: 'normal',
  },
  buttonContainer: {
    width: 'initial',
    padding: '6px 10px',
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
    width: 20,
    height: 11,
    marginTop: -5,
    marginLeft: -10,
    backgroundColor: 'rgb(81, 82, 83)',
    opacity: 1,
    transition: theme.transitions.create(['background-color']),
  },
  iOSIcon: {
    width: 11,
    height: 11,
    marginLeft: -15,
    backgroundColor: 'rgb(154, 155, 156)',
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
  iOSSwitchBase: {
    height: 24,
    width: 24,
  },
  iOSroot: {
    width: 24,
  }
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
                    <i className={classes.downArrowButton + ' material-icons'}>keyboard_arrow_down</i>
                    <label className={classes.buttonText}>Beatae Vita</label>
                </Grid>
            </Button>
            <div className='divider-vertical' />

            <p className={'theme-grey-text ' + classes.title}>Doloremque laudantium otam Dolaremque laudantium otam</p>

            <div className='divider-vertical' />

            <div className={classes.grow} />

            <div className='divider-vertical' />

            <Grid 
            container 
            direction='row'
            justify="center"
            alignItems="center"
            className={classes.buttonContainer + ' theme-grey-text'}
            >
                <Grid 
                container 
                item
                direction='column'
                justify="center"
                alignItems="center"
                className={classes.buttonContainer}
                >
                  <IconButton color="inherit" className={classes.buttonIcon}>
                      <i className='material-icons'>delete</i>
                  </IconButton>
                  <label className={classes.buttonText}>Archieto</label>
                </Grid>  
                
                <Grid 
                container 
                item
                direction='column'
                justify="center"
                alignItems="center"
                className={classes.buttonContainer}
                >
                  <Switch 
                  classes={{
                    switchBase: classes.iOSSwitchBase,
                    root: classes.iOSroot,
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
                  <label className={classes.buttonText}>Aperiam</label>
                </Grid>
                
                <Grid 
                container 
                item
                direction='column'
                justify="center"
                alignItems="center"
                className={classes.buttonContainer}
                >
                  <Switch 
                  classes={{
                    switchBase: classes.iOSSwitchBase,
                    root: classes.iOSroot,
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
                  <label className={classes.buttonText}>Totam</label>
                </Grid>

                <Grid 
                container 
                item
                direction='column'
                justify="center"
                alignItems="center"
                className={classes.buttonContainer}
                >
                  <IconButton color="inherit" className={classes.buttonIcon}>
                      <i className='material-icons'>mail</i>
                  </IconButton>
                  <label className={classes.buttonText}>Rem</label>
                </Grid>
            </Grid>
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
