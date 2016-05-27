import { expect } from 'chai';
import React from 'react';
import Deploy from './Deploy.js';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

describe.only('Deploy button', () => {

  beforeEach(() => {
    fetchMock.mock('/staging', 200)
  });

  afterEach(() => {
    fetchMock.restore
  });

  describe('for staging', () => {

    it('Renders a button labeled staging', () => {
      const wrapper = shallow(<Deploy environment="staging" />);
      const button = wrapper.find('button')
      expect(button).to.have.length(1);
      expect(wrapper.text()).to.contain("staging");
    });

    it.only('calls /staging when clicked', () => {

      const wrapper = shallow(
        <Deploy />
      );
      wrapper.find('button').simulate('click');

      expect(fetchMock.called('/staging')).to.be.true;
      expect(fetchMock.lastOptions('/staging').method).to.eq('POST');
      // expect(fetchMock.lastOptions('/staging').body).to.eq(content);
    })
  })

  describe('for live', () => {
    const wrapper = shallow(<Deploy environment="live" />);

    it('Renders a button labeled live', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1);
      expect(wrapper.text()).to.contain("live");
    });
  })

});
