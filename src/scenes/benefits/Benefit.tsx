import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9},
  visible: { opacity: 1, scale: 1}
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage : (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
      variants={childVariant}
      className='rounded-md border-2 border-gray-100 mt-5 px-5 py-16 text-center flex-1 h-full'>
      {/* ICON */}
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 p-4 bg-primary-100 border-gray-100'>
          {icon}
        </div>
      </div>
      {/* TITLE */}
      <h4 className='font-bold'>{title}</h4>
      {/* DESCRIPTION */}
      <p className='my-3'>{description}</p>
      {/* LINK */}
      <AnchorLink
				className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
				onClick={() => setSelectedPage(SelectedPage.ContactUs)}
				href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit