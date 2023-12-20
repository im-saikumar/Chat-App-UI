import React from "react";

const Header = () => {
  return (
    <nav
      className="bg-white flex center "
      style={{ height: "5vh", justifyContent:"space-between" }}
    >
      <div>
        <img
          style={{ objectFit: "cover", width: "4vh", height: "4vh", margin:"10px 20px" }}
          src="https://cdn-icons-png.flaticon.com/512/7831/7831103.png"
          alt="preview"
        />
      </div>
      <p className="font-bold font-white center">CHAT APP</p>
      <div></div>
    </nav>
  );
};

export default Header;
