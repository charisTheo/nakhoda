import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles} from '@material-ui/core';
import TabbedCard from './../TabbedCard/TabbedCard.cmp';

const styles = theme => ({
    header: {
        padding: '20px 18vw',
    },    
    title: {
        fontWeight: 'normal',
        margin: 0,
        marginLeft: 7,
    },
    subtitle: {
        textAlign: 'left',
        fontWeight: 'normal',
    },
    row: {
        maxHeight: 28,
        textAlign: 'left',
        fontSize: 12,
    },
    bolder: {
        fontWeight: 500,
    },
    white: {
        color: '#fff',
    }
});

class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { classes } = this.props;

    return (
      <header className={classes.header}>
            <Grid 
            className={classes.titleContainer + ' theme-yellow-text'}
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-end'
            >
                <i className='material-icons'>done</i> 
                <h3 className={classes.title}>CSed ut perspiciatis unde</h3>
            </Grid>
            <Grid>
                <h5 className={classes.subtitle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h5>
            </Grid>
                
            {/* column */}
            <Grid 
            container
            direction='column'
            justify='flex-start'
            alignItems='center'
            className='theme-white-text'
            spacing={32}
            >
                {/* first row */}
                <Grid 
                container
                item
                xl
                direction='row'
                justify='flex-start'
                alignItems='center'
                >
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Otam rem aperiam</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Perspiciatis Unde</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Ipsa quae</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Architecto beatae vitae</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Unde omnis</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Perspiciatis Unde</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Voluptatem (duvrnem)</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Architecto beatae vitae</p></Grid>
                        <Grid xs item><p className={classes.white}>architecto beatae vitae</p></Grid>
                    </Grid>
                </Grid>

                {/* second row */}
                <Grid 
                container
                item
                xl
                direction='row'
                justify='flex-start'
                alignItems='center'
                >
                <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Totam</p></Grid>
                        <Grid xs item><p className={classes.bolder}>5.0</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Iste Natus</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Omnis iste natus</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Omnis Iste Natus Erro</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Accusantium doloremque laudant</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                    <Grid 
                    container
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                    spacing={8}
                    className={classes.row}
                    >
                        <Grid xs item><p>Explicabo</p></Grid>
                        <Grid xs item><p className={classes.bolder}>Accusantium dolor</p></Grid>
                        <Grid xs item><p className={classes.white}></p></Grid>
                    </Grid>
                </Grid>

                <TabbedCard />
            </Grid>
      </header>
    )
  }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);