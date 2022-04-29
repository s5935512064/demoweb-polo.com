import Head from 'next/head'
import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'
import en from '../../../locales/en'
import th from '../../../locales/th'

const Index = () => {

    const router = useRouter();
    const { id } = router.query
    const { locale } = router;
    const t = locale === 'en' ? en : th;


    return (

        <Layout>
            <Head>
                <title>Corner - Polo Football Park</title>
                <meta name="google-site-verification" content="4ZT9gu8JLi_2XvxmfHtfCzcw5VqGVdDtaxbO4siV2sc" />
                <meta name="author" content="POLO Football Park @ Siam Sindhorn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full relative flex justify-center">
                <div className="w-full h-full bg-white md:rounded-tr-[100px]  max-w-7xl  py-10 relative ">
                    <div className="absolute -top-5 -left-8  hidden md:block z-10">
                        <img src="/assets/Soccer_ball.svg" alt="ball" className="w-24 h-24 roll" />
                    </div>
                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="text-3xl font-medium md:hidden">Polo Corner</p>

                        {t.corner
                            .filter(p => p.id == id)
                            .map((item, index) =>
                                <div key={index} className="w-full md:w-2/3 h-full flex flex-col my-5 md:my-10  ">

                                    <div className="max-h-96 w-full flex justify-center relative overflow-hidden my-2">
                                        <img src={item.img} alt="corner" className="object-cover w-full h-full" />

                                    </div>
                                    <p className="text-3xl font-medium  ">
                                        {item.topic}
                                    </p>
                                    <p className="whitespace-pre-line font-light">{item.content}</p>
                                    <div className='inline-flex justify-between w-auto  mt-4 items-center'>
                                        <p>
                                            แหล่งที่มา: <span className="font-light"> {item.ref} </span>
                                        </p>
                                        <button onClick={() => router.back()} className='font-light rounded-none bg-transparent border-2 border-black max-w-[130px] w-full h-[30px] text-black inline-flex items-center justify-center px-2'>
                                            <svg className="w-5 h-5 mr-2 -ml-1 rotate-180" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
                                            กลับหน้าแรก
                                        </button>

                                    </div>
                                </div>
                            )

                        }

                    </section>

                </div>



            </div>
        </Layout>
    );
}

export default Index;