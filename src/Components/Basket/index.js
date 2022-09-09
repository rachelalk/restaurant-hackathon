

function Basket() {
	const basket = localStorage.getItem('basket');
	console.log(typeof basket);
	let basket2 = basket.split(',')
	console.log(basket2);
	return (
		<>
			<main>
				<h2>Basket</h2>
				<ul>
				{basket2.map(item => <li>{item}</li>)}

				</ul>
			</main>
		</>
	);
}

export default Basket;
