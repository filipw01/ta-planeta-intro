import {Composition} from 'remotion';
import {Bags} from './Bags';
import {Text} from './Text';
import {Intro} from './Intro';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={80}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Bags"
				component={Bags}
				durationInFrames={70}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition width={1920} height={1080} fps={30} durationInFrames={70} id='Text' component={Text}/>
		</>
	);
};
