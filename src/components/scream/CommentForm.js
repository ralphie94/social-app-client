import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// MUI
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// Redux
import { connect } from "react-redux";
import { submitComment } from "../../redux/actions/dataActions";

const styles = theme => ({
    paper: {
        padding: 20
    },
    profile: {
        "& .image-wrapper": {
            textAlign: "center",
            position: "relative",
            "& button": {
                position: "absolute",
                top: "80%",
                left: "70%"
            }
        },
        "& .profile-image": {
            width: 200,
            height: 200,
            objectFit: "cover",
            maxWidth: "100%",
            borderRadius: "50%"
        },
        "& .profile-details": {
            textAlign: "center",
            "& span, svg": {
                verticalAlign: "middle"
            },
            "& a": {
                color: theme.palette.primary.main
            }
        },
        "& hr": {
            border: "none",
            margin: "0 0 10px 0"
        },
        "& svg.button": {
            "&:hover": {
                cursor: "pointer"
            }
        }
    },
    buttons: {
        textAlign: "center",
        "& a": {
            margin: "20px 10px"
        }
    },
    invisibleSeparator: {
        border: "none",
        margin: 4
    },
    profileImage: {
        maxWidth: 200,
        height: 200,
        borderRadius: "50%",
        objectFit: "cover"
    },
    dialogContent: {
        padding: 20
    },
    closeButton: {
        position: 'absolute',
        left: '90%'
    },
    expandButton: {
        position: 'absolute',
        left: '90%'
    },
    spinnerDiv: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    visibleSeparator: {
        width: "100%",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        marginBottom: 20
    },
    commentImage: {
        maxWidth: "100%",
        height: 100,
        objectFit: "cover",
        borderRadius: "50%"
    },
    commentData: {
        marginLeft: 20
    }
});

class CommentForm extends Component {
    state = {
        body: ""
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    screamId: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    UI: state.UI,
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, { submitComment })(withStyles(styles)(CommentForm));
