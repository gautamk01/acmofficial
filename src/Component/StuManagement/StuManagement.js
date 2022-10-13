import Ecard from "../FacultyCard/Ecard";

const StuManagement = () => {
  return (
    <div className="p-2 sm:h-[100vh] pt-[150px] addedbg2" id="StudentSection">
      <div className="mt-10">
        <div className="text-6xl tracking-wider sm:mb-10 text-center">
          Student Management
        </div>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-5">
            <div className="sm:mt-44 mt-16 mx-5">
              <Ecard
                Name="Gautam Krishna M"
                designation="Senior Web Developer"
                image={"bg-[url('https://avatars.githubusercontent.com/u/73305324?v=4')]"}
              />
            </div>
            <div className="grid grid-cols-1 mx-5">
              <div className="my-3">
                <Ecard
                  Name="Gautam Krishna M"
                  designation="Senior Web Developer"
                  image={"bg-[url('https://avatars.githubusercontent.com/u/73305324?v=4')]"}
                />
              </div>
              <div className="my-3">
                <Ecard
                  Name="Gautam Krishna M"
                  designation="Senior Web Developer"
                  image={"bg-[url('https://avatars.githubusercontent.com/u/73305324?v=4')]"}
                />
              </div>
            </div>
            <div className="sm:mt-44 mt-3 mb-10 mx-5">
              <Ecard
                Name="Gautam Krishna M"
                designation="Senior Web Developer"
                image={"bg-[url('https://avatars.githubusercontent.com/u/73305324?v=4')]"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuManagement;
