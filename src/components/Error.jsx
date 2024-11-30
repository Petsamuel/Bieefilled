import ErrorSvg from "../assets/error.svg";

function Error() {
  return (
    <>
      <section className="flex justify-center  h:Screen mb-10 lg:md:pt-[8%] pt-[35dvh] text-center ">
        <img src={ErrorSvg} alt="error" className="object-contain" />
      </section>
    </>
  );
}

export default Error;
