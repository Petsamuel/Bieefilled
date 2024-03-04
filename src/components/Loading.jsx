import { RiLoader2Fill } from "react-icons/ri";
import smile from "../assets/smile.svg";
import smiles from "../assets/smiles.svg";
function Loading() {
  return (
    <div role="status" className="flex items-center place-content-center h-screen w-screen relative">
      <div className="flex-1 text-center pt-5 justify-center items-center flex relative flex-col">
        <img src={smile} alt="loader" className="w-[30%] lg:w-[25%]" />
        <p className="brandname lg:text-4xl text-2xl animate-pulse">LOADING...</p>
      </div>
    </div>
  );
}

export default Loading;
