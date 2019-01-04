import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Grid,
  Button,
  Avatar,
  Toolbar,
  AppBar
} from '@material-ui/core';

import Dropdown from '../Dropdown/Dropdown.cmp';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    maxHeight: '30px',
  },
  toolbar: {
    minHeight: 'initial',
    maxHeight: '30px',
    height: '30px',
  },
  button: {
    color: 'rgb(254, 255, 255)',
    textTransform: 'initial',
    fontSize: '12px',
    minHeight: 'initial',
    maxHeight: '30px',
    padding: '2px 10px',
  },
  selected: {
    color: 'rgb(254, 255, 255)',
  },
  dropdown: {
    fontSize: '12px',
  },
  avatar: {
    width: '18px',
    height: '18px',
    fontSize: '12px',
    backgroundColor: 'rgb(65, 66, 67)',
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      index: 0,
    }
  }

  componentDidMount() {
    this.setState({
      value: 'Veris Veritatis'
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  isActive = (index) => {
    this.setState({
      index: index
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={'theme-grey-darker-background ' + classes.header} position="static">
          <Toolbar className={classes.toolbar}>
            <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            >
              <Grid item>
                <Button 
                onClick={() => {this.isActive(0)}} 
                className={classes.button + (this.state.index === 0 ? ' theme-yellow-text' : '')} 
                href="#">
                  Iste Natus
                </Button>
                <Button 
                onClick={() => {this.isActive(1)}} 
                className={classes.button + (this.state.index === 1 ? ' theme-yellow-text' : '')} 
                href="#">
                  Explicabo
                </Button>
                <Button onClick={() => {this.isActive(2)}} 
                className={classes.button + (this.state.index === 2 ? ' theme-yellow-text' : '')} 
                href="#">
                  Omnis
                </Button>
                <Button onClick={() => {this.isActive(3)}} 
                className={classes.button + (this.state.index === 3 ? ' theme-yellow-text' : '')} 
                href="#">
                  ipsa quae
                </Button>
                <Button onClick={() => {this.isActive(4)}} 
                className={classes.button + (this.state.index === 4 ? ' theme-yellow-text' : '')} 
                href="#">
                  Perspiciatis Unde
                </Button>
              </Grid>
              
              <Dropdown
                list={['Veris Veritatis', 'Veris', 'Veritatis']}
                />

              <Avatar className={'theme-grey-background ' + classes.avatar}>Z</Avatar>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
