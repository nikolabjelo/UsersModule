import React, { Component } from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 100
  },
  grid: {
    margin: theme.spacing.unit,
    width: '50%'
  },
  typography: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
})

class Home extends Component {

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <div className={classes.heroContent}>
            <Typography
              variant='display3'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Collaborate. Innovate. Evolve.
            </Typography>
            <Typography
              variant='title'
              align='center'
              color='textSecondary'
              component='h3'
            >
              Welcome to Advanced Algos Users Module
            </Typography>
          </div>
        </main>

        <Grid container justify='center' spacing={24}>
          <Grid className={classes.grid} item>
            <Typography className={classes.typography} gutterBottom variant='headline' component='h2'>
          Intro
          </Typography>
            <Typography className={classes.typography} component='p'>
          This module is responsible for managing users across the Advanced Algos system. Here you can browse the Users Directory, search for users and get to their profiles. You can create your own User profile if you sign up, or manage it if you already have one by logging in.
          </Typography>
            <Typography className={classes.typography} gutterBottom variant='headline' component='h2'>
          Development Status
          </Typography>
            <Typography className={classes.typography} component='p'>
          This module is is currently under development. Implementation started 1st of September 2018 and this is the result of the 3rd sprint of 2 weeks of work each.
          </Typography>
            <Typography className={classes.typography} gutterBottom variant='headline' component='h2'>
          What can you do?
          </Typography>
            <Typography className={classes.typography} component='p'>
          Currently you can use the Browse section to list all registered users. At the Search page you can searh for users by name. Clicking on View Profile you can see some more info about that user. You can signup with your Github account and manage your profile information while logged in. While loggedin, you can edit your profile info, define your referrer and view your descendants. You will find all features under develpment with a dialog indicating it is not ready.
          </Typography>

          </Grid>
        </Grid>

      </React.Fragment>

    )
  }
}

export default compose(
  withStyles(styles)
)(Home)
