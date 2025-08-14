import Container from "./Container.react";

export default function SuccessReservation() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-primary">
        <h1 className="text-3xl font-bold mb-4">Reservation Successful!</h1>
        <p className="text-lg mb-6">
          Thank you for your reservation. We look forward to serving you!
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-primary text-white rounded-full hover:bg-yellow transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </Container>
  );
}
