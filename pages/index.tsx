import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from "next/image";
import Typed from 'react-typed';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, BadgeCheckIcon } from '@heroicons/react/solid'

const devFields = [
  { field: 'フロントエンド' },
  { field: 'バックエンド' },
  { field: 'インフラ／DevOps' },
]

const fieldContents = {
  frontEnd: ["React & NextJs", "React Native", "HTML & CSS", "JavaScript & TypeScript", "Tailwind CSS"],
  backEnd: ["NodeJs", "Python", "PostgreSQL", "MySQL"],
  infra: ["GCP", "Firebaseサービス全般", "Vercel Hosting", "Github", "Slack"]
}

const index = () => {

  const [selectedDevField, setSelectedDevField] = useState(devFields[0])

  return (
    <section className="relative">
      <Head>
        <title>Lance Lab</title>
        <link rel="icon" href="/logo.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <Header />

      {/* *************************************ファーストサイトセクション***************************************************************************************** */}

      <div className="flex relative min-h-[calc(100vh-66px)] mx-auto bg-gradient-to-tr from-gray-600 to-white">
        <img
          src="/hello_world.png"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex flex-col items-center w-full justify-center">
          <Typed
            className="text-1xl md:text-4xl font-josefin"
            strings={["Welcome to Haya Lab.", "ハヤラボにようこそ！"]}
            typeSpeed={140}
            backSpeed={120}
            // loop={true}
          />
        </div>
      </div>

      {/* *************************************ファーストサイトセクション***************************************************************************************** */}



      {/* *************************************Aboutセクション***************************************************************************************** */}

      <div className="flex flex-col min-h-[100vh] max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-16 border-b-4">About</h3>
        </div>
        <div className="md:flex justify-center">
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <img
              className="h-64 md:h-96 w-64 md:w-96 object-cover rounded-full shadow-2xl"
              src="/profile_pic.png"
            />
          </div>
          <div className="w-full md:w-3/5 flex-col items-center justify-center space-y-3 md:space-y-6 p-16">
            <h3 className="text-xl md:text-2xl font-semibold font-josefin">こんにちは！</h3>
            <p className="text-base md:text-lg whitespace-pre-wrap font-josefin text-[#323232]">
              東京在住・フリーランスでウェブ＆モバイルアプリケーションエンジニアをやっています、Haya Labの綾 秀博です。
            </p>
            <p className="text-base md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              UIUX・デザイン・データ構造等のプロダクト設計からコードに落とし込む実装開発まで一貫して行えることを強みとしており、0 → 1 でアイディアを形にすることを得意としています。
            </p>
            <p className="text-base md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              趣味は映画、キャンプ、バイク、旅、サウナ、美味しいものを食べることと美味しいお酒を飲むこととです。仕事中は引きこもりがちなので、休みの時はアクティブに動き回ります笑
            </p>
            <p className="text-base md:text-lg whitespace-pre-wrap font-josefin  text-[#323232]">
              プロジェクトのご提案や業務提携・その他ご質問やご興味等あれば是非お気軽にコンタクトフォームからご連絡下さい。
            </p>
          </div>
        </div>
      </div>

      {/* *************************************Aboutセクション***************************************************************************************** */}



      {/* *************************************Skillsセクション***************************************************************************************** */}

      <div className="flex flex-col min-h-[100vh] max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h3 className=" text-2xl md:text-4xl font-josefin my-10 md:my-12 border-b-4">Skills</h3>
        </div>
        <div className="md:flex md:space-x-4 w-full px-5 pt-12 pb-20 rounded-xl md:shadow-xl md:border">
          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-3 md:mt-0">
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
            <div className="flex items-center justify-center py-2 px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                UI/UXを考えたデザイン設計、プロダクトリリース初期だけではなくスケール後までをも考慮したデータ構造・インフラ設計など、プロダクトデザイン全般の設計をお任せください。
              </p>
            </div>
            <div className="flex items-center justify-start mt-3 px-5">
              <h3 className="text-lg font-semibold">
                使用ツールと環境
              </h3>
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-3 space-y-3 text-gray-600">
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">Figma</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">
                  Adobe Xd
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">
                  Adobe Illustrator
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">
                  ペンと紙によるスケッチ
                </p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">
                  Google Slide/Docs/SS等のクラウドツール
                </p>
              </div>
            </div>
          </div>

          <div className="w-0.5 bg-gray-200"/>

          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-10 md:mt-0">
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
            <div className="flex items-center justify-center py-2 px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                フロント〜エンド〜インフラを通して一貫したウェブ・モバイルアプリケーション開発全般をスクラッチベースで行います。
                また、ネット決済に欠かせないStripeAPIの組込みも承ります。
              </p>
            </div>
            <div className="md:flex items-end justify-start mt-3 px-5 space-y-2 md:space-y-0 md:space-x-3">
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
                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
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
            <div className=" flex flex-col items-start justify-center px-5 py-3 space-y-3 text-gray-600">
              { selectedDevField.field === "フロントエンド" ? 
                fieldContents.frontEnd.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center">
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-sm text-start" key={contentIndex}>{content}</p>
                  </div>
                ))
                :
                selectedDevField.field === "バックエンド" ? 
                fieldContents.backEnd.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center">
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-sm text-start" key={contentIndex}>{content}</p>
                  </div>
                ))
                :
                selectedDevField.field === "インフラ／DevOps" ? 
                fieldContents.infra.map((content, contentIndex) => (
                  <div className="flex items-center justidy-center">
                    <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                    <p className="text-sm text-start" key={contentIndex}>{content}</p>
                  </div>
                ))
                :
                null
              }
            </div>
          </div>

          <div className="w-0.5 bg-gray-200"/>

          <div className="sm: w-full md:w-1/3 flex-col items-center justify-center mt-10 md:mt-0">
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
            <div className="flex items-center justify-center py-2 px-5">
              <p className="text-sm whitespace-pre-wrap font-josefin text-gray-600">
                スタートアップ立上げ・経営の経験と、外資系保険/国内最大手アパレル企業にてデータサイエンティストとして勤務した経験を活かし、
                メンタリングや各種IT/DXソリューション導入のコンサルティングを承ります。
              </p>
            </div>
            
            <div className="flex items-center justify-start mt-3 px-5">
              <h3 className="text-lg font-semibold">
                経験と実績
              </h3>
            </div>
            <div className="flex flex-col items-start justify-center px-5 py-3 space-y-3 text-gray-600">
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">0 → 1フェーズのプロダクト・新規事業開発</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">顧客ニーズ開拓の為のユーザーインタビュー</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">Pd機能改善の為のユーザーヒアリングとテスト</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">某企業での社内DX推進ツール導入</p>
              </div>
              <div className="flex items-center justidy-center">
                <BadgeCheckIcon className="h-4 w-4 text-gray-500 mr-1"/>
                <p className="text-sm text-start">トレンドに基づいたIT/DXソリューション提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *************************************Skillsセクション***************************************************************************************** */}



      {/* *************************************Projectsセクション***************************************************************************************** */}

      <div className="flex flex-col min-h-[100vh] max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h3 className=" text-2xl md:text-4xl font-josefin my-20 border-b-4">Projects</h3>
        </div>
      </div>

      {/* *************************************Projectsセクション***************************************************************************************** */}



      {/* *************************************Contactセクション***************************************************************************************** */}

      <div className="flex flex-col min-h-[100vh] max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <h3 className=" text-2xl md:text-4xl font-josefin my-20">Contact</h3>
        </div>
        
      </div>

      {/* *************************************Contactセクション***************************************************************************************** */}

      <Footer />
    </section>
  )
}

export default index