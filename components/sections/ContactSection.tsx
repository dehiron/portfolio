import { PaperAirplaneIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <div className="flex flex-col max-w-7xl mx-auto md:mt-5">
            <div className="h-1/5 flex items-center justify-center">
                <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-12 border-b-4">Contact</h3>
            </div>
            <div className="h-4/5 md:flex flex-col items-center justify-center md:space-x-4 w-full px-5 pb-6 mb-3">
                <div className="">
                    <p className="text-sm md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
                        プロジェクトや業務提携のご提案・その他ご質問やご興味等あればお気軽にご連絡下さい。
                    </p>
                </div>
                <Link href="/contact">
                    <div className="w-4/5 md:w-1/3 flex items-center justify-center border-2 border-blue-400 hover:border-white hover:bg-[#8EDFF0] hover:shadow-lg cursor-pointer group my-10 py-3 md:py-5 rounded-full mx-10">
                        <p className="text-base md:text-xl text-blue-400 group-hover:text-white text-center">
                            ゲット・イン・タッチ
                        </p>
                        <span className="p-3"/>
                        <PaperAirplaneIcon className="w-7 h-7 text-blue-400 group-hover:text-white rotate-90"/>
                    </div>
                </Link>
            </div>
      </div>
    )

}

export default ContactSection;