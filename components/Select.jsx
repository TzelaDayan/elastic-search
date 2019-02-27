import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
});

class NativeSelects extends React.Component {
  state = {
  };

  handleChange = name => event => {
    this.props.onStateSelected({ [event.target.name]: event.target.value });
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, fieldName } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-us-states">{fieldName}</InputLabel>
          <Select
            native
            value={this.state.sataeName}
            onChange={this.handleChange('sataeName')}
            inputProps={{
              name: 'sataeName',
              id: 'select-us-states',
            }}
          >
            <option value="" />
            <option statename={'Alabama'} value={'AL'}>Alabama</option>
            <option statename={'Alabama'} value={'AL'}>Alabama</option>
            <option statename={'Alaska'} value={'AK'}>Alaska</option>
            <option statename={'Arizona'} value={'AZ'}>Arizona</option>
            <option statename={'Arkansas'} value={'AR'}>Arkansas</option>
            <option statename={'California'} value={'CA'}>California</option>
            <option statename={'Colorado'} value={'CO'}>Colorado</option>            
            <option statename={'Connecticut'} value={'CT'}>Connecticut</option>
            <option statename={'Delaware'} value={'DE'}>Delaware</option>
            <option statename={'Florida'} value={'FL'}>Florida</option>           
            <option statename={'Georgia'} value={'GA'}>Georgia</option>
            <option statename={'Hawaii'} value={'HI'}>Hawaii</option>
            <option statename={'Idaho'} value={'ID'}>Idaho</option>            
            <option statename={'Illinois'} value={'IL'}>Illinois</option>
            <option statename={'Indiana'} value={'IN'}>Indiana</option>
            <option statename={'Iowa'} value={'IA'}>Iowa</option>
            <option statename={'Kansas'} value={'KS'}>Kansas</option>
            <option statename={'Kentucky'} value={'KY'}>Kentucky</option>
            <option statename={'Louisiana'} value={'LA'}>Louisiana</option>
            <option statename={'Maine'} value={'ME'}>Maine</option>
            <option statename={'Maryland'} value={'MD'}>Maryland</option>
            <option statename={'Massachusetts'} value={'MA'}>Massachusetts</option>            
            <option statename={'Michiganen'} value={'MI'}>Michiganen</option>
            <option statename={'Minnesota'} value={'MN'}>Minnesota</option>
            <option statename={'Mississippi'} value={'MS'}>Mississippi</option>           
            <option statename={'Missouri'} value={'MO'}>Missouri</option>
            <option statename={'Montana'} value={'MT'}>Montana</option>
            <option statename={'Nebraska'} value={'NE'}>Nebraska</option>
            <option statename={'Nevada'} value={'NV'}>Nevada</option>            
            <option statename={'New Hampshire'} value={'NH'}>New Hampshire</option>
            <option statename={'New Jersey'} value={'NJ'}>New Jersey</option>
            <option statename={'New Mexico'} value={'NM'}>New Mexico</option>
            <option statename={'New'} value={'NY'}>New York</option>
            <option statename={'North Carolina'} value={'NC'}>North Carolina</option>
            <option statename={'North Dakota'} value={'ND'}>North Dakota</option>
            <option statename={'Ohio'} value={'OH'}>Ohio</option>
            <option statename={'Oklahoma'} value={'OK'}>Oklahoma</option>
            <option statename={'Oregon'} value={'OR'}>Oregon</option>            
            <option statename={'Pennsylvania'} value={'PA'}>Pennsylvania</option>
            <option statename={'Rhode'} value={'RI'}>Rhode Island</option>          
            <option statename={'South Carolina'} value={'SC'}>South Carolina</option>
            <option statename={'South Dakota'} value={'SD'}>South Dakota</option>
            <option statename={'Tennessee'} value={'TN'}>Tennessee</option>            
            <option statename={'Texas'} value={'TX'}>Texas</option>
            <option statename={'Vermont'} value={'VT'}>Vermont</option>
            <option statename={'Utah'} value={'UT'}>Utah</option>
            <option statename={'Virginia'} value={'VA'}>Virginia</option>
            <option statename={'Washington'} value={'WA'}>Washington</option>
            <option statename={'West'} value={'WV'}>West Virginia</option>
            <option statename={'Wisconsin'} value={'WI'}>Wisconsin</option>
            <option statename={'Wyoming'} value={'WY'}>Wyoming</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);