import * as ReactDom from 'react-dom'
import {render, fireEvent, getByPlaceholderText} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import App from './App';

test('ToDo', () => {
  const {getByText,getByLableText} = render(<App/>);

  //after rendering our component use DOM APIs (query selector) to make assertions
  //This checks that "TODO is on the page in an h1 tag"
  //expect(root.querySelector('h1').textContent).toBe('TODO'); <-- Old Way
  //expect(getByText('TODO')).not.toBeNull(); <-- Old Way
  getByText('TODO'); //this is equivilent to the above text just less explicit. 
});

test('Add Items to List', () => {
  const {getByText,getByLableText} = render(<App/>);
  const input = getByPlaceholderText('Add Todo...'); //points at form so we can input something into it <-- Some problem here, too tired to fix
  fireEvent.change(input,{target:{value:'wash car'}}); // changes value in form
  fireEvent.submit(input); // submits form

  //now confirm test worked
  getByText('Add Todo...') // just prove it exists. Not that it has been created, the text in no longer placeholder
  //this proabbly doesn't work
});

test("new event that is better for reading", () => {
  const {getByText,getByLableText} = render(<App/>);
  const input = getByPlaceholderText('Add Todo...'); // this still proably still doesn't work

  userEvent.type (input,"new todo I am typing"); // simulates typing into the field with the text there
})