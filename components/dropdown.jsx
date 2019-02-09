import React from 'react';
import Select from 'react-select';


   
  class dropdown extends React.Component {

    constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this);
      // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = (selectedOption) => {
    //   // this.setState({ selectedOption });
    //   console.log(`Option selected:`, selectedOption);
    // }

    onClick ()  {
      console.log('hi');
    }

    render() {
      // const { selectedOption } = this.state;
      const values = [
        { value: 'CA', label: 'Chocolate' },
        { value: 'NY', label: 'Strawberry' },
        { value: 'WS', label: 'Vanilla' }
      ];
      return (
        <Select 
        onClick={this.onClick}
        // value={values[1]}
        onChange={this.onClick}
        options={values}
        />
      );
    }
  }

  export default dropdown