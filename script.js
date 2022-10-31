// grab access to body element
const body = document.querySelector("body");

async function fetchPokemon() {
	// saving the api response in a constant
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
	const data = await response.json();
	const p = document.createElement("p");
	p.innerHTML = data.name;
	body.appendChild(p);
}

fetchPokemon();

// // Callback example for success/error handling
// function funcName(successCallback, errorCallback) {
// 	let num = 1 + 1;
// 	if (num === 2) {
// 		successCallback("Success");
// 	} else {
// 		errorCallback("Failed");
// 	}
// }

// // funcName takes 2 args, successCallback and errorCallback, both will console.log the str
// funcName(
// 	(str) => console.log(str),
// 	(str) => console.log(str)
// );

// // Promise version of funcName
// function funcName() {
// 	let num = 1 + 1;
// 	return new Promise((resolve, reject) => {
// 		if (num === 2) {
// 			resolve("Success");
// 		} else {
// 			reject("Failed");
// 		}
// 	});
// }

// funcName()
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));
