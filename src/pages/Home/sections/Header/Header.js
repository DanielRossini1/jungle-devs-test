import { BadgeHeader } from "../../../../assets/svgs/BadgeHeader";
import './Header.css';
import MyButton from "../../../../components/MyButton/MyButton";
import { ImageHeader } from "../../../../assets/svgs/ImageHeader";
import { PlayIcon } from "../../../../assets/svgs/PlayIcon";

function Header() {

  return (
    <header className="header-style">

        <nav className="flex justify-between px-2 sm:px-10">

          <div className="flex items-center">
            <BadgeHeader />
            <ul className="md:flex ml-10 mt-3 hidden">
              <li className="mx-5 cursor-pointer hover:underline">Create Your Nanny Share</li>
              <li className="mx-5 cursor-pointer hover:underline">Browse Shares</li>
              <li className="mx-5 cursor-pointer hover:underline">Our Story</li>
            </ul>
          </div>

          <div className="flex items-center mt-3">
            <MyButton text="Become a Nanny Share Host" type="button" />
            <p className="ml-5 hidden lg:block cursor-pointer hover:underline">Sign In</p>
          </div>

        </nav>

      <div className="flex px-2 xl:px-56 items-center justify-between mt-32">

        <div className="w-full xl:max-w-2xl">
          <h1 className="text-3xl text-center xl:text-5xl xl:text-left font-medium">
            Easily create or join a local nanny share with Hapu
          </h1>
          <p className="xl:text-xl text-center xl:text-left mt-10">
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
          </p>
          <div className="mt-12">
            <button className="flex items-center mx-auto xl:mx-0">
              <div className="flex justify-center items-center" style={{ borderRadius: "500px", backgroundColor: "#00A870", height: "50px", width: "50px" }}>
                <PlayIcon />
              </div>
              <span className="underline xl:text-xl ml-3">
                See hapu in action (27 seconds)
              </span>
            </button>
          </div>
        </div>

        <div className="hidden xl:flex">
          <ImageHeader />
        </div>
      </div>

    </header>
  )
}

export default Header;
