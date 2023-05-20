import { Link } from "react-router-dom";
import errorPage from "../assets/404.jpg";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-center text-white">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={errorPage} width={500} alt="Not found" />
        <Link
          to="/"
          className="bg-blue-400 border-2 border-blue-500 px-3 py-1 rounded-md hover:text-slate-200"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
