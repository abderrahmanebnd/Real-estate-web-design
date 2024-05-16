import Button from "../ui/Button";

function FirstPartHomePage() {
  return (
    <main className="relative">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('../public/images/background.png')`,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="leading-8 bg-opacity-75 p-10 rounded shadow-lg">
            <h2 className="text-5xl font-bold text-center text-white">
              Discover Your Most Comfortable Place for Your Future Life
            </h2>
            <p className="text-center text-slate-200 mt-2 text-lg">
              Search for Homes to Buy or Rent and Compare House prices.
            </p>
            <div className="mt-10">
              <div className="bg-white w-full md:w-1/3 rounded-t-xl grid grid-cols-3 overflow-hidden ">
                <button className="px-5 py-7 hover:bg-gray-100">Buy</button>
                <button className=" border-x px-5 py-7 hover:bg-gray-100">
                  Sell
                </button>
                <button className="px-5 py-7 hover:bg-gray-100">Rent</button>
              </div>
              <form className="rounded-xl rounded-t-none rounded-tl-none grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center bg-white px-10 py-10">
                <div>
                  <label className="block text-gray-700">Location</label>
                  <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm">
                    <option>Lisbon, Portugal</option>
                    <option>Paris, France</option>
                    <option>New York, USA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Type</label>
                  <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm">
                    <option>Minimalist</option>
                    <option>Modern</option>
                    <option>Classic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Price</label>
                  <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm">
                    <option>10,000 - 12,000</option>
                    <option>12,000 - 15,000</option>
                    <option>15,000 - 20,000</option>
                  </select>
                </div>
                <div className="lg:mt-9 mt-4 text-center">
                  <Button>Search Properties</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FirstPartHomePage;
