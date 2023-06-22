import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyle = "bg-primary-300 rounded-lg px-5 py-3 mt-5 placeholder-white w-full"

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isVaild = await trigger();
    if (!isVaild) {
      e.preventDefault();
    }
  }

  return (
    <section
    id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5 }}
          transition={{duration: 0.5}}
          variants={{
            hidden:{opacity: 0, x: -50},
            visible:{opacity: 1, x: 0}
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 text-sm">Take the first step towards achieving your fitness goals and join our gym community today. With state-of-the-art facilities, expert trainers, and a supportive environment, we're here to help you reach your full potential and transform your fitness journey.</p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="md:flex gap-12 mt-10">
          {/* FORM */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{duration: 0.5}}
            variants={{
              hidden:{opacity: 0, y: 50},
              visible:{opacity: 1, y: 0}
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/9e20efbdfa7a615e8f6bc9ba279bbcfb"
              method="POST"
            >
              {/* NAME */}
              <input 
              className={inputStyle}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100
              })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}
              {/* EMAIL */}
              <input 
              className={inputStyle}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              {/* MESSAGE */}
              <textarea 
              className={inputStyle}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
              )}
              <button
              type="submit"
              className="bg-secondary-500 rounded-lg px-20 py-3 mt-5 hover:text-white transition duration-500"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* IMAGE */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden:{opacity: 0, x: -50},
              visible:{opacity: 1, x: 0}
            }}
          >
            <div className="w-full before:absolute md:before:content-evolvetext before:z-[-1] before:-bottom-20 before:right-10">
              <img
              className="w-full"
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs