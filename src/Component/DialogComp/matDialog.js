import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogInputTabe from './DialogInputTabe'

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(props.btnClick);
  };

  const handleClose = () => {
    props.dialogClose(false);
  };

  const notify = ()=>{
    props.dialogClose(false);
}

  return (
    <div className='mat-Dlg'>
        {
            props.btnClick &&
            <Dialog  className = 'tab-dialog'open={true} onClose={handleClose} 
            PaperProps={{
                style: {
                  minHeight: '30vh',
                  minWidth: '30vw',
                },
              }}
                >
        <DialogTitle style = {{backgroundColor : '#bdd1c7'}}><b>Selected Data</b></DialogTitle>
        <DialogContent>
          <DialogInputTabe 
          data = {props.data}/>
        </DialogContent>
        <DialogActions style = {{backgroundColor : '#bdd1c7'}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={notify}>Save</Button>
        </DialogActions>
      </Dialog>
        }
      
    </div>
  );
}
