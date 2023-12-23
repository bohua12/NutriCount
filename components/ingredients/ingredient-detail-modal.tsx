import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import {
  GetIngredientDBColumns,
  NutritionalInfoKeys,
} from "@/models/ingredients";

interface IngredientDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  ingredient: GetIngredientDBColumns;
}
const IngredientDetailModal = (props: IngredientDetailModalProps) => {
  const { isOpen, onClose, ingredient } = props;
  if (!ingredient) {
    return null; // or some fallback UI
  }
  const {
    ingredientName,
    ingredientType,
    nutritionalInfo,
    remarks,
    created_at,
  } = ingredient;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ingredientName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table variant="simple" colorScheme="telegram">
            <TableCaption>Remarks: {remarks ? remarks : "N/A"}</TableCaption>
            <Thead>
              <Tr>
                <Th>Type</Th>
                {NutritionalInfoKeys.map((nutritionalInfo) => (
                  <Th key={nutritionalInfo} isNumeric>
                    {nutritionalInfo}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{ingredientType}</Td>
                <Td isNumeric>{nutritionalInfo.calories}</Td>
                <Td isNumeric>{nutritionalInfo.protein}</Td>
                <Td isNumeric>{nutritionalInfo.fat}</Td>
                <Td isNumeric>{nutritionalInfo.sugar}</Td>
                <Td isNumeric>{nutritionalInfo.weight}</Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter className="ingredient-detail-modal__footer">
          <div className="ingredient-detail-modal__footer__createdAt">
            {" "}
            Created: {new Date(created_at).toLocaleString()}
          </div>
          <div>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default IngredientDetailModal;
