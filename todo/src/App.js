import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
	return (
		<FirebaseState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className="container pt-4">
						<Alert />
						<Switch>
							<Route path='/' exact><Home /></Route>
							<Route path='/about' exact><About /></Route>
						</Switch>
					</div>
				</BrowserRouter>
			</AlertState>
		</FirebaseState>
	);
}

export default App;
