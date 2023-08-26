const express = require("express");
const app = express();
const port = 3000;

function containsQueryValues(req) {
	return req.query.value1 && req.query.value2;
}

const add = (value1, value2) => parseInt(value1) + parseInt(value2);
const substract = (value1, value2) => parseInt(value1) - parseInt(value2);
const multiply = (value1, value2) => parseInt(value1) * parseInt(value2);
const divide = (value1, value2) => parseInt(value1) / parseInt(value2);

const statusCodes = {
	OK: 200,
	BadRequest: 400,
	NotFound: 404,
};

const okResult = (result) => ({
	result: result,
	message: "Everything ok!",
});

function badRequestResponse() {
	return {
		sum: null,
		message: "both 'value1' and 'value2' are mandatory in the query string",
	};
}

const myLogger = (req, res, next) => {
	const visitTime = new Date();
	console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
	next();
};
app.use(myLogger);

// GET /add -> BAD REQUEST
// GET /add?value1=10&value2=2 -> OK
app.get("/add", (req, res) => {
	if (containsQueryValues(req)) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		const addResult = add(value1, value2);
		res.status(statusCodes.OK).send(okResult(addResult));
	} else {
		res.status(statusCodes.BadRequest).send(badRequestResponse());
	}
});
// GET /add/10/2 -> OK
// GET /add/10 -> Cannot GET /add/10 (Lo hace express!!)
app.get("/add/:value1/:value2", (req, res) => {
	let value1 = req.params.value1;
	let value2 = req.params.value2;
	const addResult = add(value1, value2);
	res.status(statusCodes.OK).send(okResult(addResult));
});

app.get("/substract", (req, res) => {
	if (containsQueryValues(req)) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		const substractResult = substract(value1, value2);
		res.status(statusCodes.OK).send(okResult(substractResult));
	} else {
		res.status(statusCodes.BadRequest).send(badRequestResponse());
	}
});
app.get("/substract/:value1/:value2", (req, res) => {
	let value1 = req.params.value1;
	let value2 = req.params.value2;
	const substractResult = substract(value1, value2);
	res.status(statusCodes.OK).send(okResult(substractResult));
});

app.get("/multiply", (req, res) => {
	if (containsQueryValues(req)) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		const multiplyResult = multiply(value1, value2);
		res.status(statusCodes.OK).send(okResult(multiplyResult));
	} else {
		res.status(statusCodes.BadRequest).send(badRequestResponse());
	}
});
app.get("/multiply/:value1/:value2", (req, res) => {
	let value1 = req.params.value1;
	let value2 = req.params.value2;
	const multiplyResult = multiply(value1, value2);
	res.status(statusCodes.OK).send(okResult(multiplyResult));
});

app.get("/divide", (req, res) => {
	if (containsQueryValues(req)) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		const divideResult = divide(value1, value2);
		res.status(statusCodes.OK).send(okResult(divideResult));
	} else {
		res.status(statusCodes.BadRequest).send(badRequestResponse());
	}
});
app.get("/divide/:value1/:value2", (req, res) => {
	let value1 = req.params.value1;
	let value2 = req.params.value2;
	const divideResult = divide(value1, value2);
	res.status(statusCodes.OK).send(okResult(divideResult));
});

app.use((req, res) => {
	console.log("THIS REQUEST DIDN'T MATCH ...");
	console.log({
		url: req.url,
		params: req.params,
		query: req.query,
	});

	res.send("no match :(");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

/*
http://localhost:3000/add?value1=10&value2=2
http://localhost:3000/substract?value1=10&value2=2
http://localhost:3000/multiply?value1=10&value2=2
http://localhost:3000/divide?value1=10&value2=2

http://localhost:3000/add/10/2
http://localhost:3000/substract/10/2
http://localhost:3000/multiply/10/2
http://localhost:3000/divide/10/2
*/
