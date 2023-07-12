import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

const EditDialog = ({ isOpen, onClose, onSave, selectedRow }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <TextField
              label="Order Currency"
              variant="outlined"
              margin="normal"
              defaultValue={selectedRow?.orderCurrency}
              fullWidth
              style={{ marginRight: "8px" }}
            />
            <TextField
              label="Company Code"
              variant="outlined"
              margin="normal"
              defaultValue={selectedRow?.companyCode}
              fullWidth
              style={{ marginLeft: "8px" }}
            />
          </div>
          <TextField
            label="Distribution Channel"
            variant="outlined"
            margin="normal"
            defaultValue={selectedRow?.distributionChannel}
            fullWidth
            style={{ borderBottom: "none" }}
          />
        </div>
      </DialogContent>
      <div style={{ paddingTop: "16px" }}>
        <DialogActions style={{ justifyContent: "center", borderTop: "none" }}>
          <Button
            onClick={onSave}
            color="primary"
            variant="contained"
            style={{
              padding: "10px 20px",
              width: "50%",
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            Edit
          </Button>
          <Button
            onClick={onClose}
            color="primary"
            variant="contained"
            style={{
              padding: "10px 20px",
              width: "50%",
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default EditDialog;