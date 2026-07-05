import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {

  const testimonials = [

    {
      name: "Rahul Sharma",
      role: "Project Manager",
      image: "/clients/client1.jpg",
      review:
        "Professional, dedicated and highly skilled civil engineer. The project was completed on time with excellent quality.",
    },

    {
      name: "Amit Kumar",
      role: "Construction Contractor",
      image: "/clients/client2.jpg",
      review:
        "Very good knowledge of structural planning and site management. Highly recommended for construction projects.",
    },

    {
      name: "Priya Singh",
      role: "Architect",
      image: "/clients/client3.jpg",
      review:
        "Excellent communication and technical expertise. Working together made the project smooth and successful.",
    },

  ];

  return (
    <section className="testimonials" id="testimonials">

      <div className="section-title">

        <span className="section-tag">
          TESTIMONIALS
        </span>

        <h2>
          What Clients Say
        </h2>

        <p>
          Feedback from clients and professionals who have worked with me.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (

          <div
            className="testimonial-card"
            key={index}
          >

            <FaQuoteLeft className="quote-icon" />

            <p className="review">
              {item.review}
            </p>

            <div className="stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;