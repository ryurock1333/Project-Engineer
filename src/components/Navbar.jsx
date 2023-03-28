import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="bg-yellow-500/50 font-Delicious w-full border-4">
        <p className="text-5xl text-center mb-4 italic text-red-500 pt-4  ">
          Engineer's Gear 20
        </p>
        <p className="text-center font-bold text-xl mb-2 font-Kanit">
          วิศวะ ม.ช. รุ่นที่ 20
        </p>
        <p className="text-center font-bold text-xl pb-4 font-Kanit">
          รอเว็บไซต์
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
