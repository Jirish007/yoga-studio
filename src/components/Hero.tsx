
import serene from '../assets/serene.webp'
const Hero:React.FC=() =>{
  return (
    <section
      className="text-white text-center py-5"
      style={{
        backgroundImage: `url(${serene})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <h1 className="display-4 fw-bold">Find Your Inner Peace</h1>
        <p className="lead">Join our studio and start your journey today</p>
        <a href="#contact" className="btn btn-light btn-lg mt-3">
          Book a Class
        </a>
      </div>
    </section>
  );
}
export default Hero;