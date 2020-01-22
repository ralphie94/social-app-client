import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../util/MyButton";

//MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";

//Redux
import { connect } from "react-redux";
import { postScream } from "../redux/actions/userActions";

const styles = {

}

class PostScream extends Component {

}

PostScream.propTypes = {
    postScream: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect((mapStateToProps, { postScream }))(withStyles(styles)(PostScream))