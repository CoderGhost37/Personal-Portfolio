import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

const contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form: any = useRef(null);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })
        setLoading(false)
        setIsFormSubmitted(true)
        form.current.reset()
    }

    return (
        <div>
            <Head>
                <title>Kushagra Mathur | Contact Me</title>
                <meta
                    name='description'
                    content='Contact page of my portfolio website'
                />
            </Head>

            <main className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center'>
                <Layout classStyles='pt-16'>
                    <AnimatedText
                        text='Get in Touch'
                        classStyles='mb-20'
                    />
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full">
                        <div className="w-full md:w-1/3 flex flex-col">
                            <div className="flex flex-col justify-start items-center p-4 rounded-lg bg-white hover:bg-gray-100 text-dark shadow-2xl">
                                <MdOutlineEmail className='w-8 h-8' />
                                <h4 className='font-bold mt-2'>Email</h4>
                                <h5 className='font-semibold text-sm mb-2'>kushagram2002@gmail.com</h5>
                                <Link href='mailto:kushmathur2020@gmail.com' target='_blank'>
                                    <p className='text-sm hover:text-blue-500'>Send a Message</p>
                                </Link>
                            </div>
                            <div className="mt-5 flex flex-col justify-start items-center p-4 rounded-lg bg-white hover:bg-gray-100 text-dark shadow-2xl">
                                <BsWhatsapp className='w-8 h-8' />
                                <h4 className='font-bold mt-2'>WhatsApp</h4>
                                <h5 className='font-semibold text-sm mb-2'>+91 8860263558</h5>
                                <Link href='https://api.whatsapp.com/send?phone=+918860263558' target='_blank'>
                                    <p className='text-sm hover:text-blue-500'>Send a Message</p>
                                </Link>
                            </div>
                        </div>

                        {!isFormSubmitted ? (
                            <form className="w-full md:w-2/3 mt-20 md:mt-0 ml-6 sm:px-10 flex flex-col justify-center items-center" ref={form} onSubmit={submitForm}>
                                <div className="w-full mb-2">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="w-full my-3">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className='w-full mt-2'>
                                    <textarea
                                        rows={5}
                                        className="w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg"
                                        placeholder="Your Message"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        name="message"
                                    />
                                </div>
                                <button type="submit" className="mt-5 rounded-md py-2 px-4 bg-dark text-light text-lg font-semibold">
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        ) : (
                            <div className='mt-20 md:mt-0 flex justify-center items-center h-full'>
                                <h3 className="font-semibold ml-6 text-dark text-center text-2xl">Thank you for getting in touch</h3>
                            </div>
                        )}
                    </div>
                </Layout>
            </main>
        </div>
    )
}

export default contact