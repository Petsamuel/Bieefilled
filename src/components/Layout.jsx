import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="lg:mx-16 sm:mx-2 py-10 h-screen">{children}</section>
      <Footer />
    </>
  );
};
