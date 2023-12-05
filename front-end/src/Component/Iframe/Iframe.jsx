import React from 'react';

const Iframe = ({ source }) => {
  if (source) {
    return <div>Loading...</div>;
  }
  const src = source;
  return (
    <div className="">
      <div className="aspect-[1.76] object-contain object-center w-full overflow-hidden mt-16 max-md:max-w-full max-md:mt-10">
        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1466397655918!2d99.83971307480532!3d2.096899297884353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1c77407d83b%3A0xd6f14efce2699d1!2sVisual%20Store%20Rantauprapat%20Sablon%20kaos!5e0!3m2!1sid!2sid!4v1701362981377!5m2!1sid!2sid"} title="Iframe"></iframe>
      </div>
    </div>
  );
};

export default Iframe;