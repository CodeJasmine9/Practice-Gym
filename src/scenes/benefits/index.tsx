import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:"Our gym has modern and well-equipped facilities with the latest fitness equipment."
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:"We offer a wide range of classes for all levels and interests, including HIIT, spin, yoga, and Pilates."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:"Our certified and experienced trainers provide personalized training programs to help you achieve your fitness goals."
  }
]

const container = {
  hidden: {},
  visible:{
    transition: { staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section 
    id="benefits"
    className="py-20 mx-auto w-5/6 min-h-full"
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          className="md:w-3/5 md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5 }}
          transition={{duration: 0.5}}
          variants={{
            hidden:{opacity: 0, x: -50},
            visible:{opacity: 1, x: 0}
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
          className="mt-5 items-center justify-between gap-8 md:flex md:h-[520px]"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5 }}
          variants={container}
          >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 md:mt-28 md:flex gap-20 items-center justify-between">
          {/* GRAPHIC */}
          <img 
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:content-abstractwaves before:z-[1] before:-top-20 before:-left-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5 }}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden:{opacity: 0, x: -50},
                    visible:{opacity: 1, x: 0}
                  }}
                >
                  <HText>MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500"> FIT</span>.</HText>
                </motion.div>
              </div>
            </div>
            {/* CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5 }}
              transition={{delay: 0.2, duration: 0.5}}
              variants={{
                hidden:{opacity: 0, x: 50},
                visible:{opacity: 1, x: 0}
              }}
            >
              <p className="my-5">
                Our gym has millions of happy members who are achieving their fitness goals and feeling great. Join our supportive community and expert trainers to reach your full potential.
              </p>
              <p className="mb-5">
                We also offer personalized fitness plans, a wide range of programs, and classes for every fitness level. Become a member today and join a community of like-minded individuals who share your passion for healthy living.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:content-sparkles before:z-[-1] before:-bottom-20 before:right-20">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits