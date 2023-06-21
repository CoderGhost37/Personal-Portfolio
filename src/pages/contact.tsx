import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';

const contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form: any = useRef(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message === 'success') {
          setIsFormSubmitted(true);
          form.current.reset();
        } else {
          setIsFormSubmitted(false);
          alert('Something went wrong. Please try again later.');
        }
      });
  };

  return (
    <div>
      <Head>
        <title>Kushagra Mathur | Contact Me</title>
        <meta
          name='description'
          content='Contact page of my portfolio website'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <Layout classStyles='pt-16'>
          <AnimatedText
            text='Get in Touch'
            classStyles='xl:!text-7xl lg:!text-6xl sm:!text4xl xs:!text-2xl mb-20'
          />
          <div className='flex flex-row md:flex-col justify-center items-start md:items-center w-full'>
            <div className='w-1/3 md:w-full flex flex-col'>
              <div className='flex flex-col justify-start items-center p-4 rounded-lg bg-white dark:bg-zinc-800 dark:text-light hover:bg-gray-100 text-dark shadow-2xl'>
                <MdOutlineEmail className='w-8 h-8' />
                <h4 className='font-bold mt-2'>Email</h4>
                <h5 className='font-semibold text-sm mb-2'>
                  kushagram2002@gmail.com
                </h5>
                <Link href='mailto:kushagram2002@gmail.com' target='_blank'>
                  <p className='text-sm hover:text-blue-500'>Send a Message</p>
                </Link>
              </div>
              <div className='mt-5 flex flex-col justify-start items-center p-4 rounded-lg bg-white dark:bg-zinc-800 dark:text-light hover:bg-gray-100 text-dark shadow-2xl'>
                <BsWhatsapp className='w-8 h-8' />
                <h4 className='font-bold mt-2'>WhatsApp</h4>
                <h5 className='font-semibold text-sm mb-2'>+91 8860263558</h5>
                <Link
                  href='https://api.whatsapp.com/send?phone=+918860263558'
                  target='_blank'
                >
                  <p className='text-sm hover:text-blue-500'>Send a Message</p>
                </Link>
              </div>
            </div>

            {!isFormSubmitted ? (
              <form
                className='w-2/3 md:w-full md:py-20 ml-6 px-10 md:px-0 flex flex-col justify-center items-center'
                ref={form}
                onSubmit={submitForm}
              >
                <div className='w-full mb-2'>
                  <input
                    type='text'
                    name='name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-800 dark:text-light'
                    placeholder='Your Name'
                  />
                </div>
                <div className='w-full my-3'>
                  <input
                    type='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-800 dark:text-light'
                    placeholder='Your Email'
                  />
                </div>
                <div className='w-full mt-2'>
                  <textarea
                    rows={7}
                    className='w-full py-3 px-5 shadow-2xl focus:ring-1 focus:ring-dark rounded md:text-lg dark:bg-zinc-800 dark:text-light'
                    placeholder='Your Message'
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name='message'
                  />
                </div>
                <button
                  type='submit'
                  className='mt-5 rounded-md py-2 px-4 bg-dark dark:text-dark text-light dark:bg-light text-lg font-semibold'
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className='md:mt-20 flex justify-center items-center h-full'>
                <h3 className='font-semibold ml-6 text-dark dark:text-light text-center text-2xl'>
                  Thank you for getting in touch
                </h3>
              </div>
            )}
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default contact;
