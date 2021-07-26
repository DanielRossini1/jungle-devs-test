import payments from '../../../../assets/images/payments.png';

function Payments() {

  return (
    <section style={{ backgroundColor: "#faf9f7" }} className="flex justify-between xl:flex-row flex-col items-center px-3 md:px-56 py-32">

      <div className="max-w-2xl mb-10 xl:mb-0">
        <img src={payments} alt="payments"/>
      </div>

      <div className="max-w-2xl">
        <h3 className="font-medium md:text-3xl text-2xl mb-10 text-center xl:text-left">Shared payments made simple</h3>
        <p className="text-center xl:text-left">
          Sometimes it’s hard enough just sharing a restaurant bill.
          Try sharing that bill week in, week out and you might encounter more than a few snares.
          But not with Hapu. Simply set your rates and our automated payment system takes care of the rest.
          You need never talk money or who owes what.
        </p>
        <p className="font-medium underline mt-20 text-center xl:text-left cursor-pointer" style={{ color: "#5E20A4" }}>
          Read how Bridget’s share (without Hapu) ended over $15
        </p>
      </div>

    </section>
  )
}

export default Payments;
