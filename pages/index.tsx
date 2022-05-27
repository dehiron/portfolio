import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from "next/image";
import Typed from 'react-typed';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, BadgeCheckIcon, PaperAirplaneIcon, MenuAlt1Icon } from '@heroicons/react/solid'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'
import { Link as Scroll } from "react-scroll";
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { getWindowSize } from '../lib/getWindowSize';
import Link from 'next/link';

SwiperCore.use([Pagination, Navigation]) 

const devFields = [
  { field: 'フロントエンド' },
  { field: 'バックエンド' },
  { field: 'インフラ／DevOps' },
]

const fieldContents = {
  frontEnd: ["React & NextJs", "React Native", "HTML & CSS", "JavaScript & TypeScript", "Tailwind CSS"],
  backEnd: ["NodeJs", "Python (Data Science)", "Ruby (Ruby on Rails)", "PostgreSQL", "MySQL"],
  infra: ["GCP", "Firebaseサービス全般", "Vercel Hosting", "Github", "Slack"]
}

const index = () => {

  const {width, height} = getWindowSize();
  const [selectedDevField, setSelectedDevField] = useState(devFields[0])

  return (
    <section className="relative">
      <Head>
        <title>Haya Lab</title>
        <link rel="icon" href="/logo.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
          rel="stylesheet"
        />
        desription={"恵比寿で働くエンジニアHaya Lab（ハヤラボ）のポートフォリオサイト"}
      </Head>

      <Header />

      {/* *************************************ファーストサイトセクション***************************************************************************************** */}

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

      {/* *************************************ファーストサイトセクション***************************************************************************************** */}



      {/* *************************************Aboutセクション***************************************************************************************** */}

      
      <div id="About" className="flex flex-col min-h-[100vh] md:h-screen max-w-7xl mx-auto md:mt-5">
        <div className="h-1/5 flex items-center justify-center border-blue-400">
          <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-12 border-b-4">About</h3>
        </div>
        <div className="h-4/5 md:flex items-center md:space-x-4 w-full px-5 pt-12 pb-6 mb-3 bg-slate-100 rounded-xl border-blue-400">
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <img
              className="h-52 md:h-96 w-52 md:w-96 object-cover rounded-full shadow-2xl"
              src="/profile_pic.png"
            />
          </div>
          <div className="w-full md:w-3/5 flex-col items-center justify-center space-y-3 md:space-y-6 px-3 py-8 md:px-16 md:py-10" >
            <h3 className="text-xl md:text-2xl font-semibold font-josefin">こんにちは！</h3>
            <p className="text-sm md:text-lg whitespace-pre-wrap font-josefin text-[#323232]">
              東京在住・フリーランスでウェブ＆モバイルアプリケーションエンジニアをやっています、Haya Labの綾 秀博です。
            </p>
            <p className="text-sm md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              UIUX・デザイン・データ構造等のプロダクト設計からコードに落とし込む実装開発まで一貫して行えることを強みとしており、0 → 1 でアイディアを形にすることが大好きです。
            </p>
            {/* <p className="text-sm md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              趣味は映画を観ること、キャンプ、バイク、旅、サウナです。仕事中は引きこもりがちなので、休みの時はアクティブに動き回ります。
            </p> */}
            <p className="text-sm md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              プロジェクトのご提案や業務提携・その他ご質問やご興味等あれば是非お気軽にコンタクトフォームからご連絡下さい。
            </p>
          </div>
        </div>
      </div>
      

      {/* *************************************Aboutセクション***************************************************************************************** */}



      {/* *************************************Skillsセクション***************************************************************************************** */}

      <div id="Skills" className="flex flex-col min-h-[100vh] md:h-screen max-w-7xl mx-3 md:mx-auto md:mt-5" >
        <div className="h-1/5 flex items-center justify-center">
          <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-12 border-b-4">Skills</h3>
        </div>
        <div className="h-4/5 md:flex items-center md:space-x-4 w-full px-5 pt-12 pb-6 mb-3 shadow-md border border-t-gray-200 rounded-xl">
          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-3 md:mt-0 mb-10">
            <div className="flex items-center justify-center mt-3">
              <img 
                className="w-20 h-20 object-cover"
                src="/product_design.png"
              />
            </div>
            <div className="flex items-center justify-center my-5">
              <h3 className="text-xl font-bold text-center">
                プロダクトデザイン
              </h3>
            </div>
            <div className="flex items-center justify-center py-2 px-2 md:px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                UI/UXを考えたデザイン設計、プロダクトリリース初期だけではなくスケール後までをも考慮したデータ構造・インフラ設計など、プロダクトデザイン全般の設計をお任せください。
              </p>
            </div>
            <div className="flex items-center justify-start mt-3 px-2 md:px-5">
              <h3 className="text-lg font-semibold">
                使用ツールと環境
              </h3>
            </div>
            <div className="flex flex-col items-start justify-center px-2 md:px-5 py-3 space-y-3 text-gray-600">
              <div className="flex items-center justidy-center">
                <div className="w-1/">
                  <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                </div>
                <p className="text-xs md:text-sm text-start">Figma</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">
                  Adobe Xd
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">
                  Adobe Illustrator
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">
                  ペンと紙によるスケッチ
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">
                  Google Slide/Docs/SS等のクラウドツール
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 md:w-0.5 md:h-full bg-gray-200"/>

          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-10 md:mt-0 mb-10">
            <div className="flex items-center justify-center mt-3">
              <img 
                className="w-20 h-20 object-cover"
                src="/coding.png"
              />
            </div>
            <div className="flex items-center justify-center my-5">
              <h3 className="text-xl font-bold text-center">
                ソフトウェア開発
              </h3>
            </div>
            <div className="flex items-center justify-center py-2 px-2 md:px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                フロントーエンドーインフラを通して一貫したソフトウェア開発全般をスクラッチベースで行います。WordPress制作もお任せください。
                また、ネット決済に欠かせないStripeAPIの組込みも承ります。
              </p>
            </div>
            <div className="md:flex items-end justify-start mt-3 px-2 md:px-5 space-y-2 md:space-y-0 md:space-x-3">
              <h3 className="text-lg font-semibold">
                使用ツールと環境
              </h3>
              <div className="w-52 md:w-48">
                <Listbox value={selectedDevField} onChange={setSelectedDevField}>
                  <div className="relative">
                    <Listbox.Button 
                      className="
                        relative w-full cursor-default rounded-md border border-blue-400 py-0.5 pl-3 pr-10 text-center
                        focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 
                        focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 
                        focus-visible:ring-offset-orange-300 sm:text-xs md:text-sm
                      "
                    >
                      <span className="text-blue-400">{selectedDevField.field}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-4 w-4 text-blue-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options 
                        className="
                          absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base 
                          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
                        ">
                        {devFields.map((devField, fieldIndex) => (
                          <Listbox.Option
                            key={fieldIndex}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                              }`
                            }
                            value={devField}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {devField.field}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-center px-2 md:px-5 py-3 space-y-3 text-gray-600">
              { selectedDevField.field === "フロントエンド" ? 
                fieldContents.frontEnd.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center" key={contentIndex}>
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-xs md:text-sm text-start">{content}</p>
                  </div>
                ))
                :
                selectedDevField.field === "バックエンド" ? 
                fieldContents.backEnd.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center" key={contentIndex}>
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-xs md:text-sm text-start">{content}</p>
                  </div>
                ))
                :
                selectedDevField.field === "インフラ／DevOps" ? 
                fieldContents.infra.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center" key={contentIndex}>
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-xs md:text-sm text-start">{content}</p>
                  </div>
                ))
                :
                null
              }
            </div>
          </div>

          <div className="w-full h-0.5 md:w-0.5 md:h-full bg-gray-200"/>

          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-10 md:mt-0 mb-10">
            <div className="flex items-center justify-center mt-3">
              <img 
                className="w-20 h-20 object-cover"
                src="/consulting.png"
              />
            </div>
            <div className="flex items-center justify-center my-5">
              <h3 className="text-xl font-bold text-center">
                メンタリング＆コンサルティング
              </h3>
            </div>
            <div className="flex items-center justify-center py-2 px-2 md:px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                スタートアップ立上げ・経営の経験と、外資系保険/国内最大手アパレル企業にてデータサイエンティストとして勤務した経験を活かし、
                メンタリングや各種IT/DXソリューション導入のコンサルティングを承ります。
              </p>
            </div>
            
            <div className="flex items-center justify-start mt-3 px-2 md:px-5">
              <h3 className="text-lg font-semibold">
                経験と実績
              </h3>
            </div>
            <div className="flex flex-col items-start justify-center px-2 md:px-5 py-3 space-y-3 text-gray-600">
              <div className="flex items-center justify-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">0 → 1フェーズのプロダクト・新規事業開発</p>
              </div>
              <div className="flex items-center justify-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">市場ニーズ把握の為のユーザーインタビュー</p>
              </div>
              <div className="flex items-center justify-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">Pd機能改善の為のユーザーヒアリングとテスト</p>
              </div>
              <div className="flex items-center justify-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">業務効率改善に向けたデータ収集スキーム構築</p>
              </div>
              <div className="flex items-center justify-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-xs md:text-sm text-start">トレンドに基づいたIT/DXソリューション提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *************************************Skillsセクション***************************************************************************************** */}



      {/* *************************************Projectsセクション***************************************************************************************** */}

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

                <div className="flex flex-col items-start justify-center px-3 md:px-12 pt-3">
                  <img
                    className="h-8 md:h-12" 
                    src={"/app_store_logo.svg"}
                  />
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

      {/* *************************************Projectsセクション***************************************************************************************** */}



      {/* *************************************Contactセクション***************************************************************************************** */}

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
              {/* <MenuAlt1Icon className="w-7 h-7 text-blue-400 group-hover:text-white rotate-180"/> */}
              <PaperAirplaneIcon className="w-7 h-7 text-blue-400 group-hover:text-white rotate-90"/>
            </div>
          </Link>
        </div>
      </div>

      {/* *************************************Contactセクション***************************************************************************************** */}

      <Footer />
    </section>
  )
}

export default index