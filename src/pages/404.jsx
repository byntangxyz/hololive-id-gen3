import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page not found 404 EROR</h1>
      <Link to="/" className="text-center text-blue-500 underline text-4xl">
        KEMBALI
      </Link>
    </>
  );
};

export default NotFound;
