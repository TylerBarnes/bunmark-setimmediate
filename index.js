const bench = () =>
	new Promise((res) => {
		const startTime = Date.now();

		const recurse = (i = 0) => {
			if (i === 1000) {
				res(Date.now() - startTime);
				return;
			}

			setImmediate(() => {
				recurse(i + 1);
			});
		};
		recurse();
	});

// so the process doesn't end before the promise resolves
const interval = setInterval(() => {}, 2000);

bench()
	.then((time) => console.log(time))
	.finally(() => clearInterval(interval));
