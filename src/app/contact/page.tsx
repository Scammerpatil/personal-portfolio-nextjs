"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Feel free to get in touch for any inquiries, collaborations, or opportunities. I'm always open to connecting!"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
