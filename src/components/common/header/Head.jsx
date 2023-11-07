import React from "react";

const Head = () => {
  return (
    <section className='head' style={{
      backgroundColor: "orange",
      background: "linear-gradient(to right, orange, yellow)",
      padding: "10px 0" /* Reduced vertical padding */
    }}>
      <div className='container flexSB paddingTB'>
        <div className='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a3/NewsX_Logo.png' alt='' />
        </div>
        <div className='ad'>
          <img src='../images/headerb.png' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Head;
