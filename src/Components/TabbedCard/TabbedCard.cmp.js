import React, { Component } from 'react'
import injectSheet from "react-jss";
import PropTypes from 'prop-types'
import { 
  withStyles, 
  Card, 
  CardActions, 
  CardContent, 
  Tab, 
  Tabs, 
  Grid 
} from '@material-ui/core';

import Dropdown from "./../Dropdown/Dropdown.cmp";

const styles = theme => ({
  card: {
    borderRadius: 30,
    width: '100%',
    margin: 30,
  },
  tabsRoot: {
    borderBottom: '1px solid rgb(29, 30, 31)',
  },
  tabsIndicator: {
    backgroundColor: 'rgb(224, 174, 97)',
  },
  tabRoot: {
    textTransform: 'initial',
    fontWeight: '500',
    color: 'rgb(210, 211, 212)',
    margin: '0 20px',
    '&:hover': {
      color: 'rgb(248, 203, 135)',
    },
    '&$tabSelected': {
      color: 'rgb(224, 174, 97)',
    },
  },
  tabSelected: {},
  tabContent: {
    padding: '15px 20px',
    textAlign: 'left',
    fontSize: 14,
  },
});

class TabbedCard extends Component {
  state = {
    value: 1,
    indicatorStyles: {
      indicator: {
        backgroundColor: "rgb(224, 174, 97)",
      }
    },
  };

  static propTypes = {
    prop: PropTypes
  };

  handleChange = (event, value) => {
    const tabStyles = window.getComputedStyle(event.currentTarget);
    const tabWidth = parseInt(tabStyles.width.split('px')[0]);
    const tabLeft = parseInt(tabStyles.left.split('px')[0]);
    // change tab value
    // and set the according width and position of the tab indicator
    this.setState({
      value: value,
      indicatorStyles: {
        indicator: {
          ...this.state.indicatorStyles.indicator,
          width: tabWidth/2,
          left: tabLeft + (tabWidth/4)
        }
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { value, indicatorStyles} = this.state;
    
    const CustomTabs = ({classes, children}) => (
      <Tabs 
      value={value} 
      onChange={this.handleChange}
      classes={{root: classes.root, indicator: classes.indicator}}
      >
        {children}
      </Tabs>
    );
    const StyledCustomTabs = injectSheet({...indicatorStyles, root: {borderBottom: '1px solid rgb(29, 30, 31)'}})(CustomTabs);

    return (
      <Card raised={true} className={classes.card + ' theme-grey-dark-background'}>
        <CardActions>
          <StyledCustomTabs>
            <Tab label="Perspiciatis unde" style={{
                fontWeight: 'lighter', 
                color: 'rgb(178, 131, 119)'
              }} classes={{root: classes.tabRoot, selected: classes.tabSelected}} />
            <Tab label="Accusantium doloremque laudant" classes={{root: classes.tabRoot, selected: classes.tabSelected}} />
            <Tab label="Voluptatem (duvrnem)" classes={{root: classes.tabRoot, selected: classes.tabSelected}} />
          </StyledCustomTabs>          
        </CardActions>

        <CardContent>
          {value === 0 && <Grid className={classes.tabContent}>Tab one content</Grid>}
          {value === 1 && 
            <Grid 
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            className={classes.tabContent}
            >
              <label style={{
                fontWeight: 'lighter', 
                color: 'rgb(178, 131, 119)',
                minWidth: 140,
              }}>Iste Natus</label>
              <label style={{minWidth: 140}}>
                <Dropdown styles={{
                    button: {
                      fontSize: 14, 
                      textTransform: 'initial',
                      color: 'rgb(254, 255, 255)',
                    }, 
                    icon: {
                      fontSize: '22px', 
                      color: 'rgb(254, 255, 255)'}
                    }} list={[
                  "Accusantium doloremque laudant",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae",
                  "Architecto beatae vitae"
                ]}/>
              </label>
              <label style={{minWidth: 140, color: 'rgb(224, 174, 97)'}}>Unde omnis</label>
            </Grid>
          }
          {value === 2 && <Grid className={classes.tabContent}>Tab three content</Grid>}
        </CardContent>
      </Card>
    )
  }
}

TabbedCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TabbedCard);