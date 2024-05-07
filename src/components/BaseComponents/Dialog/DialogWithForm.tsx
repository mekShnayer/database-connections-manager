import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { InputLabel, NativeSelect } from '@mui/material';
import { dataObjectType } from '../../../requests/addDatabaseConnection';
import { formFieldsDef } from '../../../constants/connectionsFormFields';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface DialogWithFormProps {
    buttonText: string | ReactJSXElement;
    handleSubmit: (object: dataObjectType) => void;
    prevDetails?: dataObjectType;
    dialogTitle?: string;
    dialogText?: string;
    fields: formFieldsDef[];
    buttonStyle?: React.CSSProperties;
}

export const DialogWithForm: React.FC<DialogWithFormProps> = (props) => {
    const {
        buttonText,
        handleSubmit,
        dialogTitle,
        prevDetails,
        dialogText,
        fields,
        buttonStyle
    } = props
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} style={{ ...buttonStyle }}>
                {buttonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        handleSubmit({ ...formJson } as dataObjectType)
                        handleClose();
                    },
                    style: {
                        borderRadius: 16,
                        width: "30%",
                        minWidth: 370
                    }
                }}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        {dialogText}
                    </DialogContentText>
                    {fields.map((field, index) => {
                        switch (field.fieldOption) {
                            case "text": {
                                return (
                                    <TextField
                                        key={index}
                                        autoFocus
                                        required
                                        margin="dense"
                                        id={field.name}
                                        name={field.name}
                                        defaultValue={prevDetails?.[field.name as keyof dataObjectType]}
                                        label={field.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )
                            } case "password": {
                                return (

                                    <TextField
                                        key={index}
                                        autoFocus
                                        required
                                        margin="dense"
                                        id={field.name}
                                        name={field.name}
                                        defaultValue={prevDetails?.[field.name as keyof dataObjectType]}
                                        label={field.label}
                                        type="password"
                                        fullWidth
                                        variant="standard"
                                    />
                                )
                            }
                            case "select": {
                                return (
                                    <div key={index}>
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            {field.label}
                                        </InputLabel>
                                        <NativeSelect
                                            defaultValue={prevDetails?.[field.name as keyof dataObjectType]}
                                            inputProps={{
                                                name: field.name,
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            {field.selectOptions?.map((option, i) => {
                                                return (
                                                    <option key={i} value={option}>{option}</option>
                                                )
                                            })}
                                        </NativeSelect>
                                    </div>
                                )
                            }
                        }
                    })}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
