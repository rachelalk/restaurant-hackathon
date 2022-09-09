

function Basket() {
	const basket = localStorage.getItem('basket');
	console.log(typeof basket);
	let basket2 = basket.split(',')
	console.log(basket2);
	return (
		<>
			<main>
				<h2>Basket</h2>
				{basket2.map(item => <p>{item}</p>)}
			</main>
		</>
	);
}

export default Basket;
