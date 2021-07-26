import avatar from "../../../../assets/images/avatar.jpg";

function Annotation() {

  return (
    <section className="py-5 flex justify-center items-center md:flex-row flex-col" style={{ border: "1px solid #DFDFDF" }}>
      <div className="rounded-full p-2 shadow w-max mr-5">
        <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full"/>
      </div>
      <div>
        <p className="font-medium text-center">
          <span className="underline cursor-pointer" style={{ color: "#5E20A4" }}>Sarah’s day care available now in North Sydney</span>
        </p>
      </div>
      <div className="font-medium">
        <p className="md:ml-2">Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </section>
  )
}

export default Annotation;
