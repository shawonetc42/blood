import Link from 'next/link';

function Button() {
  return (
    <span className="justify-between items-stretch bg-white bg-opacity-20 flex gap-5 px-7 py-5 rounded-xl max-md:px-5">
      <Link href="/">
        <span className="justify-center text-white text-lg font-semibold leading-5 uppercase">
          Home
        </span>
      </Link>
      <Link href="/about">
        <span className="justify-center text-white text-lg font-semibold leading-5 uppercase">
          About Us
        </span>
      </Link>
    </span>
  );
}

export default Button;
