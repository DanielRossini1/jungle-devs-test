import cellphone from '../../../../assets/images/cellphone.png';

function DailyDiary() {

  return (
    <section style={{ backgroundColor: "#faf9f7" }} className="flex justify-between flex-col items-center px-3 md:px-56 py-32">

      <div className="mb-20">
        <img src={cellphone} alt="cellphone"/>
      </div>

      <div className="max-w-2xl">
        <h3 className="font-medium md:text-3xl text-2xl mb-10 text-center">Coming soon: Nanny Share Daily Diary!</h3>
        <p className="text-center">
          With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day.
          You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
        </p>
      </div>


    </section>
  )
}

export default DailyDiary;
