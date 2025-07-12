import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container ">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-md-4 py-4 g-4">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="bg-dark text-white p-3 text-center">
				<p>Copyright@ Yilfri Salave 2025</p>
			</div>

		</>
	);
};

export default Home;