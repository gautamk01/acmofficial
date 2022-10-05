import Ecard from "../FacultyCard/Ecard";

const StuManagement = () => {
  return (
    <div className="p-2 h-[120vh] pt-[150px] addedbg2" id="StudentSection">
      <div className="mt-10">
        <div className="text-6xl tracking-wider sm:mb-10 text-center">
          Student Management
        </div>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-5">
            <div className="mt-44 mx-5">
              <Ecard
                Name="Gautam Krishna M"
                designation="Senior Web Developer"
              />
            </div>
            <div className="grid grid-cols-1 mx-5">
              <div className="my-3">
                <Ecard
                  Name="Gautam Krishna M"
                  designation="Senior Web Developer"
                />
              </div>
              <div className="my-3">
                <Ecard
                  Name="Gautam Krishna M"
                  designation="Senior Web Developer"
                />
              </div>
            </div>
            <div className="mt-44 mx-5">
              <Ecard
                Name="Gautam Krishna M"
                designation="Senior Web Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuManagement;
