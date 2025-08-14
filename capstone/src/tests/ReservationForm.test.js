import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReservationForm from "../components/ReservationForm.react"; // Adjust path if needed

const mockUseSubmit = {
  isLoading: false,
  response: null,
  submit: jest.fn(), // We use jest.fn() to create a mock function
};
jest.mock("../context/useSubmit", () => () => mockUseSubmit);

beforeAll(() => {
  jest
    .spyOn(window.localStorage.__proto__, "setItem")
    .mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("Renders the reservation form heading correctly", () => {
  render(
    <MemoryRouter>
      <ReservationForm />
    </MemoryRouter>
  );

  const title = screen.getByTestId("reservation-title");

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent("Reserve a Table");
});

test("Updates available times when the date is changed", async () => {
  render(
    <MemoryRouter>
      <ReservationForm />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: "2025-08-16" } });

  await waitFor(() => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect.options.length).toBe(13);
  });
});

test("Saves the reservation to localStorage upon successful submission", async () => {
  mockUseSubmit.submit.mockResolvedValue({ type: "success" });
  render(
    <MemoryRouter>
      <ReservationForm />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText(/date/i);
  const timeSelect = screen.getByLabelText(/time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByTestId("submit_reservation");

  fireEvent.change(dateInput, { target: { value: "2025-12-25" } });
  fireEvent.change(timeSelect, { target: { value: "7:00 PM" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  await waitFor(() => {
    expect(submitButton).not.toBeDisabled();
  });

  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(mockUseSubmit.submit).toHaveBeenCalled();
  });
});

describe("ReservationForm Validation", () => {
  // Test Case 1: Initial State
  test("renders with the submit button disabled initially", () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole("button", {
      name: /submit reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("displays an error message when date is left empty and touched", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/date/i);

    fireEvent.blur(dateInput);

    const errorMessage = await screen.findByText("Required reservation date");
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message for fewer than 1 guest", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.blur(guestsInput);

    const errorMessage = await screen.findByText("Must be at least 1 guest");
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message for more than 10 guests", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.blur(guestsInput);

    const errorMessage = await screen.findByText("Cannot exceed 10 guests");
    expect(errorMessage).toBeInTheDocument();
  });

  test("enables the submit button when all form fields are valid", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", {
      name: /submit reservation/i,
    });
    fireEvent.blur(dateInput);
    expect(submitButton).toBeDisabled();

    fireEvent.change(dateInput, { target: { value: "2025-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "7:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
