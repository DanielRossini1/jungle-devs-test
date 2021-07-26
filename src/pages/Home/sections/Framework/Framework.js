import framework from '../../../../assets/images/framework.png';

function Framework() {

  return (
    <section style={{ backgroundColor: "#faf9f7" }} className="flex justify-between flex-col items-center px-3 md:px-56 py-32">

      <div className="max-w-2xl">
        <h3 className="font-medium md:text-3xl text-2xl mb-10 text-center">A framework built for the long term</h3>
        <p className="text-center">
          Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success.
          That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
        </p>
        <p className="font-medium underline mt-20 text-center cursor-pointer" style={{ color: "#5E20A4" }}>
          Read how Hapu’s tribal background defines our app
        </p>
      </div>

      <div className="mt-20 hidden xl:block">
        <img src={framework} alt="framework"/>
      </div>

    </section>
  )
}

export default Framework;
