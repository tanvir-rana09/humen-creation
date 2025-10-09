import React, { useEffect, useRef, useState } from 'react'
import familyStory from '../../assets/familystory.png'
import vector3 from '../../assets/Vector 36.svg'
import { motion } from 'framer-motion'
import FamilyStoryCard from '../FamilyStoryCard';
import { Check } from 'lucide-react';
import scrollWithOffset from '../../lib/scrollWithOffset';
import AnimatedHeadingAndDescription from '../AnimatedHeadingAndDescription';

const fadeInLeft = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const fadeInRight = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};



const FamilyStorySection = () => {
	const processRef = useRef();
	const [isInView, setIsInView] = useState(false);
	const useElementInView = (ref, threshold = 0.1) => {
		useEffect(() => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setIsInView(true);
					}
				},
				{
					threshold,
					rootMargin: '0px 0px -50px 0px'
				}
			);

			if (ref.current) {
				observer.observe(ref.current);
			}

			return () => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			};
		}, [ref, threshold]);

		return isInView;
	};

	const processInView = useElementInView(processRef, 0.2);
	return (
		<div ref={processRef} className="  bg-[#FFFCEA]">
			<div className='px-5 py-56 mx-auto grid md:grid-cols-2 gap-16 items-center max-w-7xl'>
				<motion.div
				initial="hidden"
				animate={processInView ? "visible" : "hidden"}
				variants={fadeInLeft}
				className="relative"
			>
				<FamilyStoryCard img={familyStory} />
				<div className="absolute -bottom-[29rem] right-[19.5rem] w-[10rem] hidden md:block  h-full ">
					<img src={vector3} alt="" />
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				animate={processInView ? "visible" : "hidden"}
				variants={fadeInRight}
			>
				<AnimatedHeadingAndDescription
					heading={`Your family’s stories. Always your control.`}
					description="ForeverYOU ensures your parents' and grandparents' voices, wisdom, and stories are preserved in a way your family will regularly engage with."
					headingClass="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6"
					descriptionClass="text-base text-gray-700 leading-relaxed mb-8"
				/>


				<motion.div
					variants={staggerContainer}
					initial="hidden"
					animate={processInView ? "visible" : "hidden"}
					className="space-y-4 mb-8"
				>
					<motion.div variants={fadeInRight} className="flex items-start gap-3">
						<Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
						<p className="text-sm text-gray-800">Download or delete anytime</p>
					</motion.div>
					<motion.div variants={fadeInRight} className="flex items-start gap-3">
						<Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
						<p className="text-sm text-gray-800">Choose who can talk to the avatar</p>
					</motion.div>
					<motion.div variants={fadeInRight} className="flex items-start gap-3">
						<Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
						<p className="text-sm text-gray-800">Set boundaries for topics and audiences</p>
					</motion.div>
					<motion.div variants={fadeInRight} className="flex items-start gap-3">
						<Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
						<p className="text-sm text-gray-800">Protected with military-grade encryption & blockchain</p>
					</motion.div>
				</motion.div>

				<button onClick={(e) => scrollWithOffset(e, "waitlist")} className="bg-[#1a3e3e] text-white px-8 py-2.5 rounded-full hover:bg-[#2a4e4e] font-medium">
					Join the Private Waitlist
				</button>
			</motion.div>
			</div>
		</div>
	)
}

export default FamilyStorySection