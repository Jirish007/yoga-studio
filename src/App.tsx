import React, { Suspense } from "react";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Instructor from "./components/Instructor";
const Testimonials = React.lazy(() => import("./components/Testimonials"));
import Contact from "./components/Contact";

const App:React.FC = ()=>{
  return (
    <>
      <Hero />
      <Classes />
      <Instructor />
      <Suspense fallback={<div className="text-center my-4">Loading testimonials…</div>}>
        <Testimonials />
      </Suspense>
      <Contact />
    </>
  );
}
export default App;