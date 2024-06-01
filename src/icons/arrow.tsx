export default function Arrow({ left }: { left?: boolean }) {
	return (
		<svg
			width='20px'
			height='20px'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			transform={left ? 'rotate(180)' : ''}
		>
			<path
				d='M6 12H18M18 12L13 7M18 12L13 17'
				stroke='#899295'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
