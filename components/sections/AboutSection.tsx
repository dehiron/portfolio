const AboutSection = () => {
    return (
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
    )
}

export default AboutSection;