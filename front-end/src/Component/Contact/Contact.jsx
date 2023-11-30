import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <div className="w-full max-w-[1311px] mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
              <div className="pb-8 items-start flex grow flex-col px-3 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-3xl font-mons font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Hubungi kami
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                  <a href="tel:+6281348502626">
                    <img
                      src="../../public/logo/Phone.svg"
                      className="hover:bg-milk-white rounded-md aspect-square object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full"
                    />
                  </a>
                  <div className="text-black text-left font-mons text-2xl self-center grow whitespace-nowrap my-auto">
                    <a
                      href="tel:+6281348502626"
                      className="hover:bg-milk-white rounded-md"
                    >
                      0813 4850 2626
                    </a>
                  </div>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                  <a href="https://wa.me/6281348502626">
                    <img
                      src="../../public/logo/Wa.svg"
                      className="hover:bg-milk-white rounded-md aspect-square object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full"
                    />
                  </a>
                  <div className="text-black text-left font-mons text-2xl self-center grow whitespace-nowrap my-auto">
                    <a
                      href="https://wa.me/6281348502626"
                      className="hover:bg-milk-white rounded-md"
                    >
                      0813 4850 2626
                    </a>
                  </div>
                </div>
                <div className="justify-between items-stretch self-stretch flex gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                  <a href="mailto:Visualstore@gmail.com">
                    <img
                      src="../../public/logo/Email.svg"
                      className="hover:bg-milk-white rounded-md aspect-[0.98] object-contain object-center w-[54px] overflow-hidden shrink-0 max-w-full"
                    />
                  </a>
                  <div className="text-black text-left font-mons text-2xl self-center grow whitespace-nowrap my-auto">
                    <a
                      href="mailto:Visualstore@gmail.com"
                      className="hover:bg-milk-white rounded-md"
                    >
                      Visualstore@gmail.com
                    </a>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-9 self-start">
                  <a href="https://instagram.com/visualstorerantauprapat/">
                    <img
                      src="../../public/logo/Instagram.svg"
                      className="hover:bg-milk-white rounded-md aspect-square object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full"
                    />
                  </a>
                  <div className="text-black text-center font-mons text-2xl self-center grow whitespace-nowrap my-auto">
                    <a
                      href="https://instagram.com/visualstorerantauprapat/"
                      className="hover:bg-milk-white rounded-md"
                    >
                      @Visualstorerantauprapat
                    </a>
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-9 max-md:max-w-full max-md:flex-wrap">
                  <a href="https://maps.app.goo.gl/cKPqyAt22tezqBXK9">
                    <img
                      src="../../public/logo/Map.svg"
                      className="hover:bg-milk-white rounded-md aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </a>
                  <div className=" text-black text-justify font-mons text-2xl self-stretch grow shrink basis-auto">
                    <a
                      href="https://maps.app.goo.gl/cKPqyAt22tezqBXK9"
                      className="hover:bg-milk-white rounded-md"
                    >
                      Jl.Wira Asri (Jl.Dewi Sartika), Rantauprapat,Sumatera
                      Utara, Indonesia 21418
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full max-md:ml-0">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1466397655918!2d99.83971307480532!3d2.096899297884353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1c77407d83b%3A0xd6f14efce2699d1!2sVisual%20Store%20Rantauprapat%20Sablon%20kaos!5e0!3m2!1sid!2sid!4v1701362981377!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
