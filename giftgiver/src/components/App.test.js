import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initialize the `state` wiht an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` when clicking the `add gift`button', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{id: 1}]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    
    expect(app.find('.gift-list').children().length).toEqual(2);
});


// Shallow rendering is useful to constrain yourself to testing a component as a unit, 
// and to ensure that your tests aren't indirectly asserting on behavior of child components.

// snapshots keep a record history of your react component
// and every time a change is made in your app the snapshot update and make sure that previous snapshots 
// of components or files or testing files match the new one.
// it is usefull because what if you add behavior and suddenlly change anohter copmonent you didn't in mind renders