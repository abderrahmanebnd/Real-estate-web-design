function ThirdPartHomePage() {
  return (
    <section
      className="my-10 bg-white bg-cover bg-center h-96 max-w-6xl m-auto relative"
      style={{
        backgroundImage: `url('../public/images/bg2.png')`,
      }}
    >
      <div className="bg-white w-96 px-5 py-10 absolute bottom-0 top-20 right-10 rounded-t-2xl ">
        <h2 className="font-semibold text-4xl mb-5">
          Find a home just right for you
        </h2>
        <p className="text-customGray mb-2">
          Discover the power of Divine,Unveiling How divine Can Simplify and
          Enhance Your Experience.
        </p>
        <span className="underline text-primaryColor cursor-pointer underline-offset-4">
          Explore All Property
        </span>
      </div>
    </section>
  );
}

export default ThirdPartHomePage;
