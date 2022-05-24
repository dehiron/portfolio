import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between p-5 max-w-7xl mx-auto">
                {/* <div className="w-full md:flex md:space-x-5 justify-center border-t border-t-blue-200 border-b border-b-gray-200 p-2">
                    <Link href="/privacy-policy"><div className="cursor-pointer"><p className="text-sm py-1">プライバシーポリシー</p></div></Link>
                        <div className="bg-gray-200 md:w-0.5" />
                    <Link href="/terms-of-service"><div className="cursor-pointer"><p className="text-sm py-1">利用規約</p></div></Link>
                        <div className="bg-gray-200 md:w-0.5" />
                    <Link href="/company"><div className="cursor-pointer"><p className="text-sm py-1">運営会社</p></div></Link>
                        <div className="bg-gray-200 md:w-0.5" />
                    <Link href="/contact"><div className="cursor-pointer"><p className="text-sm py-1">お問い合わせ</p></div></Link>
                </div> */}

                {/* <div className="flex py-5">
                    <Link href="/">
                        <img
                            className="h-12 object-cover cursor-pointer"
                            src="/fitto_header_logo.png"
                            // src="https://links.papareact.com/yvf" 
                            alt=""
                        />
                    </Link>
                </div> */}

                {/* <div className="space-y-1">
                    <p className="text-sm">〒150-0013</p>
                    <p className="text-sm">東京都渋谷区恵比寿1-25-3-502</p>
                    <p className="text-sm">Perchcamp株式会社</p>
                    <p className="text-sm">TEL : 070-2683-3956 (代表直通)</p>
                </div> */}

                <div className="w-full flex justify-center mt-10">
                    <p className="text-xs">Copyright ©️ Haya Lab All Rights Reserved.</p>
                </div>
        </footer>
    )
}

export default Footer;