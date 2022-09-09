import { Routes, Route, Link } from "react-router-dom";


function Homepage() {
	return (
		<>
			<main>
				<h2>Homepage</h2>
				<p>That feels like an existential question, don't you think?</p>
			</main>
			<nav>
				<Link to="/">Homepage</Link>
				<Link to="/menu">Menu</Link>
				<Link to="/basket">Basket</Link>
			</nav>
		</>
	);
}

export default Homepage;
