import { Calendar } from "../../../../assets/svgs/Calendar";

function BecomeNanny() {

  return (
    <section className="flex justify-between flex-col items-center px-3 py-32">

      <div className="max-w-2xl mb-5">
        <h3 className="font-medium md:text-3xl text-2xl mb-5 text-center">Become a nanny share host</h3>
        <p className="text-center">Takes less than 5 minutes to get started</p>
      </div>

      <div>
        <button style={{ backgroundColor: "#5E20A4", borderRadius: "4px" }} className="flex items-center px-7 py-3">
          <div>
            <Calendar />
          </div>
          <div className="ml-4 text-white">
            <p className="md:text-lg">Create Your Nanny Share</p>
            <p className="text-sm text-left">Takes less than 5 minutes</p>
          </div>
        </button>
      </div>

      <div>
        <p className="font-medium underline mt-5 text-center cursor-pointer" style={{ color: "#5E20A4" }}>
          Or browse local nanny-shares
        </p>
      </div>

    </section>
  )
}

export default BecomeNanny;
