import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="mx-16">{children}</section>
      <Footer />
    </>
  );
};
