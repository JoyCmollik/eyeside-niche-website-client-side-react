import React from 'react';
import { useTrail, a } from 'react-spring';

const TrailText = ({ children, ...props }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: 1,
		x: 0,
		height: 110,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div className='trails-main' {...props}>
			<div>
				{trail.map(({ x, height, ...rest }, index) => (
					<a.div
						key={items[index]}
						className='trails-text'
						style={{
							...rest,
							transform: x.interpolate(
								(x) => `translate3d(0,${x}px,0)`
							),
						}}
					>
						<a.div style={{ height }}>{items[index]}</a.div>
					</a.div>
				))}
			</div>
		</div>
	);
};

export default TrailText;
