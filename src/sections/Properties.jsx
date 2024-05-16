function Properties() {
  return (
    <section id="properties" className="bg-secondaryBg">
      <div className="max-w-6xl m-auto px-14 py-10">
        <h2 className="font-semibold md:text-5xl text-4xl mb-3 md:mb-5">
          Explore Our Properties
        </h2>
        <p className="text-customGray md:text-lg">
          investment to explore the area we will help you
        </p>

        <div className="bg-white w-full md:w-1/3 rounded-t-xl grid grid-cols-3 overflow-hidden ml-auto my-5 ">
          <button className=" px-5 py-7 hover:bg-primaryColor hover:text-white  ">
            Buy
          </button>
          <button className=" border-x px-5 py-7 hover:bg-primaryColor hover:text-white">
            Sell
          </button>
          <button className="px-5 py-7 hover:bg-primaryColor hover:text-white">
            Rent
          </button>
        </div>
        <ul className="grid grid-cols-1  gap-7 shadow-secondaryBg md:grid-cols-3 md:grid-10">
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <li className=" mx-auto max-w-96 rounded-3xl overflow-hidden shadow-md bg-white shadow-secondaryBg ">
                <img
                  src={`/images/prop${index + 1}.png`}
                  alt={`index`}
                  className="w-full"
                />
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between  mt-4  ">
                    <h3>
                      <span className="font-semibold text-primaryColor text-xl">
                        ${2050 + 50 * index}
                      </span>
                      <span className="text-customGray text-sm">/ month</span>
                    </h3>
                    <span className="border border-gray-300 p-2 flex justify-center items-center rounded-full">
                      <svg
                        className="w-5 h-5 cursor-pointer hover:fill-primaryColor"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.1 5.5C19.1 3.015 17.0067 1 14.4247 1C12.4949 1 10.8374 2.126 10.1244 3.733C9.41129 2.126 7.75378 1 5.82301 1C3.24301 1 1.14868 3.015 1.14868 5.5C1.14868 12.72 10.1244 17.5 10.1244 17.5C10.1244 17.5 19.1 12.72 19.1 5.5Z"
                          stroke="#6647f1"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <h2 className="font-semibold text-2xl  mb-4">Lorem ipsum</h2>
                  <p className=" text-customGray">Lorem ipsum dolor sit.</p>
                  <ul className="flex justify-between mt-5  py-4 border-t">
                    <li className="text-center">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.75"
                          fill="white"
                          stroke="#E9E9EA"
                          stroke-width="0.5"
                        />
                        <path
                          d="M11.1667 7.49996H4.83333C4.374 7.49996 4 7.87396 4 8.33329V10.6666C4 10.7586 4.07467 10.8333 4.16667 10.8333C4.25867 10.8333 4.33333 10.7586 4.33333 10.6666V10.1666H11.6667V10.6666C11.6667 10.7586 11.7413 10.8333 11.8333 10.8333C11.9253 10.8333 12 10.7586 12 10.6666V8.33329C12 7.87396 11.626 7.49996 11.1667 7.49996ZM11.6667 9.83329H4.33333V9.49996H11.6667V9.83329ZM4.83333 7.16663H5.66667C5.61533 7.16663 5.567 7.14296 5.53533 7.10263C5.50367 7.06229 5.49267 7.00963 5.505 6.95963L5.60867 6.54529C5.66433 6.32229 5.864 6.16663 6.09367 6.16663H7.16667C7.44233 6.16663 7.66667 6.39096 7.66667 6.66663V6.99996C7.66667 7.09196 7.592 7.16663 7.5 7.16663H8.5C8.408 7.16663 8.33333 7.09196 8.33333 6.99996V6.66663C8.33333 6.39096 8.55767 6.16663 8.83333 6.16663H9.90633C10.136 6.16663 10.3357 6.32229 10.3913 6.54529L10.495 6.95963C10.5077 7.00929 10.4963 7.06229 10.4647 7.10263C10.433 7.14296 10.3847 7.16663 10.3333 7.16663H11.1667C11.2587 7.16663 11.3333 7.09196 11.3333 6.99996V5.99996C11.3333 5.54063 10.9593 5.16663 10.5 5.16663H5.5C5.04067 5.16663 4.66667 5.54063 4.66667 5.99996V6.99996C4.66667 7.09196 4.74133 7.16663 4.83333 7.16663Z"
                          fill="#796FF1"
                        />
                      </svg>
                      <span className="text-customGray">4 Bathrooms</span>
                    </li>
                    <li>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.75"
                          fill="white"
                          stroke="#E9E9EA"
                          stroke-width="0.5"
                        />
                        <g clip-path="url(#clip0_45_609)">
                          <path
                            d="M7.49575 5.46562C7.72967 5.5041 7.94231 5.62444 8.09574 5.80516C8.24916 5.98588 8.3334 6.21522 8.33341 6.45229V7.11895H6.33341V6.45229C6.33341 6.10629 6.50941 5.80095 6.77675 5.62162C6.68074 5.53614 6.56207 5.48023 6.43502 5.46064C6.30797 5.44105 6.17797 5.4586 6.06067 5.51119C5.94338 5.56378 5.84378 5.64917 5.77389 5.75706C5.704 5.86494 5.66679 5.99074 5.66675 6.11929V8.11929H11.0001C11.0885 8.11929 11.1733 8.15441 11.2358 8.21692C11.2983 8.27943 11.3334 8.36422 11.3334 8.45262C11.3334 8.54103 11.2983 8.62581 11.2358 8.68832C11.1733 8.75084 11.0885 8.78595 11.0001 8.78595V9.11929C11.0001 9.53292 10.8718 9.93638 10.6331 10.2741C10.3943 10.6119 10.0567 10.8673 9.66675 11.0053V11.1666C9.66675 11.255 9.63163 11.3398 9.56912 11.4023C9.5066 11.4648 9.42182 11.5 9.33341 11.5C9.24501 11.5 9.16022 11.4648 9.09771 11.4023C9.0352 11.3398 9.00008 11.255 9.00008 11.1666V11.1193H7.00008V11.1666C7.00008 11.255 6.96496 11.3398 6.90245 11.4023C6.83994 11.4648 6.75515 11.5 6.66675 11.5C6.57834 11.5 6.49356 11.4648 6.43105 11.4023C6.36853 11.3398 6.33341 11.255 6.33341 11.1666V11.0053C5.94347 10.8673 5.60588 10.6119 5.3671 10.2741C5.12832 9.93638 5.0001 9.53292 5.00008 9.11929V8.78595C4.91168 8.78595 4.82689 8.75084 4.76438 8.68832C4.70187 8.62581 4.66675 8.54103 4.66675 8.45262C4.66675 8.36422 4.70187 8.27943 4.76438 8.21692C4.82689 8.15441 4.91168 8.11929 5.00008 8.11929V6.11929C5.00007 5.82445 5.09778 5.53792 5.27793 5.30452C5.45808 5.07113 5.71052 4.90402 5.99574 4.82936C6.28097 4.75469 6.5829 4.77666 6.85431 4.89185C7.12572 5.00703 7.35129 5.20893 7.49575 5.46595V5.46562Z"
                            fill="#796FF1"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_45_609">
                            <rect
                              width="8"
                              height="8"
                              fill="white"
                              transform="translate(4 4)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className="text-customGray">4 Beds</span>
                    </li>
                    <li>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.75"
                          fill="white"
                          stroke="#E9E9EA"
                          stroke-width="0.5"
                        />
                        <g clip-path="url(#clip0_45_601)">
                          <path
                            d="M8.5 7.75V11.5C8.5 11.5663 8.47366 11.6299 8.42678 11.6768C8.37989 11.7237 8.3163 11.75 8.25 11.75H4.5C4.4337 11.75 4.37011 11.7237 4.32322 11.6768C4.27634 11.6299 4.25 11.5663 4.25 11.5V8C4.25 7.9337 4.27634 7.87011 4.32322 7.82322C4.37011 7.77634 4.4337 7.75 4.5 7.75H6.25"
                            stroke="#796FF1"
                            stroke-width="0.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.5 7.75V4.5C5.5 4.4337 5.52634 4.37011 5.57322 4.32322C5.62011 4.27634 5.6837 4.25 5.75 4.25H9.25C9.3163 4.25 9.37989 4.27634 9.42678 4.32322C9.47366 4.37011 9.5 4.4337 9.5 4.5V7.5C9.5 7.5663 9.47366 7.62989 9.42678 7.67678C9.37989 7.72366 9.3163 7.75 9.25 7.75H7.75"
                            stroke="#796FF1"
                            stroke-width="0.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.5 6H11.5C11.5663 6 11.6299 6.02634 11.6768 6.07322C11.7237 6.12011 11.75 6.1837 11.75 6.25V9.25C11.75 9.3163 11.7237 9.37989 11.6768 9.42678C11.6299 9.47366 11.5663 9.5 11.5 9.5H8.5"
                            stroke="#796FF1"
                            stroke-width="0.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.25 9.75H6V11.75"
                            stroke="#796FF1"
                            stroke-width="0.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 10.75H4.25"
                            stroke="#796FF1"
                            stroke-width="0.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_45_601">
                            <rect
                              width="8"
                              height="8"
                              fill="white"
                              transform="translate(4 4)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span className="text-customGray">8 10m</span>
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="text-center mt-10 underline underline-offset-8 cursor-pointer text-primaryColor">
          See More Properties {">"}
        </p>
      </div>
    </section>
  );
}

export default Properties;
