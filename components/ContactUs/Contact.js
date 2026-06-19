// "use client";
// import React, { useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
// import axios from "axios";
// import server from "../../config.json";
// import Link from "next/link";
// import { useSearchParams, usePathname } from "next/navigation";
// import { useEffect } from "react";

// function Contact() {
//   const Locations = [
//     { name: "Embrace" },
//     { name: "Ellen" },
//     { name: "Takshavi" },
//     { name: "Vista Do Mar" },
//     { name: "Moira" },
//     { name: "Amora" },
//     { name: "Lucilia" },
//   ];

//   const [errors, setErrors] = useState({});
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//   const [checkboxError, setCheckboxError] = useState(false);
//   const [submitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [acceptance, setAcceptance] = useState("");
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const projectFromUrl = searchParams.get("project");
//     if (projectFromUrl) {
//       setFormData((prev) => ({
//         ...prev,
//         project_select: projectFromUrl,
//       }));
//     }
//   }, []);
//   const pathname = usePathname();

// useEffect(() => {
//   const match = Locations.find((loc) =>
//     pathname.toLowerCase().includes(loc.name.toLowerCase().replace(/\s/g, "-"))
//   );
//   if (match) {
//     setFormData((prev) => ({
//       ...prev,
//       project_select: match.name,
//     }));
//   }
// }, [pathname]);

//   const handleCheckboxChange = () => {
//     setIsCheckboxChecked(!isCheckboxChecked);
//     setAcceptance("agree");
//   };
//   const nameRegex = /^[a-zA-Z\s]*$/;
//   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const phoneRegex = /^\d+$/;
//   const notAllowedDomains = [
//     "test.com",
//     "sample.com",
//     "example.com",
//     "testing.com",
//   ];
//   function isValidEmail(email) {
//     const [_, domain] = email.split("@");
//     return notAllowedDomains.includes(domain);
//   }

//   const nameErrors = {
//     field: "first_name",
//     message: "invalid character",
//   };
//   const lastErrors = {
//     field: "last_name",
//     message: "invalid character",
//   };
//   const locationErrors = {
//     field: "location",
//     message: "invalid character",
//   };
//   const emailErrors = {
//     field: "email",
//     message: "Please enter a valid email address.",
//   };

//   const customDomainErrors = {
//     field: "email",
//     message: "This email domain is not allowed.",
//   };
//   const customPhoneErrors = {
//     field: "phone",
//     message: "Please enter only numbers.",
//   };

//   const handleInput = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     //alert(e.target.value)

//     if (name === "first_name") {
//       if (!nameRegex.test(value)) {
//         console.log("invalid character");
//         const fieldErrors = {};
//         const { field, message } = nameErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//     }
//     if (name === "last_name") {
//       if (!nameRegex.test(value)) {
//         console.log("invalid character");
//         const fieldErrors = {};
//         const { field, message } = lastErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//     }

//     if (name === "email") {
//       if (!emailRegex.test(value)) {
//         console.log("invalid Email");
//         const fieldErrors = {};
//         const { field, message } = emailErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//       if (isValidEmail(value)) {
//         console.log("invalid Email");
//         const fieldErrors = {};
//         const { field, message } = customDomainErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//     }

//     if (name === "phone") {
//       if (!phoneRegex.test(value)) {
//         console.log("invalid character");
//         const fieldErrors = {};
//         const { field, message } = customPhoneErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//     }
//     if (name === "location") {
//       if (!nameRegex.test(value)) {
//         console.log("invalid character");
//         const fieldErrors = {};
//         const { field, message } = locationErrors;
//         fieldErrors[field] = message;
//         setErrors(fieldErrors);
//       } else {
//         console.log("valid character");
//         setErrors("");
//       }
//     }

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     project_select: "",
//     location: "",
//     agree: "",
//   });

//   const handleForm = async (event) => {
//     // 👇️ prevent page refresh
//     event.preventDefault();
//     setErrors({});
//     setIsSubmitting(true);
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
//       console.log(response.data);
//       if (response.data.status === "mail_sent") {
//       } else {
//         const fieldErrors = {};
//         const { status, invalid_fields } = response.data;
//         invalid_fields.forEach((field) => {
//           fieldErrors[field.field] = field.message;
//         });
//         setErrors(fieldErrors);
//         setIsSubmitting(false);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-[#5CA2B0] lg:p-10 p-5">
//       <div
//       className="mt-[100px] lg:w-[80%] mx-auto bg-gray-200 p-6 container"
//       id="contactpage"
//     >
//       <h3 className="lg:text-[46px] text-4xl lg:pb-3 pb-1">Get in touch</h3>
//       <h4 className="text-2xl font-light text-gray-600 pb-5">*Required fields</h4>
//       <form className="py-6">
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="first_name"
//               id="first_name"
//               className={`font-light block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer text-gray-900 `}
//               value={formData.first_name}
//               onChange={handleInput}
//               // value={formData.contactNo}
//             />
//             {errors && errors.first_name && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.first_name}
//               </p>
//             )}
//             <label
//               for="first_name"
//               className={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                 errors && errors.first_name
//                   ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                   : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//               }`}
//             >
//               First name*
//             </label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="last_name"
//               id="last_name"
//               className={`font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${
//                 errors && errors.last_name ? "text-red-600" : " text-gray-900"
//               }`}
//               value={formData.last_name}
//               onChange={handleInput}
//             />
//             {errors && errors.last_name && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.last_name}
//               </p>
//             )}
//             <label
//               for="last_name"
//               className={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                 errors && errors.last_name
//                   ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                   : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//               }`}
//             >
//               Last name*
//             </label>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
//               value={formData.email}
//               onChange={handleInput}
//             />
//             {errors && errors.email && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.email}
//               </p>
//             )}
//             <label
//               for="email"
//               className={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                 errors && errors.email
//                   ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                   : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//               }`}
//             >
//               Email*
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="tel"
//               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//               maxLength={11}
//               name="phone"
//               id="phone"
//               className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
//               value={formData.phone}
//               onChange={handleInput}
//             />
//             {errors && errors.phone && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.phone}
//               </p>
//             )}
//             <label
//               for="phone"
//               className={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                 errors && errors.email
//                   ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                   : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//               }`}
//             >
//               Telephone*
//             </label>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 md:gap-6">
//           <div className="relative z-0 w-full mb-5 group">
//             {/* <label for="underline_select" className="sr-only">Underline select</label> */}
//             <label
//               for="project_select"
//               className={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
//                 errors && errors.email
//                   ? "text-red-600 peer-focus:text-black peer-focus:dark:text-black"
//                   : " text-gray-500 peer-focus:text-black peer-focus:dark:text-black"
//               }`}
//             >
//               Choose project*
//             </label>
//             {/* <label for="project_select" className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choose project</label> */}
//             {/* <select
//               id="project_select"
//               name="project_select"
//               className="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer "
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
//             <select
//   name="project_select"
//   value={formData.project_select}
//   onChange={handleInput}
//   className="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer"
// >
//   <option value=""></option>
//   {Locations.map((item, index) => (
//     <option key={index} value={item.name}>
//       {item.name}
//     </option>
//   ))}
// </select>

//             {/* <div className='absolute right-0 -mt-[34px] hidden lg:block'><IoMdArrowDropdown size={28} /></div> */}
//             {errors && errors.project_select && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.project_select}
//               </p>
//             )}
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="location"
//               id="location"
//               className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
//               value={formData.location}
//               onChange={handleInput}
//             />
//             {errors && errors.location && (
//               <p
//                 id="filled_error_help"
//                 className="mt-2 text-xs text-red-600 dark:text-red-400"
//               >
//                 {errors.location}
//               </p>
//             )}
//             <label
//               for="location"
//               className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Your location
//             </label>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <input
//             id="link-checkbox"
//             type="checkbox"
//             className={`checkbox-round border-4 bg-gray-100 border-red-500 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
//               errors && errors.agree
//                 ? "border-4 border-red-500"
//                 : "text-gray-500"
//             }`}
//             name="agree"
//             value={formData.agree}
//             onChange={handleCheckboxChange}
//           />
//           <label
//             for="link-checkbox"
//             className={`ms-2 text-[18px] font-light  dark:text-gray-300 ${
//               errors && errors.agree ? "text-red-500" : "text-gray-500"
//             }`}
//           >
//             I declare that I have read, understood and accept the{" "}
//             <a href="/privacy-policy" className="text-black dark:text-black hover:underline">
//               privacy policy
//             </a>
//             .
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="justify-center flex items-center my-6 text-white bg-gray-900 font-light text-[18px] w-full sm:w-auto px-10 py-2.5 text-center hover:bg-black"
//           onClick={handleForm}
//           disabled={submitting && "disabled"}
//         >
//           Submit&nbsp;
//           {submitting && (
//             <svg
//               className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 stroke-width="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//           )}
//         </button>
//       </form>
//       <div className="flex lg:flex-row lg:items-center content-between gap-x-2 flex-col sm:flex-col sm:justify-center sm:space-y-0">
//         <div className="block">
//           <a href="tel:+91 82174 79108">
//             {" "}
//             <h5 className="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-blue">
//               <span className="text-e-green">Call:</span> +91 82174 79108
//             </h5>
//           </a>
//         </div>
//         <div className="inline-block h-[31px] min-h-[0.20em] w-[0.15em] self-stretch bg-e-green lg:block hidden"></div>
//         <hr className="h-px border-t lg:w-9/12 w-[80%] border-e-green pb-4 lg:mx-auto lg:hidden block" />
//         <div className="block">
//           <a href="mailto:contact@ekaya.in">
//             <h5 className="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-green poppins-light">
//               <span className="text-e-green">Email:</span> contact@ekaya.in
//             </h5>
//           </a>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Contact;

"use client"
import React, { useState, useRef } from "react"
import { createPortal } from "react-dom"
import { IoMdArrowDropdown } from "react-icons/io"
import axios from "axios"
import server from "../../config.json"
import Link from "next/link"
import { useSearchParams, usePathname } from "next/navigation"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import { getContactSectionId } from "../common/contactSectionIds"

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
})

function Contact({ sectionId: sectionIdProp } = {}) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  const Locations = [
    { name: "Embrace" },
    { name: "Ellen" },
    { name: "Takshavi" },
    { name: "Dona Paula" },
    { name: "Vista Do Mar" },
    { name: "Moira" },
    { name: "Amora" },
    { name: "Lucilia" },
  ]

  const [errors, setErrors] = useState({})
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
  const [submitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [thankYouOpen, setThankYouOpen] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [recaptchaError, setRecaptchaError] = useState("")
  const [loadRecaptcha, setLoadRecaptcha] = useState(false)
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    project_select: "",
    location: "",
    agree: "",
  })
  const searchParams = useSearchParams()

  const nameRegex = /^[a-zA-Z\s\-']+$/
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const phoneDigitsRegex = /^\d+$/
  const locationRegex = /^[a-zA-Z0-9\s.,#'\-\/]*$/
  const blockedEmailDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ]

  const trim = (v) => String(v ?? "").trim()

  function isBlockedEmailDomain(email) {
    const at = email.lastIndexOf("@")
    if (at < 0) return false
    const domain = email.slice(at + 1).toLowerCase()
    return blockedEmailDomains.includes(domain)
  }

  /** Client validation before submit; returns { fieldName: message } */
  function validateFormFields(data) {
    const e = {}
    const first = trim(data.first_name)
    const last = trim(data.last_name)
    const mail = trim(data.email)
    const phoneRaw = trim(data.phone)
    const project = trim(data.project_select)
    const loc = trim(data.location)

    if (!first) e.first_name = "First name is required."
    else if (!nameRegex.test(first))
      e.first_name = "Use letters, spaces, hyphens, or apostrophes only."

    if (!last) e.last_name = "Last name is required."
    else if (!nameRegex.test(last))
      e.last_name = "Use letters, spaces, hyphens, or apostrophes only."

    if (!mail) e.email = "Email is required."
    else if (!emailRegex.test(mail))
      e.email = "Please enter a valid email address."
    else if (isBlockedEmailDomain(mail))
      e.email = "This email domain is not allowed."

    if (!phoneRaw) e.phone = "Telephone is required."
    else if (!phoneDigitsRegex.test(phoneRaw))
      e.phone = "Please enter numbers only (no spaces or dashes)."
    else if (phoneRaw.length < 10 || phoneRaw.length > 15)
      e.phone = "Enter a valid phone number (10–15 digits)."

    if (!project) e.project_select = "Please choose a project."

    if (loc && !locationRegex.test(loc))
      e.location = "Use letters, numbers, and common address characters only."

    if (!isCheckboxChecked || !trim(data.agree))
      e.agree = "Please accept the privacy policy to continue."

    return e
  }

  useEffect(() => {
    const projectFromUrl = searchParams.get("project")
    if (projectFromUrl) {
      setFormData((prev) => ({
        ...prev,
        project_select: projectFromUrl,
      }))
    }
  }, [])
  const pathname = usePathname()
  const sectionId = sectionIdProp ?? getContactSectionId(pathname)

  useEffect(() => {
    const match = Locations.find((loc) =>
      pathname
        .toLowerCase()
        .includes(loc.name.toLowerCase().replace(/\s/g, "-")),
    )
    if (match) {
      setFormData((prev) => ({
        ...prev,
        project_select: match.name,
      }))
    }
  }, [pathname])

  useEffect(() => {
    if (typeof window === "undefined") return
    const el = document.getElementById(sectionId)
    if (!el || typeof IntersectionObserver === "undefined") {
      setLoadRecaptcha(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadRecaptcha(true)
          io.disconnect()
        }
      },
      { rootMargin: "320px 0px", threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [sectionId])

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked
    setIsCheckboxChecked(checked)
    setFormData((prev) => ({
      ...prev,
      agree: checked ? "agree" : "",
    }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next.agree
      return next
    })
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
    setRecaptchaError("")
  }

  const resetRecaptcha = () => {
    setRecaptchaToken(null)
    recaptchaRef.current?.reset()
  }

  const handleForm = async (event) => {
    event.preventDefault()
    setError("")
    setThankYouOpen(false)

    const validationErrors = validateFormFields(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (recaptchaSiteKey && !recaptchaToken) {
      setRecaptchaError("Please verify that you are not a robot.")
      return
    }

    setRecaptchaError("")
    setErrors({})
    setIsSubmitting(true)

    const payload = {
      ...formData,
      first_name: trim(formData.first_name),
      last_name: trim(formData.last_name),
      email: trim(formData.email),
      phone: trim(formData.phone),
      project_select: trim(formData.project_select),
      location: trim(formData.location),
      "g-recaptcha-response": recaptchaToken,
    }

    const body = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      body.append(key, value == null ? "" : String(value))
    })

    try {
      const response = await axios.post(
        `${server.SERVER_FROM}contact-form-7/v1/contact-forms/7/feedback`,
        body,
      )

      if (response.data.status === "mail_sent") {
        setThankYouOpen(true)
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          project_select: "",
          location: "",
          agree: "",
        })
        setIsCheckboxChecked(false)
        resetRecaptcha()
      } else {
        const fieldErrors = {}
        const invalidFields = response.data.invalid_fields
        invalidFields?.forEach((field) => {
          fieldErrors[field.field] = field.message
        })
        setErrors(fieldErrors)
        if (response.data.message) {
          setError(response.data.message)
        }
        resetRecaptcha()
      }
    } catch (err) {
      resetRecaptcha()
      const msg =
        err.response?.data?.message ||
        err.message ||
        "An error occurred. Please try again."
      setError(
        typeof msg === "string" ? msg : "An error occurred. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
    <div className="bg-[#5CA2B0] lg:p-10 p-5">
      {" "}
      <div
        className="mt-[100px] lg:w-[80%] mx-auto bg-gray-200 p-6 container"
        id={sectionId}
      >
        <h3 className="lg:text-[46px] text-4xl lg:pb-3 pb-1">Get in touch</h3>
        {/* <h4 className="text-2xl font-light text-gray-600 pb-5">
          <span className="text-red-600">*</span>Required fields
        </h4> */}
        {error && (
          <p className="text-red-600 text-lg mb-4" role="alert">
            {error}
          </p>
        )}
        <form className="py-6" onSubmit={handleForm}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className={`font-light block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer text-gray-900 `}
                value={formData.first_name}
                onChange={handleInput}
                // value={formData.contactNo}
              />
              {errors && errors.first_name && (
                <p
                  id="filled_error_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.first_name}
                </p>
              )}
              <label
                htmlFor="first_name"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black peer-focus:dark:text-black"
              >
                First name<span className="text-red-600">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.last_name}
                onChange={handleInput}
              />
              {errors && errors.last_name && (
                <p
                  id="filled_error_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.last_name}
                </p>
              )}
              <label
                htmlFor="last_name"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black peer-focus:dark:text-black"
              >
                Last name<span className="text-red-600">*</span>
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.email}
                onChange={handleInput}
              />
              {errors && errors.email && (
                <p
                  id="filled_error_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.email}
                </p>
              )}
              <label
                htmlFor="email"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black peer-focus:dark:text-black"
              >
                Email<span className="text-red-600">*</span>
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={15}
                name="phone"
                id="phone"
                className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.phone}
                onChange={handleInput}
              />
              {errors && errors.phone && (
                <p
                  id="filled_error_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.phone}
                </p>
              )}
              <label
                htmlFor="phone"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black peer-focus:dark:text-black"
              >
                Telephone<span className="text-red-600">*</span>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              {/* <label for="underline_select" className="sr-only">Underline select</label> */}
              <label
                htmlFor="project_select"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black peer-focus:dark:text-black"
              >
                Choose project<span className="text-red-600">*</span>
              </label>
              {/* <label for="project_select" className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choose project</label> */}
              {/* <select
              id="project_select"
              name="project_select"
              className="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer "
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
                id="project_select"
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
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.project_select}
                </p>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="location"
                id="location"
                className="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                value={formData.location}
                onChange={handleInput}
              />
              {errors && errors.location && (
                <p
                  id="filled_error_help"
                  className="mt-2 text-xs text-red-600 dark:text-red-400"
                >
                  {errors.location}
                </p>
              )}
              <label
                htmlFor="location"
                className="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your location
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              checked={isCheckboxChecked}
              className={`checkbox-round border-4 bg-gray-100 border-red-500 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                errors && errors.agree
                  ? "border-4 border-red-500"
                  : "text-gray-500"
              }`}
              name="agree"
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-[18px] font-light text-gray-500 dark:text-gray-300"
            >
              I declare that I have read, understood and accept the{" "}
              <a
                href="/privacy-policy"
                className="text-black dark:text-black hover:underline"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
          {errors.agree && (
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">
              {errors.agree}
            </p>
          )}
          <div className="mt-6 min-h-[78px]">
            {loadRecaptcha && recaptchaSiteKey ? (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaSiteKey}
                onChange={handleRecaptchaChange}
                onExpired={() => setRecaptchaToken(null)}
              />
            ) : null}
            {recaptchaError ? (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                {recaptchaError}
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            className="justify-center flex items-center my-6 text-white bg-gray-900 font-light text-[18px] w-full sm:w-auto px-10 py-2.5 text-center hover:bg-black"
            disabled={submitting}
          >
            Submit&nbsp;
            {submitting && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>
        </form>
        <div className="flex lg:flex-row lg:items-center content-between gap-x-2 flex-col sm:flex-col sm:justify-center sm:space-y-0">
          <div className="block">
            <a href="tel:+91 82174 79108">
              {" "}
              <span className="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-blue block">
                <span className="text-e-green">Call:</span> +91 82174 79108
              </span>
            </a>
          </div>
          <div className="inline-block h-[31px] min-h-[0.20em] w-[0.15em] self-stretch bg-e-green lg:block hidden"></div>
          <hr className="h-px border-t lg:w-9/12 w-[75%] border-e-green pb-4 lg:mx-auto lg:hidden block" />
          <div className="block">
            <a href="mailto:contact@ekaya.in">
              <span className="mb-2 lg:text-2xl text-xl font-light tracking-tight text-w-green poppins-light block">
                <span className="text-e-green">Email:</span> contact@ekaya.in
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {thankYouOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
            role="presentation"
            onClick={() => setThankYouOpen(false)}
          >
            <div
              className="relative bg-white max-w-md w-full shadow-xl p-8 md:p-10 text-center"
              role="dialog"
              aria-modal="true"
              aria-labelledby="thank-you-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setThankYouOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-sm"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <h3
                id="thank-you-title"
                className="text-2xl md:text-3xl font-light text-gray-900 mb-4 pr-8"
              >
                Thank you
              </h3>
              <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
                Your message has been sent successfully. We&apos;ll get back to
                you soon.
              </p>
              <button
                type="button"
                onClick={() => setThankYouOpen(false)}
                className="text-white bg-gray-900 font-light text-lg px-10 py-2.5 hover:bg-black w-full sm:w-auto transition-colors"
              >
                Close
              </button>
            </div>
          </div>,
          document.body,
        )
      : null}
    </>
  )
}

export default Contact
