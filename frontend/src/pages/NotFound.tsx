import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-6xl font-serif font-bold text-primary">404</h1>
      <p className="text-xl text-gray-600 font-serif">
        Page not found.
      </p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
