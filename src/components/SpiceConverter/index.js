import React from 'react';
import Select from 'react-select';
import customSelectStyles from 'shared/CustomSelectStyles';

import { Spices, WholeUnits, ConversionRatios } from './SpiceConfig';
import { roundToPrecision } from './utils';

// Styles
import NumericalInput from 'shared/NumericalInput';
import { SpiceConverterContainer, EqualWrapper } from './style';

class SpiceConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: '',
      conversionRatio: 0,
      wholeAmount: 0,
      groundAmount: 0,
    };
  }

  selectSpice = (selectedOption) => {
    const selectedSpice = selectedOption.value;
    const conversionRatio = ConversionRatios[selectedSpice];

    let groundAmount = this.state.wholeAmount / conversionRatio;
    groundAmount = roundToPrecision(groundAmount, 0.25);

    this.setState({ selectedSpice, conversionRatio, groundAmount });
  };

  convertToGround = (event) => {
    const wholeAmount = event.target.value;

    let groundAmount = wholeAmount / this.state.conversionRatio;
    groundAmount = roundToPrecision(groundAmount, 0.25);

    this.setState({ wholeAmount, groundAmount });
  };

  convertToWhole = (event) => {
    const groundAmount = event.target.value;

    let wholeAmount = groundAmount * this.state.conversionRatio;
    wholeAmount = roundToPrecision(wholeAmount, 0.25);

    this.setState({ groundAmount, wholeAmount });
  };

  render() {
    const options = Spices.map((spice) => ({
      value: `${spice}`,
      label: `${WholeUnits[spice]}`,
    }));

    return (
      <SpiceConverterContainer className="spice-converter">
        <NumericalInput
          className="whole-input"
          disabled={this.state.selectedSpice === '' ? true : false}
          type="number"
          onChange={this.convertToGround}
          value={this.state.wholeAmount}
          step="0.25"
        />
        <br />
        <Select
          className="spice-selector"
          styles={customSelectStyles}
          onChange={this.selectSpice}
          options={options}
        ></Select>
        <EqualWrapper>=</EqualWrapper>
        <NumericalInput
          className="ground-input"
          disabled={this.state.selectedSpice === '' ? true : false}
          type="number"
          onChange={this.convertToWhole}
          value={this.state.groundAmount}
          step="0.25"
        />
        <div>tsp ground {this.state.selectedSpice}</div>
      </SpiceConverterContainer>
    );
  }
}

export default SpiceConverter;
