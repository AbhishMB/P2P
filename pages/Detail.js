import React, { useState } from "react";
import { useTableData } from "./api/TableDataContext";

const Detail = () => {
  const { addTableData } = useTableData();
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [btn, setBtn] = useState("Apply");
  const [showForm, setShowForm] = useState("flex justify-center hidden");

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      collegeName,
      email,
      branch,
      year,
    };
    // sending as prop
    addTableData(formData);

    // Reseting form
    setName("");
    setCollegeName("");
    setEmail("");
    setBranch("");
    setYear("");
    //sending confirmation email
    console.log(
      "Sending email: This is an auto-generated confirmation message for the event."
    );
  };

  //event sample
  const jsonData = {
    title: "Building Chatbots using Python",
    description: `Embark on a captivating journey into the world of chatbots at "Let's Learn How to Build Chatbots," an engaging event organized by Peer2Peer. Discover the secrets behind crafting intelligent conversational agents through hands-on workshops, expert insights, and real-world applications. Join us to unleash your creativity, connect with like-minded individuals, and unlock the endless possibilities of AI-powered chatbots. Shape the future of technology and be part of this transformative experience.`,
    date: "June 10, 2023",
    place: "Zoom Meeting",
    time: "4:00 PM - 6:00 PM",
    deadline: "June 5, 2023",
  };
  return (
    <>
      <div className="">
        <div className="bg-green-600 rounded-md p-2 m-2 px-8">
          <div className="text-white font-bold text-3xl sm:text-5xl mb-1">
            {jsonData.title}
          </div>
          <hr className="p-2" />
          <div className="text-white  mb-2">{jsonData.description}</div>
          <hr className="pb-2" />

          <div className="flex justify-between text-white text-sm mb-1">
            <div>{jsonData.date}</div>
            <div>{jsonData.place}</div>
          </div>
          <hr className="pb-2" />
          <div className="flex justify-between text-white text-sm my-2 ">
            <div>{jsonData.time}</div>
            <div>Deadline: {jsonData.deadline}</div>
          </div>
          <button
            className="text-center text-white bg-green-900 px-4 p-2 my-2 rounded-md"
            onClick={(e) => {
              if (showForm == "flex justify-center") {
                setShowForm("flex justify-center hidden");
                setBtn("Apply");
              } else {
                setShowForm("flex justify-center");
                setBtn(<span className="text-red-400">Cancel</span>);
              }
            }}
          >
            {btn}
          </button>
        </div>
      </div>
      <div className={showForm}>
        <form
          onSubmit={handleSubmit}
          className="mb-8 px-4 py-8 w-3/4 bg-green-50 rounded-lg "
        >
          <div className="block sm:flex mb-4 gap-3 text-lg font-medium">
            <div className="sm:w-1/2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="sm:w-1/2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex mb-4 gap-3">
            <div className="w-1/2">
              <label htmlFor="year" className="block  text-lg font-medium">
                Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="sm:w-full p-2 border rounded-md"
                required
              >
                <option value="">Select Year</option>
                <option value="Year 1">1st</option>
                <option value="Year 2">2nd</option>
                <option value="Year 3">3rd</option>
                <option value="Year 4">4th</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="branch" className="block text-lg font-medium">
                Branch
              </label>
              <select
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="sm:w-full p-2 border rounded-md"
                required
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="ISE">ISE</option>
                <option value="CSE AIML">CSE AIML</option>
                <option value="Mech">Mech</option>
                <option value="5">Civil</option>
                <option value="6">Others</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="collegeName"
              className="block mb-2 text-lg font-medium"
            >
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-3/12 mt-5 py-2 bg-green-700 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Detail;
