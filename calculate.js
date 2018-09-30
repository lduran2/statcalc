(
	() => {
		let form = document.getElementById('stats');
		let input = form.input;

		form.onsubmit = (
			() => {
				/* get the data and its cardinality */
				let data = input.value.split(',').map((s) => (s.trim() * 1));
				let n = data.length;

				/* algebraic mean */
				let avg = (data.reduce(((sum, x) => (sum + x)), 0))/n;
				/* standard deviation */
				let stdevSum = (data.reduce(((sum, x) => (sum + (Math.pow((x - avg), 2)))), 0));
				let stdev = (Math.sqrt(stdevSum/(n - 1)));
				/* skewedness */
				let skSum = (data.reduce(((sum, x) => (sum + (Math.pow(((x - avg)), 3)))), 0));
				let sk = ((n * skSum)/((Math.pow(stdev, 3))*((n - 1)*(n - 2))));

				/* populate the output fields */
				form.n.value = n;
				form.avg.value = avg;
				form.stdev.value = stdev;
				form.skew.value = sk;

				return false;
			}
		);
	}
)();
