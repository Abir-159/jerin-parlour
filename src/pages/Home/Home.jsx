import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import HappyCustomers from "./HappyCustomers/HappyCustomers";
import Reviews from "./Reviews/Reviews";
import ContactUs from "./ContactUs/ContactUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <HappyCustomers />
      <Reviews />
      <ContactUs />
    </div>
  );
}
