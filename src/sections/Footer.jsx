function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-10 my-10 max-w-6xl px-5 mx-auto">
      <div>
        <h3 className="font-semibold text-xl mb-3">Divine Home</h3>
        <p className="text-sm text-customGray leading-6 mb-3">
          We combine technical skills with creativity to improve clients' online
          presence. These agencies typically provide a diverse set of services.
        </p>
        <ul className="flex gap-1">
          <li className="cursor-pointer">
            <svg
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.3249" cy="16.7428" r="16.3249" fill="#796FF1" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.4561 12.2246C22.0994 12.4531 21.2803 12.7851 20.8764 12.7851V12.7858C20.4152 12.304 19.7658 12.0032 19.0457 12.0032C17.647 12.0032 16.5128 13.1373 16.5128 14.5355C16.5128 14.7297 16.5353 14.9192 16.5769 15.1009H16.5765C14.6792 15.0511 12.6042 14.1002 11.355 12.4726C10.587 13.802 11.2516 15.2804 12.1232 15.8192C11.8249 15.8417 11.2756 15.7848 11.0171 15.5325C10.9998 16.4149 11.4241 17.584 12.971 18.0081C12.6731 18.1684 12.1457 18.1224 11.9164 18.0883C11.9969 18.8332 13.0399 19.8069 14.1805 19.8069C13.774 20.2771 12.2445 21.13 10.5281 20.8587C11.6938 21.5679 13.0523 21.9786 14.4903 21.9786C18.5767 21.9786 21.7501 18.6669 21.5793 14.5813C21.5787 14.5768 21.5787 14.5723 21.5782 14.5674C21.5787 14.5569 21.5793 14.5464 21.5793 14.5355C21.5793 14.5228 21.5782 14.5108 21.5778 14.4985C21.9498 14.2441 22.449 13.7941 22.8056 13.2017C22.5988 13.3156 21.9784 13.5437 21.401 13.6003C21.7715 13.4004 22.3205 12.7454 22.4561 12.2246Z"
                fill="white"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.24"
                cx="18.3534"
                cy="17.8515"
                r="16.8515"
                stroke="#9C97A6"
                stroke-width="1.05322"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3441 24.1832H18.6461V17.8604H20.3729L20.7144 15.8848H18.6461V14.4532C18.6461 13.9917 18.9445 13.5071 19.371 13.5071H20.5465V11.5315H19.1058V11.5404C16.8517 11.6222 16.3885 12.9277 16.3484 14.299H16.3441V15.8848H15.1926V17.8604H16.3441V24.1832Z"
                fill="#3D3434"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.24"
                cx="17.9062"
                cy="17.8515"
                r="16.8515"
                stroke="#9C97A6"
                stroke-width="1.05322"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.1671 14.4107C14.0372 14.4107 14.7426 13.7674 14.7426 12.973C14.7426 12.1779 14.0372 11.5338 13.1671 11.5338C12.2962 11.5338 11.5908 12.1779 11.5908 12.973C11.5908 13.7674 12.2962 14.4107 13.1671 14.4107ZM11.9522 23.6579H14.7787V15.5061H11.9522V23.6579ZM20.2472 17.2737C19.1896 17.2737 18.7473 18.1879 18.7473 19.1227V23.5525H15.9255V15.4006H18.7473V16.4981C19.4898 15.5394 20.135 15.1437 21.3048 15.1437C22.4755 15.1437 24.3787 15.6987 24.3787 18.9183V23.5525H21.5648V19.1004C21.5648 18.1879 21.3048 17.2737 20.2472 17.2737Z"
                fill="#3D3434"
              />
            </svg>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="uppercase text-lg font-semibold mb-3 md:mt-0">About</h1>
        <ul className="space-y-2 text-sm text-customGray">
          <li>Company</li>
          <li>How it works</li>
          <li>Contact</li>
        </ul>
        <h1 className="uppercase text-lg font-semibold my-3">Buy a home</h1>
        <ul className="space-y-2 text-sm text-customGray">
          <li>Buy</li>
          <li>Finance</li>
        </ul>
      </div>

      <div>
        <h1 className="uppercase text-lg font-semibold mb-3 md:mt-0">
          Buy,rent and sell
        </h1>
        <ul className="space-y-2 text-sm text-customGray">
          <li>Buy and sell properties</li>
          <li>Rent home</li>
          <li>Builder trade-up</li>
        </ul>
        <h1 className="uppercase text-lg font-semibold my-3">sell a home</h1>
        <ul className="space-y-2 text-sm text-customGray">
          <li>Request an offer</li>
          <li>Pricing</li>
          <li>Stories</li>
        </ul>
      </div>

      <form>
        <h1 className="uppercase text-lg font-semibold mb-5 md:mt-0">
          Subscribe now
        </h1>
        <div className="flex">
          <input
            placeholder="Email Adress"
            className="h-12 px-3 outline-none flex-1 bg-secondaryBg placeholder:text-gray-500"
          />
          <span className="bg-primaryColor p-2 h-12 w-12 flex justify-center items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2215 2.79711C22.6796 2.24094 21.8776 2.03374 21.1298 2.25185L3.69183 7.32278C2.90284 7.54197 2.34361 8.1712 2.19297 8.97056C2.03907 9.78409 2.57663 10.8168 3.27891 11.2487L8.7314 14.5998C9.29063 14.9434 10.0124 14.8572 10.4752 14.3905L16.7188 8.10795C17.0331 7.7808 17.5533 7.7808 17.8676 8.10795C18.1819 8.4242 18.1819 8.93675 17.8676 9.26391L11.6132 15.5475C11.1493 16.0132 11.0626 16.7384 11.404 17.3011L14.7355 22.8082C15.1257 23.4625 15.7976 23.8333 16.5346 23.8333C16.6213 23.8333 16.7188 23.8333 16.8055 23.8224C17.6509 23.7133 18.3228 23.1354 18.5721 22.3175L23.7417 4.90182C23.9693 4.16026 23.7634 3.35327 23.2215 2.79711Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </form>
    </footer>
  );
}

export default Footer;
