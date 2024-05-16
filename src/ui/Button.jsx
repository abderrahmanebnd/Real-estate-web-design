/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="bg-primaryColor text-white px-5 whitespace-nowrap py-2 hover:bg-white hover:text-primaryColor border border-primaryColor transition-all duration-300  font-semibold tracking-wider text-sm  ">
      {children}
    </button>
  );
}

export default Button;
