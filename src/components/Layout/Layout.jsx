import { Suspense } from "react";
import Header from "../Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
