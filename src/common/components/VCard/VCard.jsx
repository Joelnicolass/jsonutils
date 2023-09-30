import React, { useEffect } from "react";

const VCard = () => {
  // download file from drive
  useEffect(() => {
    const url =
      "https://drive.google.com/file/d/16mZggV9bnNzEaT-zfQ7dr7dx5dGtUtSs/view?usp=share_link";

    window.open(url, "_blank");
  }, []);

  return (
    <div>
      <h1>VCard</h1>
    </div>
  );
};

export default VCard;
