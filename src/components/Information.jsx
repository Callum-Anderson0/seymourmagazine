import Edition from "./Edition";

function Information() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-1 md:p-8">
      <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <Edition />
      </div>
    </div>
  );
}

export default Information;
