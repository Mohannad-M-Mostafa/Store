import React from "react";
import { Form } from "react-bootstrap";
import { DatePicker } from "react-datepicker";

const Newdocument = () => {
   return (
        <>
       <h1> Create New Campany </h1>
       <Form className="w-full py-3 flex flex-col">
                <div>
                    <label htmlFor="Company-name"> Company Name</label>
                    <input type="text" id="Company-name" name="name" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label htmlFor="owner-name"> company owner</label>
                    <input type="text" id="owner-name" name="name" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label htmlFor="TAX-number"> TAX-number</label>
                    <input type="number" id="phone" name="TAX-number" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label>Release Date:</label>
                    <DatePicker />
                    <label htmlFor="email">Company email</label>
                    <input type="email" id="email" name="Company-email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label htmlFor="Create-name"> Create  By </label>
                    <input type="text" id="Create-name" name="name" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                </div>

                <div>
                     <label htmlFor="fileUpload"> Send the document file </label>
                     <i className="fas fa-upload mr-2"></i> 
                     <input type="file" id="fileUpload" name="fileUpload" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                     <button>Upload</button>
               </div>

                <button to={"/Home"} className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">Next </button>
            </Form></>
    );
};

export default Newdocument;
