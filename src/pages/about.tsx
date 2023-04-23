import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import { client, urlFor } from '../../lib/sanity.client'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }: { value: number }) => {
    const ref: any = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])



    return <span ref={ref}></span>
}

const about = ({ about, skills }: { about: any, skills: any }) => {
    return (
        <div>
            <Head>
                <title>Kushagra Mathur | About</title>
                <meta name="description" content="About page of my portfolio website" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout classStyles='pt-16 px-20'>
                    <AnimatedText text='Passion Fuels Purpose' classStyles='lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 mb-16' />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 xl:col-span-4 md:col-span-8 md:mt-5 flex flex-col items-start justify-start md:order-2">
                            <h2 className='mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75'>About Me</h2>
                            <p className='font-medium'>{about.para1}</p>
                            <p className='font-medium my-4'>{about.para2}</p>
                            <p className='font-medium'>{about.para3}</p>
                        </div>
                        <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image src={urlFor(about.img).url()} alt='Kushagra' className='w-full h-auto rounded-2xl' width={800} height={800} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                        </div>
                        <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center xl:mt-5 flex flex-col items-end justify-between md:order-3">
                            <div className="flex flex-col xl:items-center items-end justify-center">
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl inline-block font-bold'>
                                    <AnimatedNumbers value={about.clients} />+
                                </span>
                                <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize dark:text-light/75 text-dark/75'>satisfied clients</h2>
                            </div>
                            <div className="flex flex-col xl:items-center items-end justify-center">
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl inline-block font-bold'>
                                    <AnimatedNumbers value={about.projects} />+
                                </span>
                                <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize dark:text-light/75 text-dark/75'>projects completed</h2>
                            </div>
                            <div className="flex flex-col xl:items-center items-end justify-center">
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl inline-block font-bold'>
                                    <AnimatedNumbers value={about.yoe} />+
                                </span>
                                <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize dark:text-light/75 text-dark/75'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills skills={skills} />
                </Layout>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const aboutQuery = '*[_type == "about"][0]'
    const about = await client.fetch(aboutQuery)

    const skillsQuery = '*[_type == "skills"]'
    const skills = await client.fetch(skillsQuery)

    return {
        props: {
            about,
            skills
        },
        revalidate: 3 * 60 * 60,
    }
}

export default about