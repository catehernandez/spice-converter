import React from 'react';
import Select from 'react-select';
import customSelectStyles from 'shared/CustomSelectStyles';

import { Spices, WholeUnits, ConversionRatios } from './SpiceConfig';
import { roundToPrecision } from './utils';

// Styles
import { NumericalInput } from 'shared/StyledInput';
import EqualSign from './EqualSign';
import Container from './Container';

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
      <Container className="spice-converter-container">
        <NumericalInput
          disabled={this.state.selectedSpice === '' ? true : false}
          type="number"
          onChange={this.convertToGround}
          value={this.state.wholeAmount}
          step="0.25"
        />
        <br />
        <Select
          styles={customSelectStyles}
          onChange={this.selectSpice}
          options={options}
        ></Select>
        <EqualSign />
        <NumericalInput
          disabled={this.state.selectedSpice === '' ? true : false}
          type="number"
          onChange={this.convertToWhole}
          value={this.state.groundAmount}
          step="0.25"
        />
        <div>tsp ground {this.state.selectedSpice}</div>
      </Container>
    );
  }
}

export default SpiceConverter;
