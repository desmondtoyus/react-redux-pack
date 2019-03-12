
import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
// make sure to import your connected component, not your react class
import ConnectedHome,{Home} from "../../app/views/Home";
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {createStore} from 'redux';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import   {store} from "../../app/store";



describe("ConnectedHome", () => {
	it("Should render component", () => {
		const wrapper = mount(<Provider store={store}>
      <ConnectedHome />
      </Provider>);
		expect(wrapper.length).toEqual(1);
	});
});