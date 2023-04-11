import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className=" lg:mx-16 sm:mx-2 pt-5 h-full place-content-center">
        <div className="mt-5 ">{children}</div>
      </section>
      {/* <Footer /> */}
    </>
  );
};
