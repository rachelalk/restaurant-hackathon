import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

function ModalButton({ id, name, onClick }) {
	const [summary, setSummary] = useState("");

	const API_Key = process.env.REACT_APP_API_KEY;

	async function getRecipeInfo(id) {
		let response = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_Key}`
		);

		let data = await response.json();
		console.log("Summary: ", data.summary); // string + html ?
		console.log("Ingredients: ", data.extendedIngredients); // array of obj
		setSummary(data.summary);
		return createMarkup(data.summary);
	}
	function createMarkup() {
		console.log("creatmarkupcalled!");
		return { __html: `${summary}` };
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				colorScheme="teal"
				className="modal-button"
				variant="outline"
				color="white"
				onClick={() => {
					onOpen();
					getRecipeInfo(id);
				}}
			>
				Open Modal
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div dangerouslySetInnerHTML={createMarkup()}></div>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="teal" variant="solid" onClick={onClick}>
							Add to Basket
						</Button>
						<Button colorScheme="teal" variant="outline" onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
export default ModalButton;
