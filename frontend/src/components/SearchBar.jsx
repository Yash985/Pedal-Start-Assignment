const SearchBar = () => {
    return (
      <div className="flex items-center border border-black mx-16 px-2 mt-16 focus-within:border-blue-500 focus-within:border-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="h-10 w-full outline-none"
          type="text"
          placeholder="Search By ID"
        />
      </div>
    );
  };
  
  export default SearchBar;
  