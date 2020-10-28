import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2)
        }
    }
}));

export default function CustomAlert(props) {
    const classes = useStyles();
    const {
        severity,
        title,
        message,
        muiClasses,
        ...rest
    } = props;

    return (
        <div className={classes.root}>
            <Alert {...rest} classes={muiClasses} severity={severity}>
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </div>
    );
};

CustomAlert.propTypes = {
    severity: PropTypes.oneOf([
        "error",
        "info",
        "success",
        "warning"
    ]),
    title: PropTypes.string,
    message: PropTypes.string,
    //use this to pass the slasses props from Material-UI
    muiClasses: PropTypes.object
};