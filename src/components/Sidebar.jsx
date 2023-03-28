import React from "react";

function Sidebar() {
  return (
    <div className="h-screen pl-7 bg-stone-700 text-neutral-50">
      <ul className="divide-y">
        <p className="bold text-yellow-500 text-2xl font-Kanit pt-4">รายชื่อ</p>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">
            <p>001-050</p>
          </a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">051-100</a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">101-150</a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">151-200</a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">201-250</a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">251-300</a>
        </li>
        <li className="hover:text-blue-500 mt-2">
          <a href="#">301-320</a>
        </li>
        <li className="mt-2 hover:text-blue-500 hover:underline hover:decoration-blue-500 hover:font-extrabold">
          <a href="#">ภาคพิเศษ</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
