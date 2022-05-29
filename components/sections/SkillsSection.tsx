import { BadgeCheckIcon, CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from "react";

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

const SkillsSction = () => {

    const [selectedDevField, setSelectedDevField] = useState(devFields[0])

    return (
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
                                            "
                                        >
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
    )
}

export default SkillsSction;