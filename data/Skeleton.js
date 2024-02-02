// Loading skeleton component
const LoadingSkeleton = () => {
    return (
      <div className="animate-pulse bg-gray-200 rounded-lg p-4 mb-4">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-10 w-10 bg-gray-300 rounded-full mr-4"></div> {/* Placeholder for profile image */}
      <div className="h-40 bg-gray-300 rounded mb-2"></div> {/* Placeholder for post image */}
    </div>
    );
  };
  export default LoadingSkeleton