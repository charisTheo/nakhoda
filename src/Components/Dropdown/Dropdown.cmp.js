import React, { Component } from 'react';
import { Card, Button } from '@material-ui/core';

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
            selected: event.target.innerHTML,
        });
        this.toggleList();
    };

    handleMouseLeave = event => {
        event.currentTarget.style.backgroundColor = 'transparent';
    };
    
    handleMouseEnter = event => {
        event.currentTarget.style.backgroundColor = 'rgb(26, 27, 28)';
    };

    render() {
        const { list } = this.props;
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
            card: {
                position: 'absolute',
                zIndex: 99,
                borderRadius: 30,
            },
            list: {
                margin: 0,
                listStyle: 'none',
                padding: 0,
            },
            listItem: {
                maxHeight: 30,
                fontSize: 10,
                marginTop: 0, 
            },
            listItemButton: {
                padding: '10px 16px',
                width: '100%',
                textAlign: 'left',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'rgb(254, 255, 255)'
            },
            icon: {
                display: 'inline-block',
                maxHeight: '30px',
                fontSize: '14px',
                color: 'rgb(254, 255, 255)',
            },
            ...this.props.styles,
        };

        return (
            <div>
                <div style={styles.dropdown}>
                    <Button style={styles.button} onClick={() => this.toggleList()}>
                        <div style={styles.selected} className='theme-grey-text'>{this.state.selected}</div>
                        {this.state.listOpen
                            ? <i style={styles.icon} className="material-icons">keyboard_arrow_up</i>
                            : <i style={styles.icon} className="material-icons">keyboard_arrow_down</i>
                        }
                    </Button>
                    {this.state.listOpen && 
                        <Card raised style={styles.card} className='theme-grey-dark-background'>
                            <ul style={styles.list}>
                                {list.map((item, index) => (
                                    <li 
                                    style={styles.listItem} 
                                    key={index}  
                                    className='theme-grey-text'>
                                        <button 
                                        style={styles.listItemButton} 
                                        onClick={this.toggleItem}
                                        onMouseEnter={this.handleMouseEnter} 
                                        onMouseLeave={this.handleMouseLeave}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}
