import { useState } from "react";
import CartIcon from "../svg/CartIcon";
import DownIcon from "../svg/DownIcon";
import SearchIcon from "../svg/SearchIcon";
import { useProducts } from "../../provider/ProductProvider";

export default function FilterSearchProduct() {
    const [showSortModal, setShowSortModal] = useState(false);
    const {setSortValue} = useProducts();
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={() => setShowSortModal(!showSortModal)}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Sort
                <DownIcon />
              </button>
            </div>

            <div
              className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
             
            >
              {
                showSortModal && (
                    <div className="py-1" role="none">
                <span
                onClick={() => {
                    setShowSortModal(!showSortModal);
                    setSortValue('asc')
                } }
                
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                >
                  Low to High
                </span>
                <span
                onClick={() => {
                    setShowSortModal(!showSortModal);
                    setSortValue('desc')
                }}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                  
                >
                  High to Low
                </span>
              </div>
                )
              }
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                id="filter-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Filter
               <DownIcon />
              </button>
            </div>

            <div
              className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="filter-button"
             
           
            >
              <div className="py-1" role="none">
                <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-1"
                  />
                  <span className="ml-2">Category 1</span>
                </label>
                <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-2"
                  />
                  <span className="ml-2">Category 2</span>
                </label>
                <label className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    id="filter-option-3"
                  />
                  <span className="ml-2">Category 3</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
           <CartIcon />
            <input
              className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
              placeholder="Find anything..."
              aria-label="Search components"
              role="combobox"
              type="text"
              aria-expanded="false"
              aria-autocomplete="list"
            />
          </div>

          <div className="flow-root">
            <a href="#" className="group -m-2 flex items-center p-2">
             <SearchIcon />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
