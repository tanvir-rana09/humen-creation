import React from 'react'

const FamilyStoryCard = ({img}) => {
	return (
				<div className='rounded-[35px] shadow-xl border-[3px] parent border-gray-600 cursor-pointer hover: transition-all duration-500 has-[.child:hover]:-rotate-8 xl:w-[28rem]'>
			<div className="relative z-10 bg-[#FFFCEA] rounded-[32px] hover:rotate-0 child -rotate-8  p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/5 xl:w-[28rem]">
				<div style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}} className="relative rounded-[24px] overflow-hidden h-full"></div>
				<div className='h-7 w-7 rounded-full hidden xl:table absolute -bottom-4 bg-[#FFFCEA] right-[15rem] border-[3px] border-gray-600 '>

				</div>
			</div>
		</div>
	)
}

export default FamilyStoryCard