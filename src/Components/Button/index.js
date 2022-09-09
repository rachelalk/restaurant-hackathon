import { Button } from "@chakra-ui/react";

function AddButton({onClick}) {
    return (
			
				<Button onClick={onClick} colorScheme="teal" variant="outline">
					Add to Basket
				</Button>
		
		);
}

export default AddButton;