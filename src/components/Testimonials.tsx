const Testimonials:React.FC=() =>{
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <blockquote className="blockquote">
              <p>"The classes are so calming. Maya has completely changed how I view yoga."</p>
              <footer className="blockquote-footer">Lindi M.</footer>
            </blockquote>
          </div>
          <div className="col-md-6 mb-4">
            <blockquote className="blockquote">
              <p>"I used to feel stiff and anxious. Now I feel energized every morning!"</p>
              <footer className="blockquote-footer">David R.</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;