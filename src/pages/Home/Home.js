import Header from "./sections/Header/Header";
import Annotation from "./sections/Anotation/Anotation";
import NannyShare from "./sections/NannyShare/NannyShare";
import MailForm from "./sections/MailForm/MailForm";
import Payments from "./sections/Payments/Payments";
import Framework from "./sections/Framework/Framework";
import DailyDiary from "./sections/DailyDiary/DailyDiary";
import BecomeNanny from "./sections/BecomeNanny/BecomeNanny";
import Footer from "./sections/Footer/Footer";
import FooterDescription from "./sections/FooterDescription/FooterDescription";

function Home() {

  return (
    <>
      <Header />
      <Annotation />
      <NannyShare />
      <MailForm />
      <Payments />
      <Framework />
      <DailyDiary />
      <BecomeNanny />
      <Footer />
      <FooterDescription />
    </>
  )
}

export default Home;
