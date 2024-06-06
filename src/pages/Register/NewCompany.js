/* eslint-disable jsx-a11y/aria-props */
import React from "react";
import Form from 'react-bootstrap/Form';
export const NewCompany = () => {
    const [data] = ({
        Name: "",
        phoneNumber: "",
        email: "",
        Gender: "",
        address: "",
        // eslint-disable-next-line no-dupe-keys
        Gender: "",
        Date: "",
        TAX: "",
    });

    return (
        <>
            <h1> Create New Campany </h1><form className="w-full py-3 flex flex-col">
                <div>
                    <label htmlFor="your name"> your Name</label>
                    <input type={"text"} id="your name" name="name" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.name} />
                    <label htmlFor="phone"> phone number</label>
                    <input type={"number"} id="phone" name="phone" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.phone} />
                    <label htmlFor="email">Your personal email</label>
                    <input type={"email"} id="email" name="email" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.email} />
                    <label htmLFor="inputGender" className="col-form-label">Gender:</label>
                    <label>Male</label>
                    <Form.Check type="radio" aria-label="Male" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label>Female</label>
                    <Form.Check type="radio" aria-labe2="Female" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" />
                    <label>Raise your company logo</label>
                </div>

                <div>
                    <label htmlFor="Mange"> Mange By </label>
                    <input type={"text"} id="Mange" name="Mangeby" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.Mange} />
                    <label htmlFor="TAX-NO"> TAX-NO</label>
                    <input type={"number"} id="TAX-NO" name="TAX-NO" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.TAX} />
                    <label htmlFor="address">Your company address</label>
                    <input type={"text"} id="address" name="address" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.address} />
                    <label htmlFor="business">Your business</label>
                    <input type={"text"} id="business" name="business" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.business} />
                    <label htmlFor="Date"> Date of establishment  company</label>
                    <input type={"Date"} id="Date" name="Date" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" value={data.Date} />
                </div>

                <button to={"/Newdocument"} className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">Complete </button>
            </form></>
    );

};
