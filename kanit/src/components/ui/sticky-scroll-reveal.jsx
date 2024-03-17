"use client"
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
const contentx=[
{title:"Social Media Management",
description:" Revitalize your online presence with our social media management expertise. We curate compelling content, engage with your audience, and craft tailored strategies to elevate your brands visibility and engagement. Let us handle your social media platforms, ensuring consistent posting schedules and meaningful interactions with your followers. From content creation to community management, well help you build a vibrant online community that drives growth and fosters brand loyalty. ",},
{title:"Search Engine Optimization",
description:"Transform your digital presence with our comprehensive Search Engine Optimization (SEO) strategies. We employ advanced techniques to optimize your website for higher search engine rankings and increased visibility. From keyword research to on-page and off-page optimization, we ensure your website is primed to attract targeted traffic. Our team stays abreast of the latest algorithm updates and industry trends to implement effective SEO tactics.",},
{title:"Digital Advertising (Google Ads, Facebook Ads, etc.)",
description:"Harness the power of digital advertising with our expertly crafted campaigns across platforms like Google Ads, Facebook Ads, and more. We tailor strategies to target your audience effectively, maximizing ROI. Our team conducts thorough market research to identify the most relevant keywords and audience segments for your ads. From ad creation to campaign optimization, we ensure your budget is allocated efficiently to drive results. With our data-driven approach, we continuously analyze performance metrics and make adjustments to improve campaign effectiveness. ",},
{title:"Website Design, Development and Maintenance",
description:"Engage and grow your audience with expertly crafted social media strategies tailored to your brand.Revolutionize your online presence with our comprehensive website design, development, and maintenance services. We specialize in creating visually stunning, user-friendly websites that captivate audiences and drive conversions. Our team collaborates closely with you to understand your brand identity, goals, and target audience, ensuring that every aspect of your website reflects your unique vision. From concept to launch, we meticulously craft custom designs that prioritize aesthetics and functionality.ting",
},
{title:"Graphic Designing",
description:"Transform your brand's visual identity with our expert graphic design services. We specialize in creating stunning visuals that captivate audiences and convey your message effectively. Our team of talented designers collaborates closely with you to understand your brand's personality, values, and objectives, ensuring that every design reflects your unique identity. From logos and branding materials to marketing collateral and social media graphics, we offer a comprehensive range of graphic design solutions tailored to your needs.",},
{title:"Content Creation",
description:"Fuel your digital marketing efforts with our expert content creation services. We specialize in crafting compelling and engaging content that resonates with your audience and drives results. Our team of experienced writers, editors, and content strategists collaborates closely with you to understand your brand, voice, and objectives, ensuring that every piece of content aligns with your goals. From blog posts and articles to social media posts and email newsletters, we offer a wide range of content creation solutions tailored to your needs.",},
{title:"Influencer Marketing",
description:"Leverage the power of influencer marketing to amplify your brand's reach and engagement. Our agency specializes in connecting you with influential personalities who authentically promote your products or services to their dedicated followers. We carefully vet influencers to ensure alignment with your brand values and target audience demographics. From micro-influencers to celebrities, we help you identify the perfect partners to elevate your brand's visibility and credibility. Our strategic approach focuses on creating genuine relationships between your brand and influencers, fostering authentic endorsements that resonate with their followers.",},
]
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = contentx.map((_, index) => index / contentx.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--white)",
    
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--pink-50), var(--pink-100))",
    // "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    // "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    // "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  const img=[
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710655480/ogro2q1enjhgj4t85fuk.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710655564/zvl622skmkiqi7tcnois.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710655875/pvs5fuegsyyqnwuliu4t.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710655996/ywkt4lfmsognedsfgb7o.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710656100/aoggacgbubbmfie8ghix.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710656171/vzt1q2apspejsub6ens4.gif",
    "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1710656254/imhvrrzf9tmcinwk3gwa.gif",


  ]
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-start relative space-x-10 rounded-md  w-full scrollbar-hide  sm:p-12 p-3   shadow-sm shadow-purple-200"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 sm:w-7/12">
        <div className="max-w-2xl">
          {contentx.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-neutral-950 font-display"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="sm:text-lg text-neutral-500 max-w-lg mt-10 font-display"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.img
       src={img[activeCard % img.length]}
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
      
      </motion.img>
    </motion.div>
  );
};
