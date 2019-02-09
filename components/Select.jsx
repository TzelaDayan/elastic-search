import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  cssOutlinedInput: {
    color: grey[50],
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, fieldName } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            {fieldName}
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={'AL'}>Alabama</MenuItem>
            <MenuItem value={'AK'}>Alaska</MenuItem>
            <MenuItem value={'AZ'}>Arizona</MenuItem>
            <MenuItem value={'AR'}>Arkansas</MenuItem>
            <MenuItem value={'CA'}>California</MenuItem>
            <MenuItem value={'CO'}>Colorado</MenuItem>            
            <MenuItem value={'CT'}>Connecticut</MenuItem>
            <MenuItem value={'DE'}>Delaware</MenuItem>
            <MenuItem value={'FL'}>Florida</MenuItem>           
            <MenuItem value={'GA'}>Georgia</MenuItem>
            <MenuItem value={'HI'}>Hawaii</MenuItem>
            <MenuItem value={'ID'}>Idaho</MenuItem>            
            <MenuItem value={'IL'}>Illinois</MenuItem>
            <MenuItem value={'IN'}>Indiana</MenuItem>
            <MenuItem value={'IA'}>Iowa</MenuItem>
            <MenuItem value={'KS'}>Kansas</MenuItem>
            <MenuItem value={'KY'}>Kentucky</MenuItem>
            <MenuItem value={'LA'}>Louisiana</MenuItem>
            <MenuItem value={'ME'}>Maine</MenuItem>
            <MenuItem value={'MD'}>Maryland</MenuItem>
            <MenuItem value={'MA'}>Massachusetts</MenuItem>            
            <MenuItem value={'MI'}>Michiganen</MenuItem>
            <MenuItem value={'MN'}>Minnesota</MenuItem>
            <MenuItem value={'MS'}>Mississippi</MenuItem>           
            <MenuItem value={'MO'}>Missouri</MenuItem>
            <MenuItem value={'MT'}>Montana</MenuItem>
            <MenuItem value={'NE'}>Nebraska</MenuItem>
            <MenuItem value={'NV'}>Nevada</MenuItem>            
            <MenuItem value={'NH'}>New Hampshire</MenuItem>
            <MenuItem value={'NJ'}>New Jersey</MenuItem>
            <MenuItem value={'NM'}>New Mexico</MenuItem>
            <MenuItem value={'NY'}>New York</MenuItem>
            <MenuItem value={'NC'}>North Carolina</MenuItem>
            <MenuItem value={'ND'}>North Dakota</MenuItem>
            <MenuItem value={'OH'}>Ohio</MenuItem>
            <MenuItem value={'OK'}>Oklahoma</MenuItem>
            <MenuItem value={'OR'}>Oregon</MenuItem>            
            <MenuItem value={'PA'}>Pennsylvania</MenuItem>
            <MenuItem value={'RI'}>Rhode Island</MenuItem>          
            <MenuItem value={'SC'}>South Carolina</MenuItem>
            <MenuItem value={'SD'}>South Dakota</MenuItem>
            <MenuItem value={'TN'}>Tennessee</MenuItem>            
            <MenuItem value={'TX'}>Texas</MenuItem>
            <MenuItem value={'VT'}>Vermont</MenuItem>
            <MenuItem value={'UT'}>Utah</MenuItem>
            <MenuItem value={'VA'}>Virginia</MenuItem>
            <MenuItem value={'WA'}>Washington</MenuItem>
            <MenuItem value={'WV'}>West Virginia</MenuItem>
            <MenuItem value={'WI'}>Wisconsin</MenuItem>
            <MenuItem value={'WY'}>Wyoming</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
