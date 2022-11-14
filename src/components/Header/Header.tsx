import React, {Fragment, useState} from "react";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import AddMoreForm from "../AddMoreForm/AddMoreForm";

const Header = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Fragment>
            <Button onClick={handleOpen} variant="contained" color="warning">Add more</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle textAlign="center">
                    <b>Add your favorite car</b>
                </DialogTitle>
                <DialogContent>
                    <AddMoreForm handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default Header;