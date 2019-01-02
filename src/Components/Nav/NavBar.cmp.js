import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import './NavBar.cmp.css';

const styles = {
  header: {
    flexGrow: 1,
    backgroundColor: 'rgb(22, 23, 24)',
    maxHeight: '30px',
  },
  toolbar: {
    minHeight: 'initial',
    maxHeight: '30px',
  },
  link: {
    color: 'rgb(254, 255, 255)',
    textTransform: 'initial',
    fontSize: '12px',
  },
  selected: {
    color: 'rgb(254, 255, 255)',
  },
  dropdown: {
    fontSize: '12px',
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
        <AppBar style={styles.header} position="static">
          <Toolbar style={styles.toolbar}>
            <Button onClick={() => {this.isActive(0)}} className={this.state.index === 0 ? 'theme-yellow' : ''} style={styles.link} href="#">
              Iste Natus
            </Button>
            <Button onClick={() => {this.isActive(1)}} className={this.state.index === 1 ? 'theme-yellow' : ''} style={styles.link} href="#">
              Explicabo
            </Button>
            <Button onClick={() => {this.isActive(2)}} className={this.state.index === 2 ? 'theme-yellow' : ''} style={styles.link} href="#">
              Omnis
            </Button>
            <Button onClick={() => {this.isActive(3)}} className={this.state.index === 3 ? 'theme-yellow' : ''} style={styles.link} href="#">
              ipsa quae
            </Button>
            <Button onClick={() => {this.isActive(4)}} className={this.state.index === 4 ? 'theme-yellow' : ''} style={styles.link} href="#">
              Perspiciatis Unde
            </Button>
            
            <FormControl>
              <Select
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.dropdown}
              >
                <MenuItem value="Veris Veritatis">Veris Veritatis</MenuItem>
                <MenuItem value='Veris'>Veris</MenuItem>
                <MenuItem value='Veritatis'>Veritatis</MenuItem>
              </Select>
            </FormControl>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


  // flexGrow: 1,
  // backgroundColor: 'rgb(22, 23, 24)',
