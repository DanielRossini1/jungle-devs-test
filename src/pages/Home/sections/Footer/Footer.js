import { Logo } from "../../../../assets/svgs/Logo";
import { Facebook } from "../../../../assets/svgs/Facebook";
import { Twitter } from "../../../../assets/svgs/Twitter";
import { Instagram } from "../../../../assets/svgs/Instagram";

function Footer() {

  return (
    <footer className="grid lg:grid-cols-3 items-center justify-center lg:justify-between lg:px-10 py-10">
      <div className="mb-5 lg:mb-0 mx-auto lg:mx-0">
        <Logo />
      </div>

      <ul className="flex flex-wrap items-center justify-center">
        <li className="mx-4 my-2 cursor-pointer hover:underline">Share Your Nanny</li>
        <li className="mx-4 my-2 cursor-pointer hover:underline">Our Story</li>
        <li className="mx-4 my-2 cursor-pointer hover:underline">Blog</li>
        <li className="mx-4 my-2 cursor-pointer hover:underline">Terms & Privacy</li>
      </ul>

      <div className="mt-5 lg:mt-0 grid grid-cols-3 lg:justify-self-end gap-4 w-40 lg:mx-0 mx-auto">
        <button>
          <Facebook />
        </button>
        <button>
          <Twitter />
        </button>
        <button>
          <Instagram />
        </button>
      </div>
    </footer>
  )
}

export default Footer;
