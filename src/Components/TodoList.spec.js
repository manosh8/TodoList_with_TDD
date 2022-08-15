import React from 'react';
import {shallow} from 'enzyme';
import { render } from '@testing-library/react'
import TodoList from './TodoList'


describe('Basic rendering of TodoList',() => {
it("Should have a list element",() => {
 const {getByTestId} = shallow(<TodoList />);
 expect(getByTestId('input-list')).toBeDefined();
  })
})

