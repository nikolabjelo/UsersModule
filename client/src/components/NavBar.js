import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// icons
import UsersIcon from '@material-ui/icons/People'
import BrowseIcon from '@material-ui/icons/ImportContacts'
import SearchIcon from '@material-ui/icons/Search'
import ContactIcon from '@material-ui/icons/ContactMail'
import BugReportIcon from '@material-ui/icons/BugReport'

import { Link } from 'react-router-dom'

// components
import LoggedInUser from './LoggedInUser'

const HomeLink = props => <Link to='/users' {...props} />
const BrowseLink = props => <Link to='/users/browse' {...props} />
const SearchLink = props => <Link to='/users/search' {...props} />

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
    marginLeft: 30
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  cssRoot: {
    color: '#FFFFFF',
    backgroundColor: theme.palette.secondary,
    '&:hover': {
      backgroundColor: theme.palette.dark
    },
    whiteSpace: 'nowrap',
    paddingRight: 2 * theme.spacing.unit,
    paddingLeft: 2 * theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

class NavBar extends Component {

  constructor (props) {
    super(props)
    this.state = {
      authId: null
    }
  }

  componentDidMount () {
    let user = localStorage.getItem('user')
    let authId

    if (user !== null && user !== undefined && user !== 'undefined') {
      user = JSON.parse(user)
      authId = user.authId
    }

    if (authId !== null && authId !== undefined && authId !== 'undefined') {
      this.setState({ authId: authId })
    }
  }

  render () {
    const { classes, user, match } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static' color='secondary'>
          <Toolbar variant='dense'>
            <Typography variant='h5' color='inherit' className={classes.flex}>
              Users
            </Typography>
            <LoggedInUser {...this.props} authId={this.state.authId} />
            <Button
              variant='text'
              size='small'
              className={classNames(classes.button, classes.cssRoot)}
              title='Browse the Users Directory'
              component={BrowseLink}
              to={`${match.url}/browse`}>
              <BrowseIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Directory
            </Button>
            <Button
              variant='text'
              size='small'
              className={classNames(classes.button, classes.cssRoot)}
              title='Search Users'
              component={SearchLink}
              to={`${match.url}/search`}>
              <SearchIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Search
            </Button>
            <Button
              variant='text'
              size='small'
              className={classNames(classes.button, classes.cssRoot)}
              title='Report a Users Module bug'
              href='https://github.com/AdvancedAlgos/UsersModule/issues/new'
              target='_blank'
            >
              <BugReportIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Report
            </Button>
            <Button
              variant='text'
              size='small'
              className={classNames(classes.button, classes.cssRoot)}
              title='Users Module Home'
              component={HomeLink}
              to={`${match.url}`}>
              <UsersIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(styles)(NavBar)

