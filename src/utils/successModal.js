import { Modal } from 'antd';

export default () => {
	Modal.info({
		centered: true,
		icon: null,
		content: '¡Su inscripción al evento ha sido realizada con éxito!',
		bodyStyle: {
			textAlign: 'center',
			width: '90%',
			margin: '1rem'
		},
		okButtonProps: {
			style: {
				width: '5rem',
				height: '2rem',
				fontSize: '0.8rem',
				color: 'white',
				backgroundColor: '#02363D',
				textAlign: 'center',
			}
		}
	});
}