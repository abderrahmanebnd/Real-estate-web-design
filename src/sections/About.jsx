import Button from "../ui/Button";
import Worker from "../ui/Worker";

function About() {
  return (
    <section id="about" className="max-w-6xl m-auto px-14 py-10">
      <h2 className="font-semibold md:text-5xl text-4xl mb-3 md:mb-5">
        Our Agent
      </h2>
      <p className="text-customGray md:text-lg">
        Discover the power of peaky, Unveiling How Peaky Can Simplify and
        Enhance Your Experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 mt-6">
        <Worker pic="emp1" who="Abderrahmane bnd" />
        <Worker type="reverse" pic="emp2" who="mehdi di" />
        <Worker pic="emp3" who="Adem bnd" />
      </div>
    </section>
  );
}

export default About;
