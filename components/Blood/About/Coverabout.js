import React from 'react'
import Button from './Button'

function Coverabout() {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[297px] justify-center items-stretch">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59c144d407453a2cc08427eb5c38f9ef2da8655b1b5565b0ae84c9b52dc7f9d9?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
      className="absolute h-full w-full object-cover object-center inset-0"
    />
    <div className="relative flex w-full flex-col justify-center px-16 py-12 items-start max-md:max-w-full max-md:px-5">
      <span className="flex w-[227px] max-w-full flex-col items-stretch ml-52 mt-10 mb-11 max-md:ml-2.5 max-md:mb-10">
        <Button/>
        <div className="justify-center text-white text-4xl font-bold leading-10 uppercase whitespace-nowrap mt-8">
          About Us
        </div>
      </span>
    </div>
  </div>
  )
}

export default Coverabout