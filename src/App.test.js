import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import Main from './Main';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  render(<BookingForm />)
  const headingElement = screen.getByText("Book now")
  expect(headingElement).toBeInTheDocument()
})

test("Validate initializeTimes", () => {
  render(<Main />)
  const expectedvalue = screen.getByText("Book now")
  expect(expectedvalue).toBe()
})

test("Validate updateTimes", () => {
  render(<Main />)
  const stateHeading = screen.getByText("Evening")
  expect(stateHeading).toBeInTheDocument()
})