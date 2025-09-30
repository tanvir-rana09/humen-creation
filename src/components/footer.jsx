import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Instagram, Linkedin, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import group from '../assets/Group.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TestimonialCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		purpose: 'Not sure yet'
	});

	// Refs for animations
	const testimonialRef = useRef(null);
	const yellowSectionRef = useRef(null);
	const productsRef = useRef(null);
	const footerRef = useRef(null);

	// InView hooks
	const testimonialInView = useInView(testimonialRef, { once: true, threshold: 0.3 });
	const yellowSectionInView = useInView(yellowSectionRef, { once: true, threshold: 0.3 });
	const productsInView = useInView(productsRef, { once: true, threshold: 0.3 });
	const footerInView = useInView(footerRef, { once: true, threshold: 0.3 });

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

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

	const scaleIn = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { 
			opacity: 1, 
			scale: 1,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	const slideInFromBottom = {
		hidden: { opacity: 0, y: 100 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" }
		}
	};

	const testimonials = [
		{
			rating: 5,
			text: "It's addictive speaking with my avatar as it learns more with every story I record.",
			name: "Sarah Chen",
			title: "Daughter & Caregiver",
			avatar: "SC"
		},
		{
			rating: 5,
			text: "The platform has transformed how our family preserves memories. It's incredibly intuitive.",
			name: "Michael Rodriguez",
			title: "Family Historian",
			avatar: "MR"
		},
		{
			rating: 5,
			text: "Being able to capture my grandmother's stories in such a meaningful way is priceless.",
			name: "Emily Johnson",
			title: "Granddaughter",
			avatar: "EJ"
		}
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
	};

	return (
		<div className="min-h-screen bg-white font-sans pt-20 ">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 pt-20 ">

				<div ref={testimonialRef} className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-40">
					{/* Left - Title */}
					<motion.div 
						initial="hidden"
						animate={testimonialInView ? "visible" : "hidden"}
						variants={fadeInLeft}
						className="flex-1"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
							What families<br />
							<span className='font- font-serif'>are saying</span>
						</h1>
					</motion.div>

					{/* Right - Testimonial Card */}
					<motion.div 
						initial="hidden"
						animate={testimonialInView ? "visible" : "hidden"}
						variants={fadeInRight}
						className="flex-1 max-w-lg w-full"
					>
						<div className="bg-white">
							{/* Stars */}
							<div className="flex gap-1 mb-6">
								{[...Array(testimonials[currentSlide].rating)].map((_, i) => (
									<Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
								))}
							</div>

							{/* Testimonial Text */}
							<div className="mb-8">
								<AnimatePresence mode="wait">
									<motion.p
										key={currentSlide}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="text-lg text-gray-800 leading-relaxed font-light"
									>
										"{testimonials[currentSlide].text}"
									</motion.p>
								</AnimatePresence>
							</div>

							{/* Author Info */}
							<div className="flex items-center justify-between mb-8">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
										<span className="text-gray-700 text-sm font-medium">
											{testimonials[currentSlide].avatar}
										</span>
									</div>
									<div>
										<motion.p
											key={`name-${currentSlide}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.1 }}
											className="font-medium text-gray-900 text-base"
										>
											{testimonials[currentSlide].name}
										</motion.p>
										<motion.p
											key={`title-${currentSlide}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.2 }}
											className="text-sm text-gray-600"
										>
											{testimonials[currentSlide].title}
										</motion.p>
									</div>
								</div>
							</div>

							{/* Navigation */}
							<div className="flex items-center justify-between ">
								<div className="flex items-center gap-4">
									<button
										onClick={prevSlide}
										className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors "
										aria-label="Previous testimonial"
									>
										<ChevronLeft className="w-4 h-4 text-gray-600" />
									</button>
									<button
										onClick={nextSlide}
										className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors "
										aria-label="Next testimonial"
									>
										<ChevronRight className="w-4 h-4 text-gray-600" />
									</button>
								</div>

								{/* Dots Navigation */}
								<div className="flex gap-2 ">
									{testimonials.map((_, index) => (
										<button
											key={index}
											onClick={() => goToSlide(index)}
											className={`w-2 h-2 rounded-full transition-colors  ${index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
												}`}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>


				{/* Main Yellow Section */}
				<div ref={yellowSectionRef} className="relative mb-20">
					<motion.div 
						initial="hidden"
						animate={yellowSectionInView ? "visible" : "hidden"}
						variants={slideInFromBottom}
						className="absolute inset-0 border-[2px] border-gray-600 rounded-[32px] transform -rotate-6 scale-[1.01] opacity-80"
					>
					</motion.div>

					<motion.div 
						initial="hidden"
						animate={yellowSectionInView ? "visible" : "hidden"}
						variants={scaleIn}
						className="relative bg-[#FFE95A] rounded-[32px] overflow-hidden"
					>
						<div className="grid lg:grid-cols-2">
							{/* Left Content */}
							<motion.div 
								initial="hidden"
								animate={yellowSectionInView ? "visible" : "hidden"}
								variants={fadeInLeft}
								className="flex-1 p-8 sm:p-12 lg:p-16 "
							>
								<div className="max-w-lg">
									{/* Icon */}
									<div className="mb-8">
										<img src={group} alt="" />
									</div>

									{/* Heading */}
									<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.1] mb-6 tracking-tight font-serif">
										Our stories really<br />
										can <span className='font-semibold'>live forever.</span>
									</h2>

									{/* Description */}
									<p className="text-lg text-gray-800 leading-relaxed font-light">
										Join the private waitlist today. Founding members will receive exclusive benefits and early access across all pricing tiers.
									</p>
								</div>
							</motion.div>

							{/* Right Form */}
							<motion.div 
								initial="hidden"
								animate={yellowSectionInView ? "visible" : "hidden"}
								variants={fadeInRight}
								className="p-8 xl:p-12"
							>
								<div className="bg-white border-2 border-gray-400 rounded-4xl p-8 shadow-xl max-w-3xl w-full">
									<h3 className="text-4xl font-medium text-gray-900 mb-8 tracking-tight">
										Reserve Your Place
									</h3>

									<form onSubmit={handleSubmit} className="space-y-6">
										<div>
											<div className="text-sm font-medium text-gray-700 mb-3">
												Full Name *
											</div>
											<input
												type="text"
												name="fullName"
												value={formData.fullName}
												onChange={handleInputChange}
												placeholder="Your full name"
												className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none   text-gray-900 placeholder:text-gray-500 bg-white"
												required
											/>
										</div>

										<div>
											<div className="text-sm font-medium text-gray-700 mb-3">
												Email Address *
											</div>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												placeholder="Your@email.com"
												className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none   text-gray-900 placeholder:text-gray-500 bg-white"
												required
											/>
										</div>

										<div>
											<div className="text-sm font-medium text-gray-700 mb-3">
												Who is this for?
											</div>
											<select
												name="purpose"
												value={formData.purpose}
												onChange={handleInputChange}
												className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none   bg-white text-gray-900 appearance-none"
											>
												<option value="Not sure yet">Not sure yet</option>
												<option value="Myself">Myself</option>
												<option value="Family member">Family member</option>
												<option value="Friend">Friend</option>
												<option value="Client">Client</option>
											</select>
										</div>

										<button
											type="submit"
											className="w-fit bg-teal-950 text-white py-3 px-6 rounded-full hover:bg-teal-850 transition-colors  font-medium "
										>
											Reserve My Place
										</button>
									</form>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Other Products Section */}
				<div ref={productsRef} className="my-40 grid xl:grid-cols-2 gap-12 ">
					<motion.h3 
						initial="hidden"
						animate={productsInView ? "visible" : "hidden"}
						variants={fadeInLeft}
						className="text-3xl lg:text-4xl font-light text-gray-900 mb-12 leading-tight tracking-tight"
					>
						Other Products by<br />
						<span className='font-semibold'>The Human Connection Company</span>
					</motion.h3>

					<motion.div 
						variants={staggerContainer}
						initial="hidden"
						animate={productsInView ? "visible" : "hidden"}
						className="grid lg:grid-cols-2 gap-4"
					>
						{/* Winny.chat */}
						<motion.div
							variants={fadeInUp}
							whileHover={{ y: -4 }}
							className="border-2 border-gray-500 rounded-2xl p-4 hover:border-gray-300   cursor-pointer group"
						>
							<div className="flex items-center gap-3 ">
								<span className="text-xl font-medium text-gray-900">Winny.chat</span>
								<ArrowUpRight />
							</div>
							<p className="text-gray-600 leading-relaxed">
								Share and preserve meaningful conversations
							</p>
						</motion.div>

						{/* Storypedia */}
						<motion.div
							variants={fadeInUp}
							whileHover={{ y: -4 }}
							className=" p-4 hover:border-gray-300 cursor-pointer group"
						>
							<div className="mb-">
								<span className="text-xl font-medium text-gray-900">Storypedia</span>
							</div>
							<p className="text-gray-600 leading-relaxed">
								Our underlying platform, "the Wikipedia of human stories"
							</p>
						</motion.div>
						
						<motion.div
							variants={fadeInUp}
							whileHover={{ y: -4 }}
							className=" p-4 hover:border-gray-300   cursor-pointer group"
						>
							<p className="text-xl font-medium text-gray-900">Human Connection Workshops</p>
							<p className="text-sm text-gray-600">Live sessions for teams</p>
						</motion.div>
						
						<motion.div
							variants={fadeInUp}
							whileHover={{ y: -4 }}
							className=" p-4 hover:border-gray-300   cursor-pointer group"
						>
							<p className="text-xl font-medium text-gray-900">Winny Conversation Cards</p>
							<p className="text-sm text-gray-600">Physical decks to spark deeper talks</p>
						</motion.div>
					</motion.div>
				</div>

				{/* Footer */}
				<footer ref={footerRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-12 border-t border-gray-200">
					<motion.div 
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						variants={fadeInLeft}
						className="mb-6 lg:mb-0"
					>
						<div className="text-2xl font-light tracking-wide text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
							Forever<span className="italic">YOU</span>
						</div>
					</motion.div>

					<motion.div 
						initial="hidden"
						animate={footerInView ? "visible" : "hidden"}
						variants={fadeInRight}
						className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
					>
						<span className="text-sm text-gray-600">
							© 2024 The Human Connection Company. All rights reserved.
						</span>
						<motion.div 
							variants={staggerContainer}
							initial="hidden"
							animate={footerInView ? "visible" : "hidden"}
							className="flex gap-4"
						>
							<motion.div 
								variants={scaleIn}
								whileHover={{ scale: 1.1 }}
								className="w-10 h-10 text-gray-700 bg-gray-100 rounded-full p-2 hover:text-gray-900 cursor-pointer transition-colors  flex justify-center items-center"
							>
								<ImInstagram />
							</motion.div>
							<motion.div 
								variants={scaleIn}
								whileHover={{ scale: 1.1 }}
								className="w-10 h-10 text-gray-700 bg-gray-100 rounded-full p-2 hover:text-gray-900 cursor-pointer transition-colors  flex justify-center items-center"
							>
								<FaLinkedin />
							</motion.div>
							<motion.div 
								variants={scaleIn}
								whileHover={{ scale: 1.1 }}
								className="w-10 h-10 text-gray-700 bg-gray-100 rounded-full p-2 hover:text-gray-900 cursor-pointer transition-colors  flex justify-center items-center"
							>
								<FaYoutube />
							</motion.div>
							<motion.div 
								variants={scaleIn}
								whileHover={{ scale: 1.1 }}
								className="w-10 h-10 text-gray-700 bg-gray-100 rounded-full p-2 hover:text-gray-900 cursor-pointer transition-colors  flex justify-center items-center"
							>
								<FaFacebookSquare />
							</motion.div>
						</motion.div>
					</motion.div>
				</footer>
			</div>
		</div>
	);
};

export default TestimonialCarousel;