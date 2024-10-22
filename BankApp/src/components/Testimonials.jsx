import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbakCard';

const Testimonials = () => (
    <section id='clients'  className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]'>
            <h1 className={styles.heading2}>What people are <br className='sm:block hidden '/> saying about us  </h1>
            <div className='w-full md-mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim neque et sagittis placerat</p>
            </div>
        </div>

        <div className='flex flex-wrap justify-center w-full z-[1] feedback-container'>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card}/>
            ))}
        </div>
    </section>
);

export default Testimonials;