import { tools } from "./store/data";
export const Tool = () => {
  return (
    <>
      <h4 className="py-4 px-2 mb-3  text-semibold font-[Poppins] text-2xl text-white mt-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 border-b-2 text-2xl">
          Tech
        </span>
        nology
      </h4>
      <span className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3 lg:h-40 overflow-y-scroll h-32">
        {tools.map((value, key) => (
          <span>
            <div>
              <div key={key} className="my-3">
                <img src={value.svg} alt="alt" className="w-10 h-10" />
                <p className="py-2">{value.name}</p>
              </div>
            </div>
          </span>
        ))}
      </span>
    </>
  );
};
