import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Bags} from './Bags';
import {Text} from './Text';

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 0;

	return (
		<div style={{flex: 1, backgroundColor: 'gray'}}>
			<div style={{opacity}}>
				<Sequence from={transitionStart} durationInFrames={Infinity}>
					<Bags />
				</Sequence>
				<Sequence from={transitionStart} durationInFrames={Infinity}>
					<Text w={800}/>
				</Sequence>
			</div>
		</div>
	);
};
