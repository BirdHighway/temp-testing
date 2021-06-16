import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CheckboxWithLabel from './CheckboxWithLabel';

it('it should render unchecked text by default', () => {

  const renderObject = render(
    <CheckboxWithLabel checkedText='on text' notCheckedText='off text' />
  );

  expect(renderObject.queryByLabelText(/off/i)).toBeTruthy();

});

it('it should change the label text when clicked', () => {

  const renderObject = render(
    <CheckboxWithLabel checkedText='on text' notCheckedText='off text' />
  );

  expect(renderObject.queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(renderObject.getByLabelText(/off/i));

  expect(renderObject.queryByLabelText(/on/i)).toBeTruthy();
});
