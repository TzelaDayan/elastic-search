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
    stateName: '',
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
            value={this.state.stateName}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name={"stateName"}
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem statename={'Alabama'} value={'AL'}>Alabama</MenuItem>
            <MenuItem statename={'Alabama'} value={'AL'}>Alabama</MenuItem>
            <MenuItem statename={'Alaska'} value={'AK'}>Alaska</MenuItem>
            <MenuItem statename={'Arizona'} value={'AZ'}>Arizona</MenuItem>
            <MenuItem statename={'Arkansas'} value={'AR'}>Arkansas</MenuItem>
            <MenuItem statename={'California'} value={'CA'}>California</MenuItem>
            <MenuItem statename={'Colorado'} value={'CO'}>Colorado</MenuItem>            
            <MenuItem statename={'Connecticut'} value={'CT'}>Connecticut</MenuItem>
            <MenuItem statename={'Delaware'} value={'DE'}>Delaware</MenuItem>
            <MenuItem statename={'Florida'} value={'FL'}>Florida</MenuItem>           
            <MenuItem statename={'Georgia'} value={'GA'}>Georgia</MenuItem>
            <MenuItem statename={'Hawaii'} value={'HI'}>Hawaii</MenuItem>
            <MenuItem statename={'Idaho'} value={'ID'}>Idaho</MenuItem>            
            <MenuItem statename={'Illinois'} value={'IL'}>Illinois</MenuItem>
            <MenuItem statename={'Indiana'} value={'IN'}>Indiana</MenuItem>
            <MenuItem statename={'Iowa'} value={'IA'}>Iowa</MenuItem>
            <MenuItem statename={'Kansas'} value={'KS'}>Kansas</MenuItem>
            <MenuItem statename={'Kentucky'} value={'KY'}>Kentucky</MenuItem>
            <MenuItem statename={'Louisiana'} value={'LA'}>Louisiana</MenuItem>
            <MenuItem statename={'Maine'} value={'ME'}>Maine</MenuItem>
            <MenuItem statename={'Maryland'} value={'MD'}>Maryland</MenuItem>
            <MenuItem statename={'Massachusetts'} value={'MA'}>Massachusetts</MenuItem>            
            <MenuItem statename={'Michiganen'} value={'MI'}>Michiganen</MenuItem>
            <MenuItem statename={'Minnesota'} value={'MN'}>Minnesota</MenuItem>
            <MenuItem statename={'Mississippi'} value={'MS'}>Mississippi</MenuItem>           
            <MenuItem statename={'Missouri'} value={'MO'}>Missouri</MenuItem>
            <MenuItem statename={'Montana'} value={'MT'}>Montana</MenuItem>
            <MenuItem statename={'Nebraska'} value={'NE'}>Nebraska</MenuItem>
            <MenuItem statename={'Nevada'} value={'NV'}>Nevada</MenuItem>            
            <MenuItem statename={'New Hampshire'} value={'NH'}>New Hampshire</MenuItem>
            <MenuItem statename={'New Jersey'} value={'NJ'}>New Jersey</MenuItem>
            <MenuItem statename={'New Mexico'} value={'NM'}>New Mexico</MenuItem>
            <MenuItem statename={'New'} value={'NY'}>New York</MenuItem>
            <MenuItem statename={'North Carolina'} value={'NC'}>North Carolina</MenuItem>
            <MenuItem statename={'North Dakota'} value={'ND'}>North Dakota</MenuItem>
            <MenuItem statename={'Ohio'} value={'OH'}>Ohio</MenuItem>
            <MenuItem statename={'Oklahoma'} value={'OK'}>Oklahoma</MenuItem>
            <MenuItem statename={'Oregon'} value={'OR'}>Oregon</MenuItem>            
            <MenuItem statename={'Pennsylvania'} value={'PA'}>Pennsylvania</MenuItem>
            <MenuItem statename={'Rhode'} value={'RI'}>Rhode Island</MenuItem>          
            <MenuItem statename={'South Carolina'} value={'SC'}>South Carolina</MenuItem>
            <MenuItem statename={'South Dakota'} value={'SD'}>South Dakota</MenuItem>
            <MenuItem statename={'Tennessee'} value={'TN'}>Tennessee</MenuItem>            
            <MenuItem statename={'Texas'} value={'TX'}>Texas</MenuItem>
            <MenuItem statename={'Vermont'} value={'VT'}>Vermont</MenuItem>
            <MenuItem statename={'Utah'} value={'UT'}>Utah</MenuItem>
            <MenuItem statename={'Virginia'} value={'VA'}>Virginia</MenuItem>
            <MenuItem statename={'Washington'} value={'WA'}>Washington</MenuItem>
            <MenuItem statename={'West'} value={'WV'}>West Virginia</MenuItem>
            <MenuItem statename={'Wisconsin'} value={'WI'}>Wisconsin</MenuItem>
            <MenuItem statename={'Wyoming'} value={'WY'}>Wyoming</MenuItem>
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
