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
    const [submitProcessing, setSubmitProcessing] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setSubmitProcessing(true);
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
            setSubmitProcessing(false);
        }).catch((err) => {
            console.log(err);
            setSubmitted(false);
            setSubmitProcessing(false);
        })
    }
    

    return (
        <section className="flex flex-col justify-between min-h-screen">
            <Head>
                <title>Haya Lab | お問い合わせ</title>
                <link rel="icon" href="/logo2.png" />
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

            <div className="mb-10 max-w-7xl mx-auto">
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
                                disabled={submitProcessing}
                                className={submitProcessing 
                                    ? "border-2 border-white bg-gray-200 max-w-2xl w-full text-white font-bold py-2 px-4 rounded-full" 
                                    : "border-2 border-blue-400 hover:border-white hover:bg-[#8EDFF0] hover:shadow-lg max-w-2xl w-full focus:outline-none text-blue-400 hover:text-white font-bold py-2 px-4 rounded-full cursor-pointer"}
                            />
                        </div>
                    }
                </form>

            </div>

            <Footer />
    
        </section>

    )
}

export default Contact 