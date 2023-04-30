//your JS code here. If required.
function func() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Hello, world!')
		}, 1000)
	})
}

func().then((value) => {
	document.getElementById('output').innerText = value;
})