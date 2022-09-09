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

function ModalButton({ id }) {
    const [summary, setSummary] = useState("");

    async function getRecipeInfo(id) {
        let response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=6e01c17df2c54f8ca7aa69d7b711aa7d`
        );
        let data = await response.json();
        console.log("Summary: ", data.summary); // string + html ?
        console.log("Ingredients: ", data.extendedIngredients); // array of obj
        setSummary(data.summary);
        return createMarkup(data.summary);
    }
    function createMarkup() {
        console.log("creatmarkupcalled!")
        return { __html: `${summary}` };
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
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
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div dangerouslySetInnerHTML={createMarkup()}></div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalButton;
