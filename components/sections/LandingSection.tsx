import Typed from 'react-typed';
import { Link as Scroll } from "react-scroll";
import { ArrowCircleDownIcon } from '@heroicons/react/outline'

const LandingSection = () => {
    return(
        <div className="flex relative min-h-[calc(100vh-66px)] mx-auto bg-gradient-to-tr from-gray-600 to-white pb-6 mb-3">
        <img
          src="/hello_world.png"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex flex-col items-center w-full justify-center">
          <Typed
            className="text-xl md:text-4xl font-semibold font-josefin mt-5 md:mt-10 text-[#323232]"
            strings={["ハヤラボにようこそ。", "Welcome to Haya Lab."]}
            typeSpeed={140}
            backSpeed={120}
            // loop={true}
          />
          <Scroll to="About" smooth={true} duration={600} offset={24}>
              <ArrowCircleDownIcon 
                className="w-10 h-10 md:w-14 md:h-14 mt-6 md:mt-10 text-gray-400 animate-pulse"
              />
          </Scroll>
        </div>
      </div>
    )
}

export default LandingSection;