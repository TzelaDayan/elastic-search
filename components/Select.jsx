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
    this.props.onStateSelected({ [event.target.name]: event.target.value });
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
            value={this.state.name}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name={"state"}
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem stateName={'Alabama'} value={'AL'}>Alabama</MenuItem>
            <MenuItem stateName={'Alabama'} value={'AL'}>Alabama</MenuItem>
            <MenuItem stateName={'Alaska'} value={'AK'}>Alaska</MenuItem>
            <MenuItem stateName={'Arizona'} value={'AZ'}>Arizona</MenuItem>
            <MenuItem stateName={'Arkansas'} value={'AR'}>Arkansas</MenuItem>
            <MenuItem stateName={'California'} value={'CA'}>California</MenuItem>
            <MenuItem stateName={'Colorado'} value={'CO'}>Colorado</MenuItem>            
            <MenuItem stateName={'Connecticut'} value={'CT'}>Connecticut</MenuItem>
            <MenuItem stateName={'Delaware'} value={'DE'}>Delaware</MenuItem>
            <MenuItem stateName={'Florida'} value={'FL'}>Florida</MenuItem>           
            <MenuItem stateName={'Georgia'} value={'GA'}>Georgia</MenuItem>
            <MenuItem stateName={'Hawaii'} value={'HI'}>Hawaii</MenuItem>
            <MenuItem stateName={'Idaho'} value={'ID'}>Idaho</MenuItem>            
            <MenuItem stateName={'Illinois'} value={'IL'}>Illinois</MenuItem>
            <MenuItem stateName={'Indiana'} value={'IN'}>Indiana</MenuItem>
            <MenuItem stateName={'Iowa'} value={'IA'}>Iowa</MenuItem>
            <MenuItem stateName={'Kansas'} value={'KS'}>Kansas</MenuItem>
            <MenuItem stateName={'Kentucky'} value={'KY'}>Kentucky</MenuItem>
            <MenuItem stateName={'Louisiana'} value={'LA'}>Louisiana</MenuItem>
            <MenuItem stateName={'Maine'} value={'ME'}>Maine</MenuItem>
            <MenuItem stateName={'Maryland'} value={'MD'}>Maryland</MenuItem>
            <MenuItem stateName={'Massachusetts'} value={'MA'}>Massachusetts</MenuItem>            
            <MenuItem stateName={'Michiganen'} value={'MI'}>Michiganen</MenuItem>
            <MenuItem stateName={'Minnesota'} value={'MN'}>Minnesota</MenuItem>
            <MenuItem stateName={'Mississippi'} value={'MS'}>Mississippi</MenuItem>           
            <MenuItem stateName={'Missouri'} value={'MO'}>Missouri</MenuItem>
            <MenuItem stateName={'Montana'} value={'MT'}>Montana</MenuItem>
            <MenuItem stateName={'Nebraska'} value={'NE'}>Nebraska</MenuItem>
            <MenuItem stateName={'Nevada'} value={'NV'}>Nevada</MenuItem>            
            <MenuItem stateName={'New Hampshire'} value={'NH'}>New Hampshire</MenuItem>
            <MenuItem stateName={'New Jersey'} value={'NJ'}>New Jersey</MenuItem>
            <MenuItem stateName={'New Mexico'} value={'NM'}>New Mexico</MenuItem>
            <MenuItem stateName={'New'} value={'NY'}>New York</MenuItem>
            <MenuItem stateName={'North Carolina'} value={'NC'}>North Carolina</MenuItem>
            <MenuItem stateName={'North Dakota'} value={'ND'}>North Dakota</MenuItem>
            <MenuItem stateName={'Ohio'} value={'OH'}>Ohio</MenuItem>
            <MenuItem stateName={'Oklahoma'} value={'OK'}>Oklahoma</MenuItem>
            <MenuItem stateName={'Oregon'} value={'OR'}>Oregon</MenuItem>            
            <MenuItem stateName={'Pennsylvania'} value={'PA'}>Pennsylvania</MenuItem>
            <MenuItem stateName={'Rhode'} value={'RI'}>Rhode Island</MenuItem>          
            <MenuItem stateName={'South Carolina'} value={'SC'}>South Carolina</MenuItem>
            <MenuItem stateName={'South Dakota'} value={'SD'}>South Dakota</MenuItem>
            <MenuItem stateName={'Tennessee'} value={'TN'}>Tennessee</MenuItem>            
            <MenuItem stateName={'Texas'} value={'TX'}>Texas</MenuItem>
            <MenuItem stateName={'Vermont'} value={'VT'}>Vermont</MenuItem>
            <MenuItem stateName={'Utah'} value={'UT'}>Utah</MenuItem>
            <MenuItem stateName={'Virginia'} value={'VA'}>Virginia</MenuItem>
            <MenuItem stateName={'Washington'} value={'WA'}>Washington</MenuItem>
            <MenuItem stateName={'West'} value={'WV'}>West Virginia</MenuItem>
            <MenuItem stateName={'Wisconsin'} value={'WI'}>Wisconsin</MenuItem>
            <MenuItem stateName={'Wyoming'} value={'WY'}>Wyoming</MenuItem>
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
