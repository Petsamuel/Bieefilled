import { useState, useRef, useEffect, createRef } from "react";
import { FailedAlert, SuccessAlerts } from "./Alerts";
import emailjs from "@emailjs/browser";
import Loading from "./Loading";
import ReCAPTCHA from "react-google-recaptcha";
import { secret_key } from "./store/data";
export const InputField = ({ type, label, name }) => {
  return (
    <>
      <div class="relative">
        <input
          type={type}
          name={name}
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent bg-black dark:bg-black rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-white dark:text-white dark:border-gray-700 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
          placeholder=" "
          required
          minLength="4"
        />
        <label
          required
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>
    </>
  );
};
export const TextField = () => {
  return (
    <div className="relative">
      <label className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-black px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 block">
        Message
      </label>
      <textarea
        name="message"
        required
        placeholder=" "
        className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-gray-600 focus:border-indigo-600 shadow-sm rounded-lg"
      ></textarea>
    </div>
  );
};

export const ContactForm = () => {
  const [status, setStatus] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const recaptchaRef = createRef();
  const form = useRef();
  useEffect(() => {
    let timeout;

    if (status) {
      // Show the info message for 2 seconds
      timeout = setTimeout(() => {
        setAlertMessage(null);
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setStatus(!status);
      }
    };
  }, [status]);

  const SubmitForm = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();

    // recaptcher v2
    const SubmitCaptcha = (captchaValue) => {
      const params = {
        ...formState,
        "g-recaptcha-response": captchaValue,
      };
    };

    emailjs
      .sendForm(
        secret_key.mail_service_id,
        secret_key.mail_template_id,
        form.current,
        secret_key.mail_public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(false);
          setAlertMessage(true);
        },
        (error) => {
          console.log(error.text);
          setAlertMessage(false);
          setStatus(!status);
        }
      );
  };
  return (
    <>
      <div className={alertMessage === null ? "hidden" : ""}>
        {alertMessage ? (
          <div>
            <SuccessAlerts message="Sent" />
          </div>
        ) : (
          <div>
            <FailedAlert message="Failed to send" />
          </div>
        )}
      </div>
      <form ref={form} className="space-y-5">
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
          <InputField type="text" label="Full Name" name="user_name" />

          <InputField type="email" label="Email" name="user_email" />
        </div>
        <TextField />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={secret_key.reCAPTCHA}
          onChange={() => {
            SubmitCaptcha();
          }}
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-white  font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:first-line:bg-gradient-to-l hover:from-purple-600 hover:to-fuchsia-500 active:bg-indigo-600 rounded-lg duration-150 "
          onSubmit={(e) => {
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
          <InputField type="email" label="Email" />
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
