import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useForm, SubmitHandler} from "react-hook-form";
import { useState } from "react";

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    inquiry: string;
}

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await fetch("/api/sendContact", {
            method: "POST",
            body: `
お名前
${data.name}
                
メールアドレス
${data.email}

お問い合わせ内容
${data.inquiry}
            `,
        }).then(() => {
            setSubmitted(true);
        }).catch((err) => {
            console.log(err);
            setSubmitted(false);
        })
    }

    return (

        <div id="terms-of-service" className="max-w-7xl mx-auto">
            <Head>
                <title>Haya Lab | お問い合わせ</title>
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

            <div className="mb-10">

                {/* <div className="flex items-center justify-center bg-blue-200 w-full h-20 md:h-32">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-center text-white">お問い合わせ</h1>
                </div> */}

                <div className="py-8 px-6 md:py-10 md:px-10 space-y-2">
                    <p className="text-lg mb-2">お問い合わせありがとうございます。</p>
                    <p>下記フォームに必要事項を入力・ご確認の上、最下部の送信ボタンを押してください。</p>
                    
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col px-6 md:px-10 mb-10"
                >
                    <label className="block mb-5">
                        <span className="text-gray-700">お名前</span>
                        <span className="text-red-500">（必須）</span>
                        <input 
                            {...register("name", {required: true})}
                            className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-400 outline-none focus:ring" 
                            placeholder="" 
                            type="text">
                        </input>
                    </label>
                    <label className="block mb-5">
                        <span className="text-gray-700">メールアドレス</span>
                        <span className="text-red-500">（必須）</span>
                        <input 
                            {...register("email", {required: true})}
                            className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-400 outline-none focus:ring" 
                            placeholder="" 
                            type="email">    
                        </input>
                    </label>
                    <label className="block mb-5">
                        <span className="text-gray-700">お問い合わせ内容</span>
                        <span className="text-red-500">（必須）</span>
                        <textarea 
                            {...register("inquiry", {required: true})}
                            className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-blue-400 outline-none focus:ring" 
                            placeholder="" 
                            rows={8} 
                        />
                    </label>

                    {/*errors will return when field validation fails */}
                     <div className="flex flex-col p-2">
                        {errors.name && (
                            <span className="text-red-500">⚠️ お名前欄が空白です</span>
                        )}
                        {errors.email && (
                            <span className="text-red-500">⚠️ メールアドレス欄が空白です</span>
                        )}
                        {errors.inquiry && (
                            <span className="text-red-500">⚠️  お問い合わせ内容欄が空白です</span>
                        )}
                    </div>

                    {submitted ? 
                        <div className="flex flex-col p-10 bg-blue-400 text-white">
                            <h3 className="text-3xl font-bold mb-2">
                                 お問い合わせありがとうございます！
                            </h3>
                            <p>確認後、頂いたメールアドレスにご連絡差し上げます。</p>
                        </div>
                    :
                        <div className="flex items-center justify-center">
                            <input 
                                type="submit" 
                                className="shadow bg-blue-200 hover:bg-blue-400 focus:shadow-outline max-w-2xl w-full
                                focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                            />
                        </div>
                    }
                </form>

            </div>

            <Footer />
        </div>

    )
}

export default Contact 