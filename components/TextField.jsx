import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import grey from '@material-ui/core/colors/grey';


const styles = {
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
      width: 200,
      marginRight: 25
  },
  //style for font size
  resize:{
    // fontSize:15
  },
  }


class Text extends React.Component {

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
    console.log(` text field name` + fieldName)

    return (
      <FormControl className={classes.margin}>
      <TextField
          id="with-placeholder"
          label={fieldName}
          placeholder={fieldName}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.textField}
          margin="normal"
        autoFocus={true}
        helperText={`Enter ` + fieldName}/>
      </FormControl>
    );
  }
}

Text.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Text);