import { useState, useRef, useEffect, createRef } from "react";
import { AlertMessage } from "./Alerts";
import { secret_key } from "./store/data";
import emailjs from "@emailjs/browser";
import Loading from "./Loading";
import ReCAPTCHA from "react-google-recaptcha";

export const InputField = ({
  type,
  label,
  name,
  handleChange,
  isTextArea,
  value,
}) => {
  return (
    <>
      <div class="relative">
        {!isTextArea ? (
          <>
            {" "}
            <input
              type={type}
              name={name}
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent bg-black dark:bg-black rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-white dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
              placeholder=" "
              required
              minLength="4"
              value={value}
              onChange={handleChange}
            />
            <label
              required
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              {label}
            </label>
          </>
        ) : (
          <>
            {" "}
            <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 block">
              {label}
            </label>
            <textarea
              name={name}
              required
              placeholder=" "
              value={value}
              onChange={handleChange}
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-600 focus:border-indigo-600 shadow-sm rounded-lg"
            ></textarea>
          </>
        )}
      </div>
    </>
  );
};

export const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const [alertPrompt, setAlertPrompt] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [formValue, setFormValue] = useState({
    user_name: "",
    message: "",
    user_email: "",
  });

  const refCaptcha = createRef();
  const form = useRef();

  useEffect(() => {
    let timeout;

    if (status === true || false) {
      // Show the info message for 9 seconds
      timeout = setTimeout(() => {
        setAlertPrompt(null);
      }, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setStatus(null);
      }
    };
  }, [status]);

  const SubmitForm = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();
    setStatus(true);

    const params = {
      ...formValue,
      "g-recaptcha-response": token,
    };
    switch (true) {
      case formValue.user_name === "":
        setAlertMessage("Name cannot be Blank");
        setStatus(false);

        break;

      case formValue.user_email === "":
        setAlertMessage("Email Address cannot be Blank");
        setStatus(false);

        break;

      case token === undefined:
        setAlertMessage("Recaptche Error... ");
        setStatus(false);

        break;

      default:
        emailjs
          .send(
            secret_key.mail_service_id,
            secret_key.mail_template_id,
            params,
            secret_key.mail_public_key
          )
          .then(
            (response) => {
              if (response.status === 200) {
                setAlertPrompt(true);
                setAlertMessage("Sent SUCCESSFULLY");
                setStatus(false);
                setFormValue({});
              }
              // console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
              setAlertMessage(`FAILED... ${err.text}`);
              setStatus(false);
              setFormValue({});
              console.log("FAILED...", err.text);
            }
          );
      // break
    }
  };

  return (
    <>
      <div className={status === null ? "hidden" : "block"}>
        {alertPrompt ? (
          <div>
            <AlertMessage message={alertMessage} alert={true} />
          </div>
        ) : (
          <div>
            <AlertMessage message={alertMessage} alert={false} />
          </div>
        )}
      </div>
      <form ref={form} className="space-y-5" onSubmit={(e) => e.preventDefault}>
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
          <InputField
            type="text"
            label="Full Name"
            name={formValue.user_name}
            value={formValue.user_name}
            handleChange={(e) => {
              setFormValue({ ...formValue, user_name: e.target.value });
            }}
          />
          <InputField
            type="email"
            label="Email"
            name={formValue.user_email}
            value={formValue.user_email}
            handleChange={(e) => {
              setFormValue({ ...formValue, user_email: e.target.value });
            }}
          />
        </div>
        <InputField
          isTextArea
          label="Message"
          name={formValue.message}
          value={formValue.message}
          handleChange={(e) => {
            setFormValue({ ...formValue, message: e.target.value });
          }}
        />
        <ReCAPTCHA
          ref={refCaptcha}
          theme="dark"
          // size="invisible"
          sitekey={secret_key.reCAPTCHA}
        />

        <button
          className="w-full px-4 py-2 text-white  font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:first-line:bg-gradient-to-l hover:from-purple-600 hover:to-fuchsia-500 active:bg-indigo-600 rounded-lg duration-150 "
          onClick={(e) => {
            SubmitForm(e);
          }}
        >
          {!status ? `Submit` : <Loading />}
        </button>
      </form>
    </>
  );
};
export const NewsletterForm = () => {
  return (
    <>
      <div class="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto fixed bottom-0 left-0 z-50 dark:bg-gray-700 dark:border-gray-600 bg-opacity-50">
        <form action="#" class="flex flex-col items-center w-full md:flex-row">
          <label
            for="email"
            class="flex-shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0"
          >
            Sign up for our newsletter
          </label>
          <InputField
            name="user_email"
            type="email"
            label="Email"
            onchange={(e) => {
              e.target.value;
            }}
          />
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};
