import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const routes = [
  // PUBLIC ROUTES
  { path: "/", component: lazy(() => import("./screens/public/home")) },
  // { path: "/contactus", component: lazy(() => import("./screens/public/contactus")) },
  // PRIVATE ROUTES
  // { path: "/dashboard", component: lazy(() => import("./screens/private/dashboard")), private: true },
  // {path: "/login", component : lazy(()=> import('../src/components/Login'))},
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
            element={isPrivate ? <PrivateRoute><Component /></PrivateRoute> : <Component />} 
          />
        ))}
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;