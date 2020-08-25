import React from 'react'
import {
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

function generate(element: any) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ResultList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List dense>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.green}>
                {true ? <CheckIcon /> : <ErrorOutlineIcon/>}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Upload success!"
              secondary="Status: 200"
            />
          </ListItem>,
        )}
      </List>
    </div>
  )
}

export {ResultList};
