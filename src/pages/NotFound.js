import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="not-found">Page Not Found</h1>
      <Link to="">
        <button className="btn btn-success btn-lg">Go Home</button>
      </Link>
    </>
  );
};

export default NotFound;
