import { Swiper, SwiperSlide } from 'swiper/react'
import { getWindowSize } from '../../lib/getWindowSize';
import 'swiper/css/bundle'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import Link from 'next/link';

SwiperCore.use([Pagination, Navigation]) 

const ProjectsSection = () => {

    const {width, height} = getWindowSize();

    return (
        <div id="Projects" className="flex flex-col min-h-[100vh] h-screen max-w-7xl mx-auto md:mt-5">
        
            <div className="h-1/5 flex items-center justify-center">
                <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-12 border-b-4">Projects</h3>
            </div>
        
            <div className="h-4/5 md:flex items-center md:space-x-4 w-full px-2 md:px-5 pb-6 mb-3 bg-slate-100 rounded-xl">
                <Swiper
                    slidesPerView={1} //一度に表示するスライドの数
                    pagination={{ clickable: true }} 
                    // navigation 
                    loop={false}
                    className="h-full"
                >
                    <SwiperSlide className="flex items-start justify-center h-full" >
                        <div className="w-1/2 flex flex-col items-start justify-center h-full space-y-3 md:space-y-6">

                            <div className="flex items-center justify-center px-3 md:px-12">
                                <p className="text-2xl md:text-4xl whitespace-pre-wrap font-josefin text-gray-600">
                                    fitto
                                </p>
                            </div>

                            {width < 640 ? 
                            <div className="flex flex-col items-start justify-center px-3 md:px-12 space-y-1">
                                <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                    忙しい・疲れた・やる気が出ない。。
                                </p>
                                <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                    そんなサボりマインドでジムがなかなか続かない人の為に、新感覚フィットネスアプリ「fitto」を開発しました。
                                </p>
                            </div>
                            :
                            <div className="flex flex-col items-start justify-center px-3 md:px-12 space-y-1">
                                <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                    忙しい・疲れた・やる気が出ない。。
                                </p>
                                <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                    そんなサボりマインドでジムがなかなか続かない人の為に、
                                </p>
                                <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                    新感覚フィットネスアプリ「fitto」を開発しました。
                                </p>
                            </div>
                            }

                            <div className="flex flex-col w-full items-start justify-center px-3 md:px-12 space-y-2">
                                <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600 border-b-2">
                                    使用テックスタック
                                </p>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        FE
                                    </p>
                                    </div>
                                    <div className="md:w-5/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        React Native, Expo, JavaScript, TailwindCSS
                                    </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        BE&Infra
                                    </p>
                                    </div>
                                    <div className="md:w-5/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        NodeJS, Firebase Services, Cloud Functions by GCP
                                    </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        Others
                                    </p>
                                    </div>
                                    <div className="md:w-5/6">
                                    <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                        Stripe API(決済)、Google Map API(位置情報)
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-start justify-center px-3 md:px-12 pt-3 md:space-x-5">
                                <Link href="https://apps.apple.com/app/fitto/id1619037987">
                                    <img
                                        className="h-11 md:h-12" 
                                        src={"/app_store_logo.svg"}
                                    />
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.fitto" >
                                    <img
                                        className="h-9 md:h-12 mt-2 md:mt-0 " 
                                        src={"/google_play_badge.svg"}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center h-full">
                            <img
                            className="h-full object-contain"
                            src={  width < 640 ? "/fitto_intro_responsive.png" : "/fitto_intro_website.png"}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-start justify-center h-full" >
                        <div className="w-1/2 flex flex-col items-start justify-center h-full space-y-3 md:space-y-10">

                            <div className="flex items-center justify-center px-3 md:px-12">
                                <p className="text-2xl md:text-4xl whitespace-pre-wrap font-josefin text-gray-600">
                                    Haya Lab Website
                                </p>
                            </div>


                            {width < 640 ? 
                                <div className="flex flex-col items-start justify-center px-3 md:px-12 space-y-1">
                                    <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                        今ご覧いただいている本ウェブサイトも、デザイン・要素の構成からスクラッチベースでの開発までワンストップで作成しました。
                                    </p>
                                </div>
                                :
                                <div className="flex flex-col items-start justify-center px-3 md:px-12 space-y-1">
                                    <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                        今ご覧いただいている本ウェブサイトも、
                                    </p>
                                    <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                        デザイン・要素の構成からスクラッチベースでの開発まで
                                    </p>
                                    <p className="text-xs md:text-lg whitespace-pre-wrap font-josefin text-gray-600">
                                        ワンストップで作成しました。
                                    </p>
                                </div>
                            }

                            <div className="flex flex-col w-full items-start justify-center px-3 md:px-12 space-y-2">
                                <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600 border-b-2">
                                    使用テックスタック
                                </p>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            Design
                                        </p>
                                    </div>
                                    <div className="md:w-5/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            AdobeXD, Illustrator
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            FE
                                        </p>
                                    </div>
                                    <div className="md:w-5/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            NextJs, TypeScript, HeadlessUI, TailwindCSS
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row">
                                    <div className="md:w-1/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            BE&Infra
                                        </p>
                                    </div>
                                    <div className="md:w-5/6">
                                        <p className="text-[8px] md:text-sm whitespace-pre-wrap font-josefin text-gray-600">
                                            NodeJS, Nodemailer, Vercel Hosting
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center h-full">
                            <img
                            className="h-full object-contain"
                            src={  width < 640 ? "/haya_lab_responsive.png" : "/haya_lab_website.png"}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProjectsSection;