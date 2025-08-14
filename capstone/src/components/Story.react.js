import restaurantImage1 from "../assets/Mario and Adrian A.jpg";
import restaurantImage2 from "../assets/Mario and Adrian b.jpg";

export default function Story() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl text-primary">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2010 by two brothers with a passion for Mediterranean
              cuisine, Little Lemon started as a small food truck. Our goal was
              simple: serve authentic, high-quality recipes with a modern twist.
              Thanks to our wonderful customers, we were able to open our first
              brick-and-mortar location in the heart of Chicago.
            </p>
            <p className="text-lg text-gray-600">
              We believe in fresh ingredients, family recipes, and creating a
              warm, inviting atmosphere for everyone who walks through our
              doors.
            </p>
          </div>
          <div>
            <img
              src={restaurantImage1}
              alt="Little Lemon Chefs"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
