import React from "react";

// --- Data for the testimonials ---
// You can easily add or remove testimonials here.
const testimonialData = [
  {
    name: "Sarah L.",
    photoUrl: "https://i.pravatar.cc/150?img=1", // Placeholder image URL
    rating: 5,
    quote:
      "The Greek Salad was fresh and vibrant! The best I've had outside of Greece. Will definitely be back.",
  },
  {
    name: "John D.",
    photoUrl: "https://i.pravatar.cc/150?img=2", // Placeholder image URL
    rating: 4,
    quote:
      "A fantastic atmosphere and the Bruschetta was a perfect starter. A bit noisy on a Friday night, but the food made up for it.",
  },
  {
    name: "Emily R.",
    photoUrl: "https://i.pravatar.cc/150?img=3", // Placeholder image URL
    rating: 5,
    quote:
      "I dream about the Lemon Dessert! It was the perfect end to a wonderful meal. Service was also top-notch.",
  },
  {
    name: "Mike B.",
    photoUrl: "https://i.pravatar.cc/150?img=4", // Placeholder image URL
    rating: 5,
    quote:
      "A true gem in Chicago. Authentic Mediterranean flavors with a modern flair. Highly recommend for a date night.",
  },
];

// --- Star Rating Sub-component ---
// A helper component to render the star rating visually.
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// --- Main Testimonials Component ---
const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonialData.map((testimonial, index) => (
            <figure
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.photoUrl}
                alt={`Photo of ${testimonial.name}`}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-yellow-400"
              />
              <figcaption className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <StarRating rating={testimonial.rating} />
              </figcaption>
              <blockquote className="mt-4 text-gray-600 italic">
                <p>"{testimonial.quote}"</p>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
