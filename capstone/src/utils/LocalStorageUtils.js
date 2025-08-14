export function saveReservationToLocalStorage(reservation) {
  try {
    // 1. Get existing reservations from localStorage.
    const existingData = localStorage.getItem("reservations");

    // 2. If there's existing data, parse it. Otherwise, start with an empty array.
    const reservations = existingData ? JSON.parse(existingData) : [];

    // 3. Add the new reservation to the array.
    reservations.push(reservation);

    // 4. Save the updated array back to localStorage as a string.
    localStorage.setItem("reservations", JSON.stringify(reservations));

    console.log("Reservation saved successfully!");
  } catch (error) {
    console.error("Failed to save reservation to localStorage:", error);
  }
}
