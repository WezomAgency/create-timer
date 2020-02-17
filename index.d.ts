interface TimerFn {
	(fn: () => void, delay = 300): void;
	clear (): void
}

export default function createTimer (defaultDelay = 300): TimerFn;
