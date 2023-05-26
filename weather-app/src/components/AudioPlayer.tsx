import song from '../music/letItSnow.mp3';
export default function AudioPlayer() {

	return (
		<div className=''>
			<audio src={song} controls />
		</div>
	);
}