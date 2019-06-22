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
import {DropzoneArea} from 'material-ui-dropzone'
import './Form.css'
const FormComponent = (props) => {
const { open, handleClose, selectedDate, handleClickOpen, handleChange, handleAdd, handleUpload, handleDateChange } = props;

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
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="place"
            label="Place"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <DropzoneArea 
            onDrop={handleUpload}
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropZoneClass='dropzone'
            showPreviewsInDropzone={false}
            showPreviews={true}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
          <DatePicker
          id="selectedDate"
          margin="normal"
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        
        <TimePicker
          id="selectedDate"
          margin="normal"
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
        />
        </Grid>
        </MuiPickersUtilsProvider>
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