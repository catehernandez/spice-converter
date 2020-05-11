import React from 'react';
import { shallow } from 'enzyme';

import SpiceConverter from './index';
/**
 * Setup is a factory function to create ShallowWrapper for the
 * SpiceConverter component
 * @function setup
 * @param { Object } props - component props specific to this setup
 * @param { Object} state - Initial state for setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<SpiceConverter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given className
 * @param { ShallowWrapper } wrapper - Enzyme ShallowWrapper to search within
 * @param { string } selector - className for search
 * @returns {ShallowWrapper}
 */
const findBySelector = (wrapper, selector) => {
  return wrapper.find(`${selector}`);
};

/*--- Smoke tests ---*/
test('renders without error', () => {
  const wrapper = setup();
  const spiceConverter = findBySelector(wrapper, '.spice-converter');
  expect(spiceConverter.length).toBe(1);
});

test('renders whole input', () => {
  const wrapper = setup();
  const wholeInput = findBySelector(wrapper, '.whole-input');
  expect(wholeInput.length).toBe(1);
});

test('renders ground input', () => {
  const wrapper = setup();
  const groundInput = findBySelector(wrapper, '.ground-input');
  expect(groundInput.length).toBe(1);
});

test('renders spice selector', () => {
  const wrapper = setup();
  const spiceSelector = findBySelector(wrapper, '.spice-selector');
  expect(spiceSelector).toHaveLength(1);
});

/*--- Testing initial state ---*/
test('initialize with no spice detected', () => {
  const wrapper = setup();
  const initialSpiceState = wrapper.state('selectedSpice');
  expect(initialSpiceState).toBe('');
});

test('initial whole amount is 0', () => {
  const wrapper = setup();
  const initialWholeAmount = wrapper.state('wholeAmount');
  expect(initialWholeAmount).toBe(0);
});
