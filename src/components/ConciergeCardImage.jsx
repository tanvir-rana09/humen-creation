import React from 'react'

const Concierge = ({img}) => {
	return (
		<div className='rounded-[35px] shadow-xl border-[3px] w-[28rem] border-gray-600 -rotate-[16deg]  transition-all duration-500 '>
			<div className="relative z-10 bg-[#FFFCEA] w-[28rem] rounded-[32px] rotate-12 p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/4">
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