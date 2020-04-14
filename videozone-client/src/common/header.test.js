import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store";
import  Enzyme, { shallow, mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';



import {Header} from "./header";
import {  headerInitialState } from "../test/fakeStore"

Enzyme.configure({ adapter: new Adapter() })


const middlewares = [];
const mockStore = configureStore(middlewares);

let container;
beforeEach(() => {
  container = document.createElement('div');
})

it('Render Header component', () => {  
  const setSearch = jest.fn();
  const resetSearch = jest.fn();
  const search = {
    setSearch,
    resetSearch
  }

  ReactDOM.render(
    <Provider store={mockStore(headerInitialState)}>
      <Header search={ search } videos = {{}}/>
    </Provider>
    , container);

    ReactDOM.unmountComponentAtNode(container);
});


it('It should display Genre title if it given', () => {
  const genre_title="HollyWood";
  const { container } = render(<Header genre_title={genre_title}></Header>)
  expect(container).toHaveTextContent(genre_title)
})

it('It should open search form when click on search icon', () => {
  const contentWrapper = shallow(<Header genre_title="Test"/>)    
  contentWrapper.find("#header-search-toggle").simulate('click')
  jest.useFakeTimers();
  jest.runAllTimers();
  expect(contentWrapper.state().showSearchForm).toEqual(true)


})