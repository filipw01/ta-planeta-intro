import {interpolate, useCurrentFrame} from 'remotion';

export function useInterpolate(
	transitionStart: number,
	outputRange = 100
): number {
	const frame = useCurrentFrame();
	return interpolate(
		frame - transitionStart / 2,
		[0, ((outputRange / 100) * 4) / 2],
		[outputRange, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
}
