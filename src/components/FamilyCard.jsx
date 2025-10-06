import React from 'react'

const FamilyCard = ({img}) => {
	return (
			<div className='rounded-[35px] relative !z-50 shadow-xl border-[3px] xl:w-[30rem] parent border-gray-600 cursor-pointer hover: transition-all duration-500 has-[.child:hover]:-rotate-8 '>
			<div className="relative z-20 bg-white rounded-[32px] hover:rotate-0 child -rotate-8  p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/5">
				<div style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}} className="relative rounded-[24px] overflow-hidden h-full"></div>
				<div className='h-7 w-7 rounded-full hidden xl:table absolute -bottom-4 bg-white right-[15rem] border-[3px] border-gray-600 '>

				</div>
			</div>
		</div>
	)
}

export default FamilyCard