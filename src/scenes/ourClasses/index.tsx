import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Weight training classes use weights and resistance training to help participants build muscle, tone their bodies, and improve their overall fitness.",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Yoga classes focus on physical postures, breathing exercises, and meditation techniques to improve flexibility, strength, balance, and overall wellbeing.",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "Ab core classes include exercises that target the abdominal muscles, helping participants improve their posture, balance, and overall fitness.",
    image: image3
  },
  {
    name: "Adventure Classes",
    description: "Adventure classes challenge participants physically and mentally through outdoor activities such as hiking, rock climbing, and obstacle courses, helping individuals develop their strength, agility, and problem-solving skills.",
    image: image4
  },
  {
    name: "Fitness Classes",
    description: "Fitness classes use a variety of exercises to improve overall fitness, including cardio exercises such as running or dancing, and strength training exercises such as weight lifting or resistance training.",
    image: image5
  },
  {
    name: "Training Classes",
    description: "Training classes are designed to help individuals achieve specific fitness goals, such as sports-specific training or weight loss, and can be tailored to meet the needs of individuals at different fitness levels.",
    image: image6
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section
      id="ourclasses"
      className=''
      >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          {/* HEADER */}
          <motion.div
            className='mx-auto w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{duration: 0.5}}
            variants={{
              hidden:{opacity: 0, x: -50},
              visible:{opacity: 1, x: 0}
            }}
          >
            <div className='md:w-3/5'>
              <HText>Our Classes</HText>
              <p className='py-5'>
                Our gym offers a wide range of classes to meet the needs and interests of all our members. Our classes are designed to be fun, engaging, and effective, with experienced instructors who will guide you through each workout.
                </p>
            </div>
          </motion.div>
          {/* SIDE SCROLLER */}
          <div className='mt-10 h-[338px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
              {classes.map((item: ClassType, index) => (
                <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>    
    </section>
  )
}

export default OurClasses