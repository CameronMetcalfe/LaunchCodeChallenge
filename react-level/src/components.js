import React from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { getQuotes } from './services';
import { Modal, Navbar, Nav, Form, FormControl, Card, Row, Col, Button } from 'react-bootstrap';
//import { Portlet } from './components'

export class Portlet extends React.Component {
	render() {
		const colSize = "p-2 col-md-" + this.props.colSize;
		const body = this.props.body ? this.props.body : "lorem ipsum"
		return (
			<div className={colSize}>
				<div className="card">
					<div className="card-header bg-white">
						<h4 className="mb-0">
							<i className={this.props.icon + " bat-cyan"}/>
							<span className="pl-2 bat-purple">{this.props.title}</span>
						</h4>
					</div>
					<div className="card-body">{body}</div>
				</div>
			</div>
		);
	}
}

export class ListPortlet extends React.Component {
	render() {
		let listEnd = this.props.listIcon ? <i className={this.props.listIcon + " bat-cyan"}></i> : <span>{this.props.listEnd}</span>;
		let listItems = [];
		for (let i = 0; i < this.props.length; i++) {
			listItems.push(<Row className="list-group-item d-flex justify-content-between">
					<Col md="1" className="justify-content-center align-items-center d-flex"><i class="fas fa-user"/></Col>
					<Col md="8">
						<h5 >Jane Smith</h5>
						<small>Lorem ipsum dolar sit amet</small>
					</Col>
					<Col md="3"className="justify-content-end align-items-center d-flex">{listEnd}</Col>
				</Row>
			);
		}
		let listBody = <div className="list-group">{listItems}</div>
		return (
			<Portlet title={this.props.title} icon={this.props.icon} body={listBody} colSize={this.props.colSize}/>
		);
	}
}

export class ImagePortlet extends React.Component {
	render() {
		const imageBody = <img src={process.env.PUBLIC_URL + this.props.imgSource} className="w-100"/>
		return (
			<Portlet title={this.props.title} icon={this.props.icon} body={imageBody} colSize={this.props.colSize}/>
		);
	}
}

export class DashBoardPortlet extends React.Component {
	render() {
		return (
			<div className="p-2 col-md-12">
				<Card className="bat-background">
					{/* <Card.Title>Welcome to your dashboard</Card.Title> */}
					<Card.Body>
						<div className="row p-4">
							<div className="col-md-4">
								<h1>Welcome to your dashboard</h1>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed suscipit est. Donec lobortis pharetra ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus tempus finibus. Proin blandit urna eget odio tristique, a eleifend eros tempus. Quisque varius ante sapien, vitae lobortis nibh ultrices ut. Maecenas vitae lectus pellentesque, sodales metus eget, condimentum felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vehicula dignissim dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eget arcu ex. Sed rhoncus hendrerit iaculis. Pellentesque fermentum est vel mauris suscipit luctus. Sed ligula eros, hendrerit eget tempor sed, mollis sit amet quam. 
								</div>
							</div>
							<div className="col-md-8">
								<div className="row h-100">
									<div className="col-md-4 d-flex h-100"><span className="d-flex align-self-end">101 New Leads</span></div>
									<div className="col-md-4 d-flex h-100"><span className="d-flex align-self-end">35 Quotes Created</span></div>
									<div className="col-md-4 d-flex h-100"><span className="d-flex align-self-end">40 Pending Orders</span></div>
								</div>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export class LocationsPortlet extends React.Component {
	render() {
		let bars = [];
		let widths = ["w-25", "w-50", "w-75"];
		for (let i = 0; i < 5; i++) {
			bars.push(<Row className="pt-2">
				<Col md="5"><span>Lorem ipsum dolor sit</span></Col>
				<Col md="7" className="d-flex align-items-center"><span className={"bat-bar bat-bg-" + i + " " + widths[i % 3]}></span></Col>
			</Row>)
		}

		const body = (<Row>
			<Col md="4">{bars}</Col>
			<Col md="8"><img src={process.env.PUBLIC_URL + "/worldMap.jpg"}/></Col>
		</Row>);

		return (
			<Portlet title="Popular destinations &amp; Packages" icon="fas fa-paper-plane" colSize={this.props.colSize} body={body}/>
		);
	}
}

export class QuoteList extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: null
		};
	}

	handleClose() {
		this.setState({show: null}); //should be null not id?
	}

	handleShow(id) {
		this.setState({show: id});
	}

	quoteRow = (quote, index) => {
		return (
			<tr key={index} className="" data-toggle="modal">
				<td>{quote.contact_name}</td>
				<td>{quote.destination_location}</td>
				<td>${quote.price}</td>
				<td onClick={() => this.handleShow(index)}>...</td>
				
				<Modal show={this.state.show == index} onHide={() => this.handleClose()}>
					<Modal.Header closeButton closeLabel="close window">
						<Modal.Title>Quote Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>ID#</td>
									<td>{quote.id}</td>
								</tr>
								<tr>
									<td>Contact Name</td>
									<td>{quote.contact_name}</td>
								</tr>
								<tr>
									<td>Price</td>
									<td>${quote.price}</td>
								</tr>
								{/* <tr>
									<td>Contact Phone#</td>
									<td>{quote.contact_phone_number}</td>
								</tr> */}
								<tr>
									<td>Contact Email</td>
									<td>{quote.contact_email}</td>
								</tr>
								<tr>
									<td>Departure Location</td>
									<td>{quote.departure_location}</td>
								</tr>
								<tr>
									<td>Destination</td>
									<td>{quote.destination_location}</td>
								</tr>
								<tr>
									<td>Departure Date</td>
									<td>{quote.departure_date}</td>
								</tr>
								<tr>
									<td>Return Date</td>
									<td>{quote.return_date}</td>
								</tr>
								<tr>
									<td>Travellers</td>
									<td>{quote.travellers}</td>
								</tr>
								<tr>
									<td>Transportation</td>
									<td>{quote.transportation}</td>
								</tr>
							</tbody>
						</table>
					</Modal.Body>
				</Modal>
			</tr>
		);
	}

	render() {
		const quoteTable = this.props.quotes.map((quote, index) => this.quoteRow(quote, index));
		return (
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Destination</th>
						<th scope="col">Price</th>
						<th scope="col">Show Details</th>
					</tr>
				</thead>
				<tbody>
					{quoteTable}
				</tbody>
			</table>
		);
	}
}

export class AddQuotePortlet extends React.Component {
	// handleSubmit = (data) => {
	// 	console.log("started");
	// 	createQuote(data).then(response => {
	// 		console.log(response);
	// 	});
	// 	console.log("submitted");
	// };

	render() {
		const body = (
			<Form method="POST" action="/createQuote" enctype="application/json"> 
				<Row>
					<Col md="6">
						<Form.Group><Form.Control type="text" placeholder="FROM" name="from"/></Form.Group>
						<Form.Group><Form.Control type="text" placeholder="DEPART DATE" name="departDate"/></Form.Group>
						<Form.Group><Form.Control type="number" placeholder="PEOPLE" name="travellers"/></Form.Group>
						<Form.Group><Form.Control type="text" placeholder="NAME" name="contactName"/></Form.Group>
						<Form.Group><Form.Control type="number" placeholder="PRICE" name="price"/></Form.Group>
					</Col>
					<Col md="6">
						<Form.Group><Form.Control type="text" placeholder="DESTINATION" name="destination"/></Form.Group>
						<Form.Group><Form.Control type="text" placeholder="RETURN DATE" name="returnDate"/></Form.Group>
						<Form.Group><Form.Control type="text" placeholder="TRANSPORTATION" name="transportation"/></Form.Group>
						<Form.Group><Form.Control type="email" placeholder="EMAIL" name="email"/></Form.Group>
						<Button type="submit" className="bat-btn">Create a Quote</Button>
					</Col>
				</Row>
			</Form>
		);
		return (
			<Portlet title="Quick Quotes" icon={this.props.icon} colSize={this.props.colSize} body={body}></Portlet>
		);
	}
}

export class QuoteListPortlet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: []
		}

		//this.componentDidMount = this.componentDidMount.bind(this); //may not be necessary
	}
	

	componentDidMount = () => {
		getQuotes().then(quotes => {
			console.log(quotes);
			this.setState({quotes: quotes});
		});
	}

	

	render() {
		const quoteList = <QuoteList quotes={this.state.quotes}/>
		return (
			<Portlet title="Pending Quotes" icon="fas fa-history" colSize="5" body={quoteList}></Portlet>
		);
	}
}