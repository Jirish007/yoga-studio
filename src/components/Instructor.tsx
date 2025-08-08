
import instructor from '../assets/instructor.webp'
const Instructor:React.FC=() =>{
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={instructor} alt="Instructor" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>Your Guide: Maya Patel</h2>
          <p>
            With over a decade of experience, Maya brings deep understanding and grace to every class.
            Her calm presence and adaptive style make yoga approachable for all levels.
          </p>
          <ul className="list-unstyled">
            <li><i className="bi bi-star-fill text-warning me-2"></i> Certified in Hatha & Ashtanga Yoga</li>
            <li><i className="bi bi-star-fill text-warning me-2"></i> Mindfulness & Meditation Coach</li>
            <li><i className="bi bi-star-fill text-warning me-2"></i> Fluent in Sanskrit, Hindi, and English</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Instructor;