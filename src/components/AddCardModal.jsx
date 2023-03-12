import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Input, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f7d8d8d9",
    border: "2px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");

  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={2}>
          <Box>
            <Typography>Card Title</Typography>
            <TextField
              fullWidth
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>

          <Box>
            <Typography>Detail</Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Detail"
              multiline
              rows={10}
              variant="outlined"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </Box>

          <Button
            disabled={title === "" && detail === ""}
            onClick={() => {
              handleCardAdd(title, detail);
              setDetail("");
              setTitle("");
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddCardModal;
