import { useFormik } from "formik";
import React, { useEffect, useReducer, useState } from "react";
import * as Yup from "yup";
import useSubmit from "../context/useSubmit";
import { useNavigate } from "react-router-dom";
import { saveReservationToLocalStorage } from "../utils/LocalStorageUtils";

// A list of available reservation times.
const defaultTimes = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];
const reservationTimes = {
  monday: defaultTimes,
  tuesday: defaultTimes,
  wednesday: defaultTimes,
  thursday: defaultTimes,
  friday: defaultTimes,
  saturday: [...defaultTimes, "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"],
  sunday: [...defaultTimes, "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"],
};
const inputClassNames =
  "block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-yellow";

const ErrorBlock = ({ message }) => (
  <span className="text-sm mt-1 text-red-600">{message}</span>
);

const InputLabel = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    {children}
  </label>
);

const ReservationForm = () => {
  const [availableTimes, setAvailableTimes] = useReducer((times, day) => {
    return reservationTimes[day] || defaultTimes;
  }, defaultTimes);
  const initialValues = {
    date: "",
    time: availableTimes[0],
    guests: 1,
    occasion: "None", // Default occasion
  };
  const [formData, setFormData] = useState(initialValues);
  const { submit, isLoading, response } = useSubmit();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await submit(values).then(() => {
        setFormData(values);
      });
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required reservation date"),
      time: Yup.string().required("Required reservation time"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Cannot exceed 10 guests")
        .required("Required number of guests"),
      occasion: Yup.string().oneOf(
        ["None", "Birthday", "Anniversary"],
        "Invalid occasion"
      ),
    }),
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
  });

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const dayOfWeek = selectedDate
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();
    setAvailableTimes(dayOfWeek);
    formik.setFieldValue("date", event.target.value);
  };

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        saveReservationToLocalStorage(formData);
        navigate("/reservation_success");
      }
    }
  }, [response]);

  return (
    <div className="container mx-auto px-4 text-primary item-center">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2
          className="text-3xl font-bold text-center text-gray-800 mb-8 font-markazi"
          data-testid="reservation-title"
        >
          Reserve a Table
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <div className="mb-4">
            <InputLabel htmlFor="date" children="Date" />
            <input
              type="date"
              id="date"
              name="date"
              onChange={(e) => {
                formik.handleChange(e);
                handleDateChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className={inputClassNames}
              aria-required="true"
              aria-invalid={formik.errors.date}
              data-testid="reservation-date"
            />
            {formik.errors.date && <ErrorBlock message={formik.errors.date} />}
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="time" children="Time" />
            <select
              id="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
              className={inputClassNames}
              aria-required="true"
              aria-invalid={formik.errors.time}
              data-testid="reservation-time-slots"
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="guests" children="Number of Guests" />
            <input
              type="number"
              id="guests"
              name="guests"
              onChange={formik.handleChange}
              value={formik.values.guests}
              className={inputClassNames}
              aria-required="true"
              aria-invalid={formik.errors.guests}
            />
            {formik.errors.guests && (
              <ErrorBlock message={formik.errors.guests} />
            )}
          </div>
          <div className="mb-16">
            <InputLabel htmlFor="occasion" children="Occasion" />
            <select
              id="occasion"
              name="occasion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
              className={inputClassNames}
              aria-required="true"
              aria-invalid={formik.errors.occasion}
            >
              <option value="None">None</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              disabled={isLoading || !formik.isValid || !formik.dirty}
              data-testid="submit_reservation"
              className="rounded-full bg-primary text-white py-4 px-8 transition duration-300 disabled:opacity-75"
            >
              Submit reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
