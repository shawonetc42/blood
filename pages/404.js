// pages/404.js

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-8">404 - Page Not Found</h1>
      <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <p className="text-blue-500 mt-4">Go back to homepage</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
