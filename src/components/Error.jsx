import ErrorSvg from "../assets/error.svg";

function Error() {
  return (
    <>
      <section className="flex justify-center pt-10">
        <img src={ErrorSvg} alt="error" className="w-5/12" />
      </section>
    </>
  );
}

export default Error;
