import React from 'react'
import {makeStyles, Button} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const UploadButton = ({size}: any) => {
  const classes = useStyles();
  const handleClick = () => {
    const s = "abcdefghij".repeat(size * 50000);
    axios.post('/upload.json', {
      data: s
    })
  }
  return (
    <Button
      className={classes.chip}
      variant="contained"
      color="primary"
      onClick={handleClick}
      >
      {size}M
    </Button>
  )
}

export {UploadButton};
