import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const AdminNavbar = () => {
  return (
    <>
      <main className="w-full bg-base-100 shadow fixed z-50">
        <div className="max-w-7xl mx-auto">
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost btn-circle drawer-button"
              >
                <AiOutlineMenu className="h-5 w-5 lg:h-7 lg:w-7" />
              </label>
            </div>
            <div className="flex-1">
              <Link to={`/`} className="btn btn-ghost normal-case text-2xl">
                <img
                  className="mx-auto h-8 w-auto mr-3"
                  src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                  alt="Logo"
                />
                <span>Iko</span>
                <span className="text-primary">Legit</span>
              </Link>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-circle btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content shadow-md menu mt-3 p-2 bg-base-100 rounded-box w-52 text-sm"
                >
                  <li>
                    <Link
                      to={`/admin/dashboard`}
                      className={`justify-start hover:text-primary capitalize flex`}
                    >
                      <span className="left-0 inset-y-0 flex items-center justify-start">
                        <MdOutlineSpaceDashboard
                          className="h-5 w-5 lg:h-7 lg:w-7"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="justify-start">dashboard</span>

                      <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                        <div className="badge badge-outline  badge-xs">3</div>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/admin/tickets`}
                      className={`justify-start hover:text-primary capitalize flex`}
                    >
                      <span className="left-0 inset-y-0 flex items-center justify-start">
                        <AiOutlineInfoCircle
                          className="h-5 w-5 lg:h-7 lg:w-7"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="justify-start">tickets</span>

                      <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                        <div className="badge badge-outline  badge-xs">3</div>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/admin/settings`}
                      className={`justify-start hover:text-primary capitalize flex`}
                    >
                      <span className="left-0 inset-y-0 flex items-center justify-start">
                        <AiOutlineSetting
                          className="h-5 w-5 lg:h-7 lg:w-7"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="justify-start">settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminNavbar;
