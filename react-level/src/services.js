export async function getQuotes() {
	const response = await fetch('/quotes');
	return await response.json();
}

// export async function createQuote(data) {
// 	console.log(data);
// 	const response = await fetch("/createQuote", {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json'},
// 		body: data
// 	})
// 	return await response.json();
// }