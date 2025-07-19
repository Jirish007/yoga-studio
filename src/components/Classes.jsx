
import seated from '../assets/seated.webp'
import studio from '../assets/studio.webp'
export default function Classes() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Yoga Classes</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow">
            <img src={seated} className="card-img-top" alt="Hatha Yoga" />
            <div className="card-body">
              <h5 className="card-title">Hatha Yoga</h5>
              <p className="card-text">
                A slower-paced practice focusing on breathing and foundational postures.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow">
            <img src={studio} className="card-img-top" alt="Vinyasa Yoga" />
            <div className="card-body">
              <h5 className="card-title">Vinyasa Flow</h5>
              <p className="card-text">
                A dynamic class linking breath with movement — ideal for building strength and flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
