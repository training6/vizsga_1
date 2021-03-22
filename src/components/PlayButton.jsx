import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  menuH: {
  },
  iconB: {
    margin: "70px",
    width: "90px",
    height: "90px",
    backgroundColor: "black",
    color: '#efd592',
    border: " 1px solid #efd592",
    '&:hover': {
      color: "#242d38",
      stroke: "#242d38",
      backgroundColor: '#efd592'
    },
    '@media (max-width: 1100px)': {
      width: '90px',
      height: '90px'
    },
    '@media (max-width: 613px)': {
      width: '80px',
      height: '80px',
      border: " 1px solid #efd592",
    },
    '@media (max-width: 430px)': {
      width: '70px',
      height: '70px'
    }
  },
  icon: {
    fontSize: 65,
    '@media (max-width: 1100px)': {
      fontSize: 55,
    },
    '@media (max-width: 613px)': {
      fontSize: 45,
    },
    '@media (max-width: 430px)': {
      fontSize: 35,
    },
  }
});

const options = [
  'Home',
  'Blog',
  'Stg'
]

function PlayButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menuH}>
      <IconButton className={classes.iconB}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>

        <PlayArrowIcon className={classes.icon} />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '150px',
            minwidth: '150px',
            color: '#efd592',
            backgroundColor: '#242d38',
            marginLeft: '-100px'
          },
        }}>
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default PlayButton;