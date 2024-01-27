// Footer.js
import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col justify-center items-stretch bg-black mt-3">
      <div className="flex-col overflow-hidden relative flex min-h-[53px] max-h-80 w-full items-center pt-12 pb-6 px-16 max-md:max-w-full max-md:px-5">
        {/* Background Image */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6620e4bdf8e08bb8a25897f998fed460a35ad3b8588f9c7957372e6c1f66254a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="absolute h-full w-full object-cover object-center inset-0"
          alt="Background"
        />

        {/* Content */}
        <div className="relative flex w-full max-w-[1376px] flex-col items-stretch mt-3.5 max-md:max-w-full">
          {/* Navigation */}
          <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            {/* Logo */}
            <img
              loading="lazy"
              srcSet="/logo.png"
              className="aspect-[4.05] object-contain object-center w-[178px] overflow-hidden self-center shrink-0 max-w-full my-5"
              alt="Logo"
            />

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {/* Navigation Links Go Here */}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-white opacity-20 my-6" />

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6">
            {/* Social Media Icons Go Here */}
          </div>

          {/* Copyright Text */}
          <p className="text-white text-center text-sm mt-6">
            © 2024 Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
