import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

const FormComponent = (props) => {
const { open, handleClose, handleDateChange, selectedDate,
  handleClickOpen, handleNameChange, handlePlaceChange,
  handleAdd } = props;

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={handleNameChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="place"
            label="Place"
            type="text"
            onChange={handlePlaceChange}
            fullWidth
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
          <DatePicker
          margin="normal"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        
        <TimePicker
          margin="normal"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
        />
        </Grid>
        </ MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormComponent;