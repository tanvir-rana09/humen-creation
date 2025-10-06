import React from 'react'

const Concierge = ({img}) => {
	return (
		<div className='rounded-[35px] shadow-xl border-[3px] parent border-gray-600 cursor-pointer hover: transition-all duration-500 has-[.child:hover]:-rotate-8 '>
			<div className="relative z-10 bg-[#FFFCEA] rounded-[32px] hover:rotate-0 child -rotate-8  p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/4">
				<div style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}} className="relative rounded-[24px] overflow-hidden h-full"></div>
				
			</div>
		</div>
	)
}

export default Concierge