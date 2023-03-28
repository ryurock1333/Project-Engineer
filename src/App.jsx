import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Link from "@mui/material/Link";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Sectionone from "./components/Sectionone";
// import Sidebar from "./components/Sidebar";
import Tableone from "./components/tableone";

function App() {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title1: "001-050", src: "User" },
    { title2: "051-100", src: "User" },
    { title3: "101-150", src: "User" },
    { title4: "151-200", src: "User" },
    { title5: "201-250", src: "User" },
    { title6: "251-300", src: "User" },
    { title7: "301-320", src: "User" },
    { title8: "ภาคพิเศษ", src: "User" },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* <div className="w-[10%] border-1">
          <Sidebar />
        </div> */}
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-300 h-[1442px] p-5 pt-6 bg-stone-700 relative`}
        >
          <img
            src="./src/assets/img/control.png"
            className={`absolute cursor-pointer -right-5 top-5 w-15 border-2 border-[#081A51] rounded-full ${
              !open && "rotate-180"
            } text-white `}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/img/id-card-1.png"
              className={`cursor-pointer duration-500`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              } ml-10`}
            >
              รายชื่อ
            </h1>
          </div>
          <ul>
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer gap-x-4 text-white flex items-center text-sm hover:text-blue-500 hover:underline hover:decoration-blue-500 hover:font-extrabold hover:bg-light-white rounded-md`}
              >
                <img src={`./src/assets/${menu.src}.png`} />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 ml-10 `}
                >
                  <Link href="Tableone">{menu.title1}</Link>

                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title2}
                  </a>
                  <a href="https://www.youtube.com/watch?v=J3XgHdKTpc0">
                    {menu.title3}
                  </a>
                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title4}
                  </a>
                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title5}
                  </a>
                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title6}
                  </a>
                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title7}
                  </a>
                  <a href="https://www.youtube.com/watch?v=UbeF-7Co9Vs">
                    {menu.title8}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full ">
          <Routes>
            <Route path="/" element={<Sectionone />} />
            <Route path="Tableone" element={<Tableone />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
