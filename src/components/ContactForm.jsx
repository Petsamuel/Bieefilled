export const InputField = ({ type, label }) => {
  return (
    <>
      <div class="relative">
        <input
          type={type}
          id="floating_outlined"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export const ContactForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
          <InputField type="text" label="Full Name" />

          <InputField type="email" label="Email" />
        </div>

        <div className="relative">
          <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 block">
            Message
          </label>
          <textarea
            required
            placeholder=" "
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-600 focus:border-indigo-600 shadow-sm rounded-lg"
          ></textarea>
        </div>
        <button className="w-full px-4 py-2 text-white font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:first-line:bg-gradient-to-l hover:from-purple-600 hover:to-fuchsia-500 active:bg-indigo-600 rounded-lg duration-150">
          Submit
        </button>
      </form>
    </>
  );
};
export const NewletterForm = () => {
  return <></>;
};
