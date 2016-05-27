import { expect } from 'chai';
import React from 'react';
import Deploy from './Deploy.js';
import { mount, shallow } from 'enzyme';


describe.only('Deploy button', () => {

  describe('for staging', () => {
    const wrapper = shallow(<Deploy environment="staging" />);

    it('Renders a button labeled staging', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1);

      const buttonContent = button.node.props.children;
      expect(buttonContent.search("staging")).not.to.equal(-1)
    });
  })

  describe('for live', () => {
    const wrapper = shallow(<Deploy environment="live" />);

    it('Renders a button labeled live', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1);

      const buttonContent = button.node.props.children;
      expect(buttonContent.search("live")).not.to.equal(-1)
    });
  })

});
