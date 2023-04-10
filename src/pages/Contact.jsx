import { TextField } from "../components/FormField";
function Contact() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white  mt-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2">
          Contact&nbsp;
        </span>
      </h1>
      <form className="">
        <>{/* <TextField /> */}</>
      </form>
    </section>
  );
}

export default Contact;
