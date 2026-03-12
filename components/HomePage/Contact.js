// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, usePathname } from "next/navigation";
// import axios from "axios";
// import server from "../../config.json";

// function Contact() {
//   const Locations = [
//     { name: "Embrace" },
//     { name: "Ellen" },
//     { name: "Takshavi" },
//     { name: "Vista Do Mar" },
//     { name: "Moira" },
//     { name: "Amora" },
//   ];

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     project_select: "",
//     location: "",
//     agree: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//   const [submitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   useEffect(() => {
//     const projectFromUrl = searchParams.get("project");
//     if (projectFromUrl) {
//       setFormData((prev) => ({
//         ...prev,
//         project_select: projectFromUrl,
//       }));
//     }
//   }, []);

//   useEffect(() => {
//     const match = Locations.find((loc) =>
//       pathname.toLowerCase().includes(loc.name.toLowerCase().replace(/\s/g, "-"))
//     );
//     if (match) {
//       setFormData((prev) => ({
//         ...prev,
//         project_select: match.name,
//       }));
//     }
//   }, [pathname]);

//   const handleCheckboxChange = () => {
//     setIsCheckboxChecked(!isCheckboxChecked);
//     setFormData((prev) => ({
//       ...prev,
//       agree: !isCheckboxChecked ? "agree" : "",
//     }));
//   };

//   const nameRegex = /^[a-zA-Z\s]*$/;
//   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const phoneRegex = /^\d+$/;
//   const notAllowedDomains = ["test.com", "sample.com", "example.com", "testing.com"];

//   const isValidEmail = (email) => {
//     const [_, domain] = email.split("@");
//     return notAllowedDomains.includes(domain);
//   };

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     const fieldErrors = {};

//     if (["first_name", "last_name", "location"].includes(name)) {
//       if (!nameRegex.test(value)) fieldErrors[name] = "Invalid characters.";
//     }

//     if (name === "email") {
//       if (!emailRegex.test(value)) fieldErrors[name] = "Please enter a valid email address.";
//       else if (isValidEmail(value)) fieldErrors[name] = "This email domain is not allowed.";
//     }

//     if (name === "phone" && !phoneRegex.test(value)) {
//       fieldErrors[name] = "Please enter only numbers.";
//     }

//     setErrors((prevErrors) => ({ ...prevErrors, ...fieldErrors }));
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleForm = async (event) => {
//     event.preventDefault();
//     setErrors({});
//     setIsSubmitting(true);
//     setSuccessMessage("");
//     setError("");

//     try {
//       const response = await axios.post(
//         `${server.SERVER_FROM}contact-form-7/v1/contact-forms/7/feedback`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.status === "mail_sent") {
//         setSuccessMessage("Thank you! Your message has been sent.");
//         setFormData({
//           first_name: "",
//           last_name: "",
//           email: "",
//           phone: "",
//           project_select: "",
//           location: "",
//           agree: "",
//         });
//         setErrors({});
//         setIsCheckboxChecked(false);
//       }
//        else {
//         const fieldErrors = {};
//         const { invalid_fields } = response.data;
//         invalid_fields.forEach((field) => {
//           fieldErrors[field.field] = field.message;
//         });
//         setErrors(fieldErrors);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="mt-[450px]">
//       <div className="lg:mt-[100px] lg:w-[80%] mx-auto bg-gray-200 p-6" id="contactpage">
//         <h3 className="lg:text-[46px] text-4xl">Get in touch</h3>
//         <h4 className="text-2xl font-light text-gray-600">*Required fields</h4>

//         {successMessage && (
//           <p className="text-green-600 text-lg mt-4 mb-6">{successMessage}</p>
//         )}
//         {error && (
//           <p className="text-red-600 text-lg mt-4 mb-6">{error}</p>
//         )}

// <form onSubmit={handleForm} className="py-6" key={JSON.stringify(formData)}>

//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 type="text"
//                 name="first_name"
//                 id="first_name"
//                 className={`font-light block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black peer text-gray-900`}
//                 value={formData.first_name}
//                 onChange={handleInput}
//               />
//               {errors.first_name && (
//                 <p className="mt-2 text-xs text-red-600">{errors.first_name}</p>
//               )}
//               <label
//                 htmlFor="first_name"
//                 className={`absolute text-xl font-light text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                   errors.first_name && "text-red-600"
//                 }`}
//               >
//                 First name*
//               </label>
//             </div>
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 type="text"
//                 name="last_name"
//                 id="last_name"
//                 className={`font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer ${
//                   errors.last_name ? "text-red-600" : "text-gray-900"
//                 }`}
//                 value={formData.last_name}
//                 onChange={handleInput}
//               />
//               {errors.last_name && (
//                 <p className="mt-2 text-xs text-red-600">{errors.last_name}</p>
//               )}
//               <label
//                 htmlFor="last_name"
//                 className={`peer-focus:font-light font-light absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                   errors.last_name ? "text-red-600" : "text-gray-500"
//                 }`}
//               >
//                 Last name*
//               </label>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
//                 value={formData.email}
//                 onChange={handleInput}
//               />
//               {errors.email && (
//                 <p className="mt-2 text-xs text-red-600">{errors.email}</p>
//               )}
//               <label
//                 htmlFor="email"
//                 className={`peer-focus:font-light font-light absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                   errors.email ? "text-red-600" : "text-gray-500"
//                 }`}
//               >
//                 Email*
//               </label>
//             </div>

//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 maxLength={11}
//                 inputMode="numeric"
//                 className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
//                 value={formData.phone}
//                 onChange={handleInput}
//               />
//               {errors.phone && (
//                 <p className="mt-2 text-xs text-red-600">{errors.phone}</p>
//               )}
//               <label
//                 htmlFor="phone"
//                 className={`peer-focus:font-light font-light absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                   errors.phone ? "text-red-600" : "text-gray-500"
//                 }`}
//               >
//                 Telephone*
//               </label>
//             </div>
//           </div>

//           <div class="grid md:grid-cols-2 md:gap-6">
//             <div class="relative z-0 w-full mb-5 group">
//               {/* <label for="underline_select" class="sr-only">Underline select</label> */}
//               <label
//                 for="project_select"
//                 class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                   errors && errors.email
//                     ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                     : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//                 }`}
//               >
//                 Choose project*
//               </label>
//               {/* <label for="project_select" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choose project</label> */}
//               {/* <select
//               id="project_select"
//               name="project_select"
//               class="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer "
//               value={formData.project_select}
//               onChange={handleInput}
//             >
//               <option selected></option>
//               {Locations.map((items, index) => (
//                 <option value={items.name} key={index}>
//                   {items.name}
//                 </option>
//               ))}
//             </select> */}
//               <select
//                 name="project_select"
//                 value={formData.project_select}
//                 onChange={handleInput}
//                 className="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer"
//               >
//                 <option value=""></option>
//                 {Locations.map((item, index) => (
//                   <option key={index} value={item.name}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>

//               {/* <div className='absolute right-0 -mt-[34px] hidden lg:block'><IoMdArrowDropdown size={28} /></div> */}
//               {errors && errors.project_select && (
//                 <p
//                   id="filled_error_help"
//                   class="mt-2 text-xs text-red-600 dark:text-red-400"
//                 >
//                   {errors.project_select}
//                 </p>
//               )}
//             </div>
//             <div class="relative z-0 w-full mb-5 group">
//               <input
//                 type="text"
//                 name="location"
//                 id="location"
//                 class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
//                 value={formData.location}
//                 onChange={handleInput}
//               />
//               {errors && errors.location && (
//                 <p
//                   id="filled_error_help"
//                   class="mt-2 text-xs text-red-600 dark:text-red-400"
//                 >
//                   {errors.location}
//                 </p>
//               )}
//               <label
//                 for="location"
//                 class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Your location
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className="mt-4 px-6 py-2 text-white bg-black hover:bg-gray-800"
//           >
//             {submitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

 "use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import server from "../../config.json";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const Locations = [
    { name: "Embrace" },
    { name: "Ellen" },
    { name: "Takshavi" },
    { name: "Dona Paula" },
    { name: "Vista Do Mar" },
    { name: "Moira" },
    { name: "Amora" },
    { name: "Lucilia" },
  ];

  const [errors, setErrors] = useState({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [acceptance, setAcceptance] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectFromUrl = searchParams.get("project");
    if (projectFromUrl) {
      setFormData((prev) => ({
        ...prev,
        project_select: projectFromUrl,
      }));
    }
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    const match = Locations.find((loc) =>
      pathname
        .toLowerCase()
        .includes(loc.name.toLowerCase().replace(/\s/g, "-"))
    );
    if (match) {
      setFormData((prev) => ({
        ...prev,
        project_select: match.name,
      }));
    }
  }, [pathname]);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setAcceptance("agree");
  };
  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^\d+$/;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ];
  function isValidEmail(email) {
    const [_, domain] = email.split("@");
    return notAllowedDomains.includes(domain);
  }

  const nameErrors = {
    field: "first_name",
    message: "invalid character",
  };
  const lastErrors = {
    field: "last_name",
    message: "invalid character",
  };
  const locationErrors = {
    field: "location",
    message: "invalid character",
  };
  const emailErrors = {
    field: "email",
    message: "Please enter a valid email address.",
  };

  const customDomainErrors = {
    field: "email",
    message: "This email domain is not allowed.",
  };
  const customPhoneErrors = {
    field: "phone",
    message: "Please enter only numbers.",
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    //alert(e.target.value)

    if (name === "first_name") {
      if (!nameRegex.test(value)) {
        console.log("invalid character");
        const fieldErrors = {};
        const { field, message } = nameErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
    }
    if (name === "last_name") {
      if (!nameRegex.test(value)) {
        console.log("invalid character");
        const fieldErrors = {};
        const { field, message } = lastErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
    }

    if (name === "email") {
      if (!emailRegex.test(value)) {
        console.log("invalid Email");
        const fieldErrors = {};
        const { field, message } = emailErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
      if (isValidEmail(value)) {
        console.log("invalid Email");
        const fieldErrors = {};
        const { field, message } = customDomainErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
    }

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        console.log("invalid character");
        const fieldErrors = {};
        const { field, message } = customPhoneErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
    }
    if (name === "location") {
      if (!nameRegex.test(value)) {
        console.log("invalid character");
        const fieldErrors = {};
        const { field, message } = locationErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        console.log("valid character");
        setErrors("");
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    project_select: "",
    location: "",
    agree: "",
  });

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError("");
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setError("");

    if (!recaptchaToken) {
      setRecaptchaError("Please verify that you are not a robot.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const response = await axios.post(
        `${server.SERVER_FROM}contact-form-7/v1/contact-forms/7/feedback`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data.status === "mail_sent") {
        // ✅ Success: Show message & reset form
        if (response.data.status === "mail_sent") {
          setSuccessMessage("Your form was submitted successfully!");
          // reset form here
        }

        alert("Form submitted successfully!"); // You can replace with a custom success UI if needed

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          project_select: "",
          location: "",
          agree: "",
        });

        setIsCheckboxChecked(false);
        setAcceptance("");
        setIsSubmitting(false);
        setRecaptchaToken(null);
      } else {
        const fieldErrors = {};
        const { invalid_fields } = response.data;
        invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div
        className="lg:mt-[100px] lg:w-[80%] mx-auto bg-gray-200 p-6"
        id="contactpage"
      >
        <h3 className="lg:text-[46px] text-4xl lg:pb-3 pb-1">Get in touch</h3>
        <h4 className="text-2xl font-light text-gray-600 pb-5">*Required fields</h4>
        <form class="py-6">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                class={`font-light block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer text-gray-900 `}
                value={formData.first_name}
                onChange={handleInput}
                // value={formData.contactNo}
              />
              {errors && errors.first_name && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.first_name}
                </p>
              )}
              <label
                for="first_name"
                class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors && errors.first_name
                    ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
                    : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
                }`}
              >
                First name*
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                class={`font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${
                  errors && errors.last_name ? "text-red-600" : " text-gray-900"
                }`}
                value={formData.last_name}
                onChange={handleInput}
              />
              {errors && errors.last_name && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.last_name}
                </p>
              )}
              <label
                for="last_name"
                class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors && errors.last_name
                    ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
                    : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
                }`}
              >
                Last name*
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.email}
                onChange={handleInput}
              />
              {errors && errors.email && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.email}
                </p>
              )}
              <label
                for="email"
                class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors && errors.email
                    ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
                    : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
                }`}
              >
                Email*
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                maxLength={11}
                name="phone"
                id="phone"
                class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.phone}
                onChange={handleInput}
              />
              {errors && errors.phone && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.phone}
                </p>
              )}
              <label
                for="phone"
                class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors && errors.email
                    ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
                    : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
                }`}
              >
                Telephone*
              </label>
            </div>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              {/* <label for="underline_select" class="sr-only">Underline select</label> */}
              <label
                for="project_select"
                class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors && errors.email
                    ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
                    : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
                }`}
              >
                Choose project*
              </label>
              {/* <label for="project_select" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choose project</label> */}
              {/* <select
              id="project_select"
              name="project_select"
              class="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer "
              value={formData.project_select}
              onChange={handleInput}
            >
              <option selected></option>
              {Locations.map((items, index) => (
                <option value={items.name} key={index}>
                  {items.name}
                </option>
              ))}
            </select> */}
              <select
                name="project_select"
                value={formData.project_select}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer"
              >
                <option value=""></option>
                {Locations.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              {/* <div className='absolute right-0 -mt-[34px] hidden lg:block'><IoMdArrowDropdown size={28} /></div> */}
              {errors && errors.project_select && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.project_select}
                </p>
              )}
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="location"
                id="location"
                class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.location}
                onChange={handleInput}
              />
              {errors && errors.location && (
                <p
                  id="filled_error_help"
                  class="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.location}
                </p>
              )}
              <label
                for="location"
                class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your location
              </label>
            </div>
          </div>
          <div class="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              class={`checkbox-round border-4 bg-gray-100 border-red-500 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                errors && errors.agree
                  ? "border-4 border-red-500"
                  : "text-gray-500"
              }`}
              name="agree"
              value={formData.agree}
              onChange={handleCheckboxChange}
            />
            <label
              for="link-checkbox"
              class={`ms-2 text-[18px] font-light  dark:text-gray-300 ${
                errors && errors.agree ? "text-red-500" : "text-gray-500"
              }`}
            >
              I declare that I have read, understood and accept the{" "}
              <a
                href="/privacy-policy"
                class="text-black dark:text-black hover:underline"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
          <div className="mt-6">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
            />
            {recaptchaError && (
              <p className="mt-2 text-xs text-red-600">{recaptchaError}</p>
            )}
          </div>
          <button
            type="submit"
            class="justify-center flex items-center my-6 text-white bg-gray-900 font-light text-[18px] w-full sm:w-auto px-10 py-2.5 text-center hover:bg-black"
            onClick={handleForm}
            disabled={submitting && "disabled"}
          >
            Submit&nbsp;
            {submitting && (
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>
        </form>
        <div class="flex lg:flex-row lg:items-center content-between gap-x-2 flex-col sm:flex-col sm:justify-center sm:space-y-0">
          <div class="block">
            <a href="tel:+91 82174 79108">
              {" "}
              <h5 class="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-blue">
                <span className="text-e-green">Call:</span> +91 82174 79108
              </h5>
            </a>
          </div>
          <div class="inline-block h-[31px] min-h-[0.20em] w-[0.15em] self-stretch bg-e-green lg:block hidden"></div>
          <hr className="h-px border-t lg:w-9/12 w-[75%] border-e-green pb-4 lg:mx-auto lg:hidden block" />
          <div class="block">
            <a href="mailto:contact@ekaya.in">
              <h5 class="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-green poppins-light">
                <span className="text-e-green">Email:</span> contact@ekaya.in
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
