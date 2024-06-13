import Link from "next/link";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar bg-base-100 font-bold">
      <div className="navbar-start">
        {/* DROPDOWN */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* HAMBURGER MENU */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* ITEM LINK */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  className="text-slate-600 drop-shadow-sm"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGO */}
        <div>
          <span>
            <Link href={"/"} className="font-bold text-3xl tracking-wider">
              Malika
            </Link>
          </span>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link className="text-slate-600 drop-shadow-sm" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
