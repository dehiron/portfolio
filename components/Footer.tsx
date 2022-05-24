import Link from "next/link";
import {Link as Scroll} from "react-scroll";

const Footer = () => {
    return (
        <div className="bg-slate-200">
            <footer className="flex flex-col justify-between p-5 max-w-7xl mx-auto">

                    <div className="flex flex-col py-5 my-3 items-center justify-center">
                        <Link href="/">
                            <img
                                className="h-12 object-cover cursor-pointer"
                                src="/logo.png"
                                alt=""
                            />
                        </Link>
                        <p className="text-sm font-josefin pt-2">Haya Lab</p>
                        <p className="text-xs font-josefin pt-2">Produced by Hidehiro Aya</p>
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <Link href="https://www.facebook.com/hidehiro.aya/"><a target="_blank" rel="noreferrer"><img className="w-8 h-8" src="/facebook_icon.png" /></a></Link>
                        <Link href="https://twitter.com/dehironMS"><a target="_blank" rel="noreferrer"><img className="w-8 h-8" src="/twitter_icon.png" /></a></Link>
                        <Link href="https://www.linkedin.com/in/hidehiro-aya-4726b6179/"><a target="_blank" rel="noreferrer"><img className="w-8 h-8" src="/linkedin_icon.png" /></a></Link>
                        <Link href="/contact"><a rel="noreferrer"><img className="w-8 h-8" src="/email_icon.png" /></a></Link>
                    </div>
                    

                    <div className="w-full flex justify-center mt-10">
                        <p className="text-xs">Copyright ©️ Haya Lab All Rights Reserved.</p>
                    </div>
            </footer>
        </div>
    )
}

export default Footer;