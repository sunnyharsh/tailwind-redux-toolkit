import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen text-center flex justify-center items-center">
      <div>
        <p className="text-red">URL is wrong</p>
        <p>
          <Link to="/">Go To HomePage</Link>
        </p>
      </div>
    </div>
  );
};
export default Error;
