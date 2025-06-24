export default function MedicineStore() {
  return (
    <>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-2 bg-white">
        <li className="bg-[#4e7f49]">
          <div className="flex flex-col">
            <p className="font-semibold text-xl">name</p>
            <p>konum</p>
            <p>tel</p>
            <div className="flex flex-row">
              <button></button>
              <p>yoldız</p>
              <p>%</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
