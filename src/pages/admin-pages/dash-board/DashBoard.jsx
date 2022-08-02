import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/navbar/AdminNavbar.jsx";
import AdminSideMenu from "../components/AdminSideMenu.jsx";

const DashBoard = () => {
  return (
    <>
      <div className="drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start">
          <AdminNavbar />
          <div className="w-full relative mt-3">
            <div className="max-w-7xl mx-auto px-4">
              <header>
                <div className="text-sm breadcrumbs mb-4">
                  <ul className="capitalize">
                    <li>
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                      <Link to={`/admin/dashboard`}>dashboard</Link>
                    </li>
                  </ul>
                </div>
              </header>
              <main>
                <div className="flex flex-wrap justify-between">
                  <div className="stats shadow-md w-full sm:max-w-xs md:max-w-sm bg-success mb-4 text-base-100">
                    <div className="stat">
                      <div className="stat-title">Users</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs md:max-w-sm bg-error mb-4 text-base-100">
                    <div className="stat">
                      <div className="stat-title">Tickets</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs md:max-w-sm bg-info mb-4 text-base-100">
                    <div className="stat">
                      <div className="stat-title">Transactions</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs md:max-w-sm bg-warning mb-4 text-base-100">
                    <div className="stat">
                      <div className="stat-title">Products</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
        <AdminSideMenu />
      </div>
    </>
  );
};

export default DashBoard;
