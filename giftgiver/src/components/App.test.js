import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// The describe() function is used to group together certain sets of tests 
// that have some common setup and tear down for each of them. 
describe('App', () => {
	const app = shallow(<App />);

    // it(name, fn, timeout) method which runs a test
	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});

	it('initialize the `state` wiht an empty list of gifts', () => {
		expect(app.state().gifts).toEqual([]);
	});

	describe('when clicking the `add gift` button', () => {
        const id = 1;

		beforeEach(() => {
			app.find('.btn-add').simulate('click');
		});
		afterEach(() => {
			app.setState({ gifts: [] });
		});

		it('add a new gift to `state`', () => {
			expect(app.state().gifts).toEqual([{ id }]);
		});

		it('adds a new gift to the rendered list', () => {
			expect(app.find('.gift-list').children().length).toEqual(1);
        });
        
        it('create a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove  the added gift', () => {
            beforeEach(() => {
                // by instance() we can have access to the methods in app class
                app.instance().removeGift(id);
            });

            it('remove the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
	});
});

// Shallow rendering is useful to constrain yourself to testing a component as a unit,
// and to ensure that your tests aren't indirectly asserting on behavior of child components.

// snapshots keep a record history of your react component
// and every time a change is made in your app the snapshot update and make sure that previous snapshots
// of components or files or testing files match the new one.
// it is usefull because what if you add behavior and suddenlly change anohter copmonent you didn't in mind renders
