import React from "react";
import { BiUpload } from "react-icons/bi";

const Document = () => {
  return (
    <div className="container">
      <h1 className="my-5">CREATE DOCUMENTS</h1>
    <form>  <div
    className="container d-flex justify-content-around flex-wrap rounded"
    style={{ backgroundColor: "#e3e3e3" }}
  >
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        Company owner
      </span>
    </div>
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        Comany Name
      </span>
    </div>
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        TAX-NO
      </span>
    </div>
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        Release Data
      </span>
    </div>
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        Expiry date
      </span>
    </div>
    <div className="col-5 my-4" style={{ position: "relative" }}>
      <input className="w-100 p-2 rounded border border-dark" />
      <span
        className="bg-white border-0 p-1 rounded"
        style={{ position: "absolute", top: -15, left: 10 }}
      >
        Create By
      </span>
    </div>
  </div>
  <div
    className="mt-3 w-50 d-flex p-3"
    style={{ backgroundColor: "#e3e3e3" }}
  >
    <span className="col-8">Send the document file</span>
    <div
      className="col-3 text-center rounded"
      style={{ cursor: "pointer" }}
    >
      <label for="file-upload" class="border border-dark bg-light w-100">
        Add file <BiUpload />
      </label>
      <input id="file-upload" type="file" />
    </div>
  </div>
  <div className="d-flex justify-content-end">
    <button type="submit" className="col-2 text-light fw-bold btn">
      Next
    </button>
  </div></form>
    </div>
  );
};

export default Document;
