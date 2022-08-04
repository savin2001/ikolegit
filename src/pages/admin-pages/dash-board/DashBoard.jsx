import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/navbar/AdminNavbar.jsx";
import AdminSideMenu from "../components/AdminSideMenu.jsx";
import Chart from "../components/Chart.jsx";

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
                <div className="flex sm:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-start mb-6 sm:gap-4 lg:gap-8">
                  <div className="stats shadow-md w-full sm:max-w-xs bg-success text-base-100">
                    <div className="stat">
                      <div className="stat-title">Users</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs bg-error text-base-100">
                    <div className="stat">
                      <div className="stat-title">Tickets</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs bg-info text-base-100">
                    <div className="stat">
                      <div className="stat-title">Transactions</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow-md w-full sm:max-w-xs bg-warning text-base-100">
                    <div className="stat">
                      <div className="stat-title">Products</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                </div>
                <div className="w-full shadow-md p-4 mt-6">
                  <div className="flex w-full justify-between items-start mb-6">
                    <div>
                      <h3 className="sm:text-lg md:text-xl font-bold">Revenue generated</h3>
                      <p className="text-accent text-sm">
                        Jan 2022 to July 2022
                      </p>
                    </div>
                    <div>
                      <div className="tabs tabs-boxed">
                        <a className="tab ">Day</a>
                        <a className="tab tab-active">Month</a>
                        <a className="tab">Year</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Chart />
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
