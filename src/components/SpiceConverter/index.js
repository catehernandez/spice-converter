import React from 'react';
import Select from 'react-select';
import customSelectStyles from 'shared/CustomSelectStyles';

import { Spices, WholeUnits, ConversionRatios } from './SpiceConfig';
import { NumericalInput } from 'shared/StyledInput';
import EqualSign from 'shared/EqualSign';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: '',
      conversionRatio: 0,
      wholeUnits: 0,
      groundUnits: 0,
    };
  }

  selectSpice = (selectedOption) => {
    let { value } = selectedOption;

    this.setState({
      selectedSpice: value,
      conversionRatio: ConversionRatios[value],
      groundUnits: this.state.wholeUnits / ConversionRatios[value],
    });
  };

  convertToGround = (event) => {
    let value = event.target.value;

    this.setState({
      wholeUnits: value,
      groundUnits: value / this.state.conversionRatio,
    });
  };

  convertToWhole = (event) => {
    let value = event.target.value;

    this.setState({
      groundUnits: value,
      wholeUnits: value * this.state.conversionRatio,
    });
  };

  render() {
    const options = Spices.map((spice) => ({
      value: `${spice}`,
      label: `${WholeUnits[spice]}`,
    }));

    return (
      <React.Fragment>
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToGround}
            value={this.state.wholeUnits}
            step="0.25"
          />
          <br />
          <Select
            styles={customSelectStyles}
            onChange={this.selectSpice}
            options={options}
          ></Select>
        </div>
        <EqualSign />
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToWhole}
            value={this.state.groundUnits}
            step="0.25"
          />
        </div>
        <div>tsp ground {this.state.selectedSpice}</div>
      </React.Fragment>
    );
  }
}

export default App;
