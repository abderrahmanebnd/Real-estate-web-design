import Button from "../ui/Button";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold">Divine Home</h1>
          <ul className="flex flex-grow justify-end mr-auto gap-5 items-center">
            <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
              <a href="#properties">properties</a>
            </li>
            <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
              <a href="#about">about</a>
            </li>

            <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
              <a href="#contact">contact</a>
            </li>
            <li className="ml-5 space-x-5 flex ">
              <button>Login</button>
              <Button type="primary">Sign Up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    //  <header className="py-8 px-10">
    //    <nav className="flex items-center">
    //      <h1 className="font-semibold text-xl">Divine Home</h1>
    // <ul className="flex flex-grow justify-end mr-auto gap-5 items-center">
    //   <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
    //     Home
    //   </li>
    //   <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
    //     properties
    //   </li>
    //   <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
    //     about
    //   </li>
    //   <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
    //     blog
    //   </li>
    //   <li className="text-customGray capitalize text-lg hover:text-black cursor-pointer duration-300 transition-colors">
    //     contact
    //   </li>
    //   <li className="ml-5 space-x-5 flex ">
    //     <button>Login</button>
    //     <Button type="primary">Sign Up</Button>
    //   </li>
    // </ul>
    //    </nav>
    //  </header>
  );
}

export default Header;
