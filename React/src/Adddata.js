import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  textField: {
    '& .MuiInputBase-root': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.common.white,
      height: '48px',
      width: '100%', // Set the background color to white
    },
    '& .MuiInputBase-input': {
      textAlign: 'center',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.text.secondary,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.secondary,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.secondary,
      },
    },
    '& .MuiInputLabel-root': {
      textAlign: 'center',
    },
  },
  orangeButton: {
    color: 'white',
    backgroundColor: '#FC7500',
    width: '100%',
    height: '50px',
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(2.5)
    ,
  },
  redButton: {
    color: 'white',
    backgroundColor: '#DB4437',
    width: '100%',
    height: '50px',
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(2.5)
  },
}));

export default function AddDataTabContent() {
  const classes = useStyles();
  const [orderCreationDate, setOrderCreationDate] = useState('');

  const handleOrderCreationDateChange = (event) => {
    setOrderCreationDate(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* First Row */}
        <Grid item xs={3}>
          <TextField
            label="CUSTOMER ORDER ID"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="SALES ORG"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="DISTRIBUTION CHANNEL"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>

        {/* Second Row */}
        <Grid item xs={3}>
          <TextField
            label="CUSTOMER NUMBER"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="COMPANY CODE"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="ORDER CURRENCY"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="AMOUNT IN USD"
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            className={classes.textField}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label={orderCreationDate ? '' : 'ORDER CREATION DATE'}
            fullWidth
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{ shrink: true }} // Remove the "mm/dd/yyyy" placeholder
            className={classes.textField}
            type="date"
            value={orderCreationDate}
            onChange={handleOrderCreationDateChange}
          />
        </Grid>

        {/* Third Row */}
        <Grid item xs={6}>
          <Button className={classes.orangeButton}>ADD DATA</Button>
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.redButton}>CLEAR DATA</Button>
        </Grid>
      </Grid>
    </div>
  );
}