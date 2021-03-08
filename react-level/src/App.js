import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { ListPortlet, ImagePortlet, DashBoardPortlet, LocationsPortlet, AddQuotePortlet, QuoteListPortlet } from './components'

class App extends React.Component {
	render() {
		const linkClass = "mb-3";
		return (
			<div className="bg-light">
				<Navbar className="bat-nav bat-white-text">
					<Navbar.Brand className="bat-nav">
						<i class="fas fa-th-large pr-3"/>
						<span>Wet Bat Travel</span>
					</Navbar.Brand>
					<Nav className="mr-auto"/>
					<Form inline >
						<FormControl type="text" placeholder="Search" className="mr-sm-2"/>
					</Form>
					<Nav.Link><i class="fas fa-bell"/></Nav.Link>
					<Nav.Link><i class="fas fa-comment-alt"/></Nav.Link>
					<Nav.Link><i class="fas fa-cog"/></Nav.Link>
					<Nav.Link><i class="fas fa-user"/></Nav.Link>
				</Navbar>
				<div className="row w-100">
					<div className="col-md-1">
						<Nav className="sidebar bat-light bat-children-purple p-2 mb-2">
							<Nav.Link className={linkClass}><i class="fas fa-home"/><span className="pl-2">Home</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-dollar-sign"/><span className="pl-2">Quotes</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-list-alt"/><span className="pl-2">Leads</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-paper-plane"/><span className="pl-2">Tours</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-file"/><span className="pl-2">Invoices</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-chart-line"/><span className="pl-0">Analytics</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-user-friends"/><span className="pl-2">Team</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="fas fa-cog"/><span className="pl-2">Admin</span></Nav.Link>
							<Nav.Link className={linkClass}><i class="far fa-life-ring"/><span className="pl-1">Support</span></Nav.Link>
						</Nav>
					</div>
					<div className="col-md-11">
						<div className="content">
							<div className="row">
								<DashBoardPortlet/>
							</div>
							<div className="row">
								<AddQuotePortlet title="Quick Quotes" icon="fas fa-forward" colSize="4"/>
								<QuoteListPortlet colSize="5"/>
								<ListPortlet title="New Leads" icon="far fa-envelope" colSize="3" length="4" listEnd="12:40pm"/>
							</div>
							<div className="row">
								<LocationsPortlet colSize="9"/>
								<ListPortlet title="Team chat" icon="far fa-comment-alt" colSize="3" length="4" listIcon="fas fa-comment-dots"/>
							</div>
							<div className="row">
								<ImagePortlet title="Revenue" icon="fas fa-signal" colSize="4" imgSource="/barGraph.png"/>
								<ImagePortlet title="Potential revenue" icon="fas fa-chart-pie" colSize="5" imgSource="/pieCharts.png"/>
								<ImagePortlet title="Close ratios" icon="fas fa-hands-helping" colSize="3" imgSource="/ratio.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
