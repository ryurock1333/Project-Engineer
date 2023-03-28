import React from "react";

function Footer() {
  return (
    <div className="h-45">
      <p className="font-bold text-2xl">Link : </p>
      <ul className="list-disc">
        <li className="ml-20 mt-3">
          http://www.EngineerCMU.org - ศิษย์เก่าวิศวะ ม.ช.
        </li>
        <li className="ml-20 mt-3">
          ต่อไฟฟ้าโฮมเพจ - มีเรื่องน่าสนใจ, reserch ทางด้านไฟฟ้าครับ
          (ปัจจุบันเป็นรองศาสตราจารย์ประจำภาคไฟฟ้า)
        </li>
      </ul>
    </div>
  );
}

export default Footer;
