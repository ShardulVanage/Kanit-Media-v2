import Image from 'next/image'
import React from "react";
import Link from 'next/link'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'


import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger  } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];


const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]
const caseStudies=[
  {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710581669/yreuke4j36tiam6s1ccc.png",
    client:"1",
    title:"Innovative Solutions",
    description:"Our team prides itself on delivering tailored, innovative solutions crafted specifically for your unique needs. "
  },
    {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582082/n3s5xw867y0a35z8aqkm.png",
    client:"2",
    title:"Transparent Communication",
    description:"We maintain open and transparent communication channels throughout the entire project lifecycle, ensuring you're always informed and involved."
  },
    {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582240/whr7gq5jtx7mn9foyywd.png",
    client:"3",
    title:"Flexible Approach",
    description:"We understand that requirements can change, and our flexible approach allows us to adapt seamlessly to evolving needs, keeping your project on track."
  },
    {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582408/yuekfauz0ghuokrn3i73.png",
    client:"4",
    title:"Proven Track Record",
    description:"With a solid history of successfully completed projects spanning various industries, you can trust us to deliver results that exceed expectations. "
  },
    {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582643/xqaowovjon7gwgqfrvgo.png",
    client:"5",
    title:"Client-Centric Focus",
    description:"Your satisfaction is at the heart of everything we do. We prioritize your needs and goals to ensure a positive and impactful experience. "
  },  
    {
    href:"",
    logo:"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710582774/uxprfm1hhwlx2yocfxuk.png",
    client:"6",
    title:"Continuous Improvement",
    description:"We are committed to staying ahead of the curve by continuously learning and evolving, ensuring that our solutions are always cutting-edge. "
  },
  
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({  }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.client} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-pink-50 sm:p-8">
                <h3>
                  <div className='h-[300px]' href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      width={300}
                      height={300}
                      className=""
                      unoptimized
                    />
                  </div>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Why us</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">

 <div className=" w-full">
      <StickyScroll content={content} />
    </div>
          {/* <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex  lg:w-[45rem]">
              <img
                src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710600768/tgomyqfpnlfktkzuitst.gif"
                className="justify-center lg:justify-center"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Search Engine Optimization (SEO)">
            Optimize your online visibility with our tailored SEO solutions. Increase traffic, engage audiences, and stay ahead of competitors with our expert digital services agency.
            </ListItem>
            <ListItem title="Website / Application / Software Design and Development">
            Craft visually stunning and user-friendly websites with our expert design and development services. We create engaging online experiences tailored to your brand.
            </ListItem>
            <ListItem title="Branding and Marketing">
              Elevate your brand and reach your target audience effectively with our comprehensive branding and marketing solutions.
               Stand out and drive results with our expert strategies.
            </ListItem>
            <ListItem title="Ecommerce Store Setup">
              Launch your online store effortlessly with our professional ecommerce setup services. 
              We handle everything from platform selection to customization, ensuring a seamless shopping experience for your customers.
            </ListItem>
              <ListItem title="Ecommerce Store Setup">
              Maximize your online reach and conversions with our targeted digital advertising solutions.
               From PPC campaigns to social media ads, we drive results that matter to your business.
            </ListItem>
              
          </List> */}
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
    <div className='flex flex-col sm:flex-row justify-center items-center ' >

      <div className="mt-24 sm:mt-32 md:mt-56 sm:pr-24  ">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Creative digital solutions for all brands
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
           We are an online digital marketing agency in Navi Mumbai providing a full range of digital and media solutions.
          </p>
        </FadeIn>
      </div>
       <div className="mt-24 sm:mt-32 md:mt-56  ">
        <FadeIn >
        <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710574218/hoskb7mblit0ktkjaqpe.gif" className='' width={350} height={300}/>
      </FadeIn> 
      </div>
    </div>
      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Kanit Media went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
