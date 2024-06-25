import React from 'react';

interface AvatarProps {
	path: string;
	width: number;
	height: number;
}

const Avatar = React.memo(({ path, ...style }: AvatarProps) => {
	return (
		<div className='common-circular-avatar' style={{ ...style }}>
			<img src={path} />
		</div>
	);
});

export default Avatar;
