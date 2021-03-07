const express = require("express");
const { Client } = require("pg");

const client = new Client({
	user: "challenger",
	host: "localhost",
	database: "challenge",
	password: "challengePass", //If this gets expanded to production use, change password and move to private file
	port: 5432
});

const app = express(); //restructure
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(bodyParser.urlencoded({
	extended: true
}));
const port = 3080;

app.get("/quotes", (req, response) => {
	console.log("retreiveing quotes");
	//get quotes
	client.query('SELECT * FROM quotes ORDER BY id ASC', (err, results) => {
		if (err) {
			console.error(err);
			return;
		}
		for (let row of results.rows) { //change when front end is running
			console.log(row);
		}
		response.status(200).json(results.rows);
		//client.end(); //only in one of the tutorials, look into this
	});
})

app.post("/createQuote",  (req, response) => {
	console.log("creating a quote");
	console.log("Got body: ", req.body);
	const {from, destination, departDate, returnDate, travellers, transportation, contactName, email, price} = req.body;

	//vulnerable to sql injection, fix if going to production
	client.query(`INSERT INTO quotes (departure_location, destination_location, departure_date, return_date, travellers, transportation, contact_name, contact_email, price) 
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [from, destination, departDate, returnDate, travellers, transportation, contactName, email, price], (err, results) => {
			if (err) {
				throw err
			}
			response.status(200).send("Quote added, go back and refresh the page to see it");
		}); 
})

app.listen(port, () => {
	client.connect();
	console.log(`Server listening on port: ${port}`);
})