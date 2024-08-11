/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Nameform(props) {
  const [userInput, setUserInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    this.props.setUsername(userInput)
  };
  return (
    <div className="relative">
      <div className="h-screen w-fulltext-4xl text-center flex justify-center items-center p-40">
        <div className="relative h-3/4 w-[48vw] -translate-y-5">
          <img
            className="absolute w-full -z-50"
            src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a7e6428bb6f9b3ce05b1_Vector%209.svg"
            alt=""
          />
          <div className="h-[35vh] flex items-center justify-center flex-col ">
            <form
              onSubmit={(e) => {
                submitHandler(e);
                console.log('f');
              }}
            >
              <h3 className="text-2xl text-white font-medium">
                welcome to the galactic port, captain
              </h3>
              <input
                className="mt-5 pt-2 pb-5 bg-transparent px-5 text-4xl text-center outline-none capitalize w-4/5 text-white placeholder:text-white"
                type="text"
                placeholder="ENTER YOUR NAME"
                value={userInput}
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="absolute -bottom-12 -right-16 ">
            <button
              type="submit"
              className="px-6 py-3 text-xl font-medium bg-white hover:bg-sky-800 rounded uppercase hover:text-white"
            >
              Start the journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
