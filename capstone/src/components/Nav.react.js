export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="/"
              className="text-primary hover:text-indigo-600 hover:text-yellow hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-primary hover:text-indigo-600 hover:text-yellow hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className="text-primary hover:text-indigo-600 hover:text-yellow hover:underline"
            >
              Menu
            </a>
          </li>
          <li className="items-center">
            <a
              href="/reservations"
              className="text-primary hover:text-indigo-600 hover:text-yellow hover:underline"
            >
              Reservations
            </a>
          </li>
          <li>
            <button
              className="bg-primary text-white pt-2 pb-2 pl-5 pr-5 rounded hover:bg-yellow hover:text-black"
              type="button"
            >
              Order Online
            </button>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
