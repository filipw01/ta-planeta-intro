import {Composition} from 'remotion';
import {Intro} from './Intro';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={160}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
