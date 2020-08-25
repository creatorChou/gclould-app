import React from 'react'
import {makeStyles, Grid, Typography, Divider} from '@material-ui/core';
// import {ResultList} from './ResultList';
import {UploadButton} from './UploadButton'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px',
    padding: '20px 10px',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
}));

const Upload = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Upload File
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          Select file size and upload.
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select file size
        </Typography>
        <div>
          <UploadButton size={1}/>
          <UploadButton size={5}/>
          <UploadButton size={8}/>
        </div>
      </div>
      {/* <Divider variant="middle" /> */}
      {/* <ResultList /> */}
    </div>
  )
}

export {Upload}
