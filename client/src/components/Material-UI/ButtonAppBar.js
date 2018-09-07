import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/Person';
import BrowseIcon from '@material-ui/icons/ImportContacts';
import SearchIcon from '@material-ui/icons/Search';
import ContactIcon from '@material-ui/icons/ContactMail';
import AboutIcon from '@material-ui/icons/FormatShapes';
import ModulesIcon from '@material-ui/icons/QueuePlayNext';

import { Link } from 'react-router-dom';

// components
import LoggedInUser from '../LoggedInUser';

const AboutLink = props => <Link to="/about" {...props} />
const ContactLink = props => <Link to="/contact" {...props} />
const SearchLink = props => <Link to="/search" {...props} />
const BrowseLink = props => <Link to="/browse" {...props} />
const ProfileLink = props => <Link to="/profile" {...props} />
const HomeLink = props => <Link to="/" {...props} />

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Users Module
          </Typography>

          <IconButton className={classes.menuButton} color="inherit" title="Home" component={HomeLink}><HomeIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="Manage you User Profile" component={ProfileLink}><ProfileIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="Browse the Users Directory" component={BrowseLink}><BrowseIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="Search Users" component={SearchLink}><SearchIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="Contact Form" component={ContactLink}><ContactIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="About this Module" component={AboutLink}><AboutIcon /></IconButton>
          <IconButton className={classes.menuButton} color="inherit" title="Go to another Module" component={AboutLink}><ModulesIcon /></IconButton>

          <LoggedInUser authId="999"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);