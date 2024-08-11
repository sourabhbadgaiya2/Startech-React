/* eslint-disable no-unused-vars */
import React from 'react';

const structure = () => {
  return (
    <div className="fixed p-4 h-screen w-screen bg-[#F4F9FB]">
      <div className="fixed top-0 left-0 w-full">
        <img
          className="absolute left-0 w-1/2 top-0"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f2ff660acfee8ba5cd3b36_border-left-top.svg"
          alt=""
        />
        <img
          className="absolute right-0 w-1/2 top-0"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/66603af083943342fe214cf9_border-right-top-new.svg"
          alt=""
        />
      </div>
      <div className="fixed left-0 top-1/2 -translate-y-1/2">
        <img
          className="w-24 "
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3025ed598b85f146d736d_border-left-center.svg"
          alt=""
        />
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2">
        <img
          className="w-24"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f302f74ee53940c8b3ece4_border-right-center.svg"
          alt=""
        />
      </div>
      <div className="absolute flex justify-between w-full px-16 left-0 bottom-10">
        <img
          className="h-28"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a44ad564d4d03ce8f94f_Object1.svg"
          alt=""
        />
        <img
          className="h-20"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a486295efb3bb8c5d777_Object2.svg"
          alt=""
        />
      </div>
      <div className="h-full w-full bg-[#DBE4E9] rounded-3xl ">
        <img
          className="h-full w-full object-cover rounded-3xl"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1)-p-1080.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default structure;
