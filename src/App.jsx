import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; // Import it
const routes = [
  { path: "/", component: lazy(() => import("./screens/public/home")) },
  { path: "/login", component: lazy(() => import("./components/login")) },
  {path:'/contactus', component: lazy(() => import("./screens/public/contactus"))},
  {path:'/pricing', component: lazy(() => import("./screens/public/pricing"))},
  {path:'/dispatch-for-trucking-companies', component: lazy(() => import("./screens/public/dispatchfortruckingcompanies"))},
  {path : '/dispatch-for-owner-operators' , component: lazy(()=> import("./screens/public/dispatchservicesforowneroperators"))},
  // PRIVATE ROUTE
  {path: 'selection', component: lazy(() => import("./screens/private/selectionscreen"))},
  { path: "/dashboard", component: lazy(() => import("./screens/private/dashboard")), private: true },
];

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-[#243c5a] border-dashed rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, component: Component, private: isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={isPrivate ? (
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              ) : (
                <Component />
              )}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
