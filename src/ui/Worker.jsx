function Worker({ type = "", pic, who }) {
  return (
    <div
      className={`m-auto w-fit max-w-96 px-10 md:py-7  flex  gap-5 ${
        type === "reverse" ? "flex-col-reverse" : "flex-col"
      } md:even:border-x-2 `}
    >
      <img src={`/images/${pic}.png`} alt={pic} className="max-w-full" />
      <div>
        <h2 className="text-xl font-semibold capitalize">{who}</h2>
        <p className="text-customGray mb-4">Real Estate Agent</p>
        <p className="text-customGray text-sm">
          It is a long estblished fac that a reaser will be distracted by the
          readble content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
}

export default Worker;
