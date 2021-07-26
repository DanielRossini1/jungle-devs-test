import nannyShare from '../../../../assets/images/nanny-share.png';

function NannyShare() {

  return (
    <section style={{ backgroundColor: "#faf9f7" }} className="flex justify-between xl:flex-row flex-col-reverse items-center px-3 md:px-56 py-32">

      <div className="max-w-2xl">
        <h3 className="font-medium md:text-3xl text-2xl mb-10 text-center xl:text-left">Share your home, <br/> nanny and costs</h3>
        <p className="text-center xl:text-left">
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well,
          fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is,
          with Hapu. <span className="underline font-medium cursor-pointer" style={{ color: "#5E20A4" }}>Hapu means tribe</span> and it’s our
          foundational 3 tribal principles that empowers you to create and manage your own tribe.
          A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
        </p>
        <p className="font-medium underline mt-20 text-center xl:text-left cursor-pointer" style={{ color: "#5E20A4" }}>Ready to get started?</p>
      </div>

      <div className="max-w-2xl mb-10 xl:mb-0">
        <img src={nannyShare} alt="nanny share"/>
      </div>

    </section>
  )
}

export default NannyShare;
