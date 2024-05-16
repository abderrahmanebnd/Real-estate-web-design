import Button from "../ui/Button";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-cover bg-center h-96 flex justify-center items-center max-w-6xl mx-auto"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
      }}
    >
      <form>
        <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-wide text-center">
          Subscribe to our <br /> Newsletter
        </h1>
        <div className="bg-red-400 flex mt-3">
          <input
            placeholder="Email Adress"
            className="h-12 px-3 outline-none flex-1"
          />
          <Button>Subscribe</Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
