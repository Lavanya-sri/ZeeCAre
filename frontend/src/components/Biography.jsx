import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Our hospital appointment booking app is designed to make healthcare access simpler and more convenient. Whether you need to consult with an orthopedist, cardiologist, or any other specialist, our app allows you to browse available doctors across various fields and book appointments effortlessly. By providing detailed profiles of doctors and real-time availability, we ensure that you can quickly find the right specialist for your needs and schedule an appointment that fits your busy life. Our goal is to streamline the process, so you can focus on your health with ease and confidence.
          </p>
          
          
        </div>
      </div>
    </>
  );
};

export default Biography;
