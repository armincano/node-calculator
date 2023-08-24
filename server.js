const express = require("express");
const app = express();
const port = 3000;

const add = (value1, value2) => parseInt(value1) + parseInt(value2);
const substract = (value1, value2) => parseInt(value1) - parseInt(value2);
const multiply = (value1, value2) => parseInt(value1) * parseInt(value2);
const divide = (value1, value2) => parseInt(value1) / parseInt(value2);

const myLogger = (req, res, next) => {
	const visitTime = new Date();
	console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
	next();
};
app.use(myLogger);

app.get("/add", (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		res.send(`<h2>${value1}+${value2} equals ${add(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});
app.get("/add/:value1/:value2", (req, res) => {
	if (Object.keys(req.params).length !== 0) {
		let value1 = req.params.value1;
		let value2 = req.params.value2;
		res.send(`<h2>${value1}+${value2} equals ${add(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});

app.get("/substract", (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		res.send(
			`<h2>${value1}-${value2} equals ${substract(value1, value2)}</h2>`
		);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});
app.get("/substract/:value1/:value2", (req, res) => {
	if (Object.keys(req.params).length !== 0) {
		let value1 = req.params.value1;
		let value2 = req.params.value2;
		res.send(
			`<h2>${value1}-${value2} equals ${substract(value1, value2)}</h2>`
		);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});

app.get("/multiply", (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		res.send(`<h2>${value1}*${value2} equals ${multiply(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});
app.get("/multiply/:value1/:value2", (req, res) => {
	if (Object.keys(req.params).length !== 0) {
		let value1 = req.params.value1;
		let value2 = req.params.value2;
		res.send(`<h2>${value1}*${value2} equals ${multiply(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});

app.get("/divide", (req, res) => {
	if (Object.keys(req.query).length !== 0) {
		let value1 = req.query.value1;
		let value2 = req.query.value2;
		res.send(`<h2>${value1}/${value2} equals ${divide(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
});
app.get("/divide/:value1/:value2", (req, res) => {
	if (Object.keys(req.params).length !== 0) {
		let value1 = req.params.value1;
		let value2 = req.params.value2;
		res.send(`<h2>${value1}/${value2} equals ${divide(value1, value2)}</h2>`);
	} else {
		res.send(`<h2>There are no queries<h2>`);
	}
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
