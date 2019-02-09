import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    color: grey[50],
    '&$cssFocused': {
      color: grey[50],
    },
  },
  cssFocused: {},
  notchedOutline: {},
  cssUnderline: {
    color: grey[50],
    borderColor: grey[50],
    '&:after': {
      borderBottomColor: grey[50],
    },
  },
  cssOutlinedInput: {
    color: grey[50],
    '&$cssFocused $notchedOutline': {
      color: grey[50],
    },
  },
});


class TextFields extends React.Component {

  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, fieldName } = this.props;

    return (
      <FormControl className={classes.margin}>
        <TextField
            className={classes.margin}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            label={fieldName}
            variant="outlined"
            id="custom-css-outlined-input"
      />
      </FormControl>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);