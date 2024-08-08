import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  title,
  second_testimonial,
  societies,
  awards,
  second_name,
  third_name,
  third_testimonial,
  fourth_testimonial,
  fifth_testimonial,
  sixth_testimonial,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[30px] items-center text-center mt-0 pt-0'>{title}</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[15px]'>{testimonial}<span className='blue-text-gradient'>{name}</span>{second_testimonial}</p>

      



      <div className='mt-5 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[15px]'>
            <span className='green-text-gradient'>{societies}</span>
          </p>
          <p className='mt-5 text-white font-medium text-[15px]'>
          <span className='pink-text-gradient'>{awards}</span>

          </p>
          <p className=' mt-0 text-white tracking-wider text-[15px]'>{third_testimonial}<span className='blue-text-gradient'>{second_name}</span>{fourth_testimonial}</p>

          <p className=' mt-5 text-white tracking-wider text-[15px]'>{fifth_testimonial}<span className='blue-text-gradient'>{third_name}</span>{sixth_testimonial}</p>

          
        </div>


      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've Learnt</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");