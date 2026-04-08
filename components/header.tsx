export function Header() {
  return (
    <header className="bg-[#fceeed]">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-[#8b2e2e]">Dakingo</h1>
          </div>

          {/* Right Side - Search, Cart, Login */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Bar - Compact */}
            <div className="relative hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-40 md:w-48 lg:w-56 px-4 py-1.5 pl-9 pr-4 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8b2e2e] focus:border-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <button className="absolute right-0 bg-[#8b2e2e] text-white p-1.5 rounded-full hover:bg-[#6b1e1e] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            {/* Shopping Cart */}
            <button className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </button>

            {/* Login/Signup */}
            <a
              href="#"
              className="text-[#8b2e2e] hover:text-[#6b1e1e] font-medium text-sm whitespace-nowrap transition-colors"
            >
              Login/Signup
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-[#fceeed] border-t border-[#f5d4d4]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            {/* Navigation Links - Responsive */}
            <ul className="flex items-center justify-start flex-1 gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm font-medium overflow-x-auto">
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Cakes
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Theme Cakes
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Desserts
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Birthday
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Hampers
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Anniversary
                </a>
              </li>
              <li className="whitespace-nowrap">
                <a
                  href="#"
                  className="text-[#8b2e2e] hover:text-[#6b1e1e] transition-colors"
                >
                  Occasions
                </a>
              </li>
            </ul>

            {/* Order Now Button */}
            <button className="bg-[#8b2e2e] text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#6b1e1e] transition-colors whitespace-nowrap ml-4">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
