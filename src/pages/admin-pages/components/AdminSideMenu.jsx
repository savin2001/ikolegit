import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineSetting,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import {
  HiOutlineDocumentReport,
  HiOutlinePuzzle,
  HiUsers,
} from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";

const AdminSideMenu = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto max-w-xs bg-base-100 text-base-content">
          {/* Sidebar content here */}

          <div className="flex flex-row h-fit justify-between mb-8">
            <div className="btn btn-disabled normal-case text-2xl bg-base-100">
              <img
                className="mx-auto h-8 w-auto mr-3"
                src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                alt="Logo"
              />
              <span className="text-neutral">Iko</span>
              <span className="text-primary">Legit</span>
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost btn-circle drawer-button"
            >
              <AiOutlineClose className="h-5 w-5 lg:h-7 lg:w-7" />
            </label>
          </div>
          <li>
            <Link
              to={`/admin/dashboard`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <MdOutlineSpaceDashboard
                  className="h-5 w-5 lg:h-7 lg:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="justify-start">dashboard</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/tickets`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <AiOutlineInfoCircle
                  className="h-5 w-5 lg:h-7 lg:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="justify-start">tickets</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/transactions`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <BiTransfer
                  className="h-5 w-5 lg:h-7 lg:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="justify-start">transactions</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/products`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <HiOutlinePuzzle
                  className="h-5 w-5 lg:h-7 lg:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="justify-start">products</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/users`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <HiUsers className="h-5 w-5 lg:h-7 lg:w-7" aria-hidden="true" />
              </span>
              <span className="justify-start">users</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/reports`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
            >
              <span className="left-0 inset-y-0 flex items-center justify-start">
                <HiOutlineDocumentReport
                  className="h-5 w-5 lg:h-7 lg:w-7"
                  aria-hidden="true"
                />
              </span>
              <span className="justify-start">reports</span>

              <span className="right-0 inset-y-0 flex items-center flex-auto justify-end">
                <div className="badge badge-outline  badge-lg">3</div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/settings`}
              className={`justify-start hover:text-primary capitalize flex md:text-lg hover:bg-base-100`}
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
    </>
  );
};

export default AdminSideMenu;
