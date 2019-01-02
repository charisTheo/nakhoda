import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const styles = {
    dropdown: {
        maxHeight: 'inherit',
    },
    button: {
        color: 'rgb(254, 255, 255)',
        textTransform: 'initial',
        fontSize: '10px',
        minHeight: 'initial',
        maxHeight: '30px',
        padding: '2px 10px',
    },
    list: {
        margin: 0,
        listStyle: 'none',
        textAlign: 'left',
        padding: '6px 16px',
        position: 'absolute',
    },
    listItem: {
        maxHeight: '30px',
        fontSize: '10px',
        marginTop: '5px', 
    },
    icon: {
        display: 'inline-block',
        maxHeight: '30px',
        fontSize: '12px',
        color: 'rgb(254, 255, 255)',
    },
};

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            selected: props.list[0],
        }
    }
    
    handleClickOutside() {
        this.setState({
            listOpen: false
        });
    }
    
    toggleList() {
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }));
    }

    toggleItem = (event) => {
        this.setState({
            selected: event.target.text,
            listOpen: false
        });
    };

    render() {
        const{list} = this.props;

        return (
          <div style={styles.dropdown}>
            <Button style={styles.button} onClick={() => this.toggleList()}>
                <div style={styles.selected} className='theme-grey-text'>{this.state.selected}</div>
                {this.state.listOpen
                    ? <i style={styles.icon} className="material-icons">keyboard_arrow_up</i>
                    : <i style={styles.icon} className="material-icons">keyboard_arrow_down</i>
                }
            </Button>
            {this.state.listOpen && <ul style={styles.list} className='theme-grey-dark-background'>
                {list.map((item, index) => (
                    <li style={styles.listItem} key={index} className='theme-grey-text'>
                        <a onClick={this.toggleItem}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>}
          </div>
        )
    }
}
