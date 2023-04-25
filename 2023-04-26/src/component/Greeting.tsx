const darkMode = false;

function primaryColor() {
	return darkMode ? '#F00' : '#00F';
}

export default function Greeting() {
	// Const style = {
	// 	color: '#F00',
	// };

	return (
		// <p className='greeting'>
		<p style={{
			color: primaryColor(),
		}}>
      Hello!
		</p>
	);
}
