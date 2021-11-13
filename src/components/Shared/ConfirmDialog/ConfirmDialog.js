import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useSnackbar } from 'notistack';
import useAxios from '../../../hooks/useAxios';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function ConfirmDialog({
	open,
	setOpen,
	setTriggerFetching,
	deleteId,
}) {
	const { client } = useAxios();
	const { enqueueSnackbar } = useSnackbar();
	const handleConfirm = (isConfirm) => {
		if (isConfirm) {
			client
				.delete(`/admin/order/${deleteId}`)
				.then((response) => {
					setTriggerFetching(true);
					// alert
					enqueueSnackbar('Order Deleted Successfully!', {
						variant: 'success',
						anchorOrigin: {
							vertical: 'bottom',
							horizontal: 'right',
						},
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setOpen(false)}
			>
				<div className='space-y-4 p-4'>
					<h4 className='text-xl'>Are you sure to delete this?</h4>

					<p className='w-full p-4 bg-blue-100 rounded-lg'>
						Once you delete, data will be completely removed from
						the database.
					</p>

					<div className='flex justify-end space-x-2'>
						<button
							className='px-4 py-2 bg-red-100 text-red-500 rounded-lg transition-all duration-300 hover:red-200'
							onClick={() => handleConfirm(false)}
						>
							Disagree
						</button>
						<button
							className='px-4 py-2 bg-green-100 text-green-500 rounded-lg transition-all duration-300 hover:green-200'
							onClick={() => handleConfirm(true)}
						>
							Agree
						</button>
					</div>
				</div>
			</Dialog>
		</div>
	);
}
