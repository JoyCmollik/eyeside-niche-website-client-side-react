import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
	usePopupState,
	bindTrigger,
	bindMenu,
} from 'material-ui-popup-state/hooks';

const StatusUpdater = () => {
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'demoMenu',
	});

	return (
		<div>
			<button
				className='px-4 py-1 rounded-lg bg-green-100 text-green-500'
				variant='contained'
				{...bindTrigger(popupState)}
			>
				Open Menu
			</button>
			<Menu {...bindMenu(popupState)}>
				<MenuItem onClick={popupState.close}>Cake</MenuItem>
				<MenuItem onClick={popupState.close}>Death</MenuItem>
			</Menu>
		</div>
	);
};

export default StatusUpdater;
