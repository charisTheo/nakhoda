import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Dropdown from '../Dropdown/Dropdown.cmp';


const styles = {
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
};

export default class NavBar extends Component {
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
    return (
      <div className="NavBar">
        <AppBar style={styles.header} className='theme-grey-darker-background' position="static">
          <Toolbar style={styles.toolbar}>
            <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            >
              <Grid item>
                <Button onClick={() => {this.isActive(0)}} className={this.state.index === 0 ? 'theme-yellow-text' : ''} style={styles.button} href="#">
                  Iste Natus
                </Button>
                <Button onClick={() => {this.isActive(1)}} className={this.state.index === 1 ? 'theme-yellow-text' : ''} style={styles.button} href="#">
                  Explicabo
                </Button>
                <Button onClick={() => {this.isActive(2)}} className={this.state.index === 2 ? 'theme-yellow-text' : ''} style={styles.button} href="#">
                  Omnis
                </Button>
                <Button onClick={() => {this.isActive(3)}} className={this.state.index === 3 ? 'theme-yellow-text' : ''} style={styles.button} href="#">
                  ipsa quae
                </Button>
                <Button onClick={() => {this.isActive(4)}} className={this.state.index === 4 ? 'theme-yellow-text' : ''} style={styles.button} href="#">
                  Perspiciatis Unde
                </Button>
              </Grid>
              
              <Dropdown
                list={['Veris Veritatis', 'Veris', 'Veritatis']}
                />

              <Avatar className='theme-grey-background' style={styles.avatar}>Z</Avatar>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


  // flexGrow: 1,
  // backgroundColor: 'rgb(22, 23, 24)',
