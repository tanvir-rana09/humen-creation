import React from 'react'

const Card = ({img}) => {
	return (
		<div className='rounded-[35px] shadow-xl border-[3px] border-gray-600 rotate-0  transition-all duration-500 '>
			<div className="relative z-10 bg-white rounded-[32px] -rotate-6 p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 aspect-5/5">
				<div style={{
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}} className="relative rounded-[24px] overflow-hidden h-full"></div>
				<div className='h-7 w-7 rounded-full table absolute -top-4 bg-white right-14 border-[3px] border-gray-600 '>

				</div>
			</div>
		</div>
	)
}

export default Card