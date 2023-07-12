import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const DeleteDialog = ({ isOpen, onClose, onDelete, selectedRows }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Delete Records?</DialogTitle>
      <DialogContent>
        <div>Are you sure you want to delete these record[s]?</div>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          style={{
            width: "45%",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          color="primary"
          variant="contained"
          style={{
            width: "45%",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;