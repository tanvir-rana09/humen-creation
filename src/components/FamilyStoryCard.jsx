import React from 'react'

const FamilyStoryCard = ({img}) => {
	return (
		<div className='rounded-[35px] shadow-xl border-[3px] w-[23rem] mx-auto cursor-pointer hover:-rotate-6 xl:w-[28rem] border-gray-600 rotate-[0deg]  transition-all duration-500 '>
			<div className="relative z-10 bg-[#FFFCEA] hover:rotate-0 w-[23rem] mx-auto xl:w-[28rem] rounded-[32px] -rotate-[8deg] p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/5">
				<div style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}} className="relative rounded-[24px] overflow-hidden h-full"></div>
				<div className='h-7 w-7 rounded-full table absolute -bottom-4 bg-[#FFFCEA] right-[15rem] border-[3px] border-gray-600 '>

				</div>
			</div>
		</div>
	)
}

export default FamilyStoryCard