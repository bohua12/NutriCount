import { getAllIngredients } from "@/services/food";
import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";

import {
  GetIngredientDBColumns,
  NutritionalInfoKeys,
} from "@/models/ingredients";

import IngredientDetailModal from "@/components/ingredients/ingredient-detail-modal";
interface ingridientProps {
  allIngredients: GetIngredientDBColumns[];
  ingredientCount: number;
}

const IngredientPage = (prop: ingridientProps) => {

  const { isOpen: isIngredientDetailOpen, onOpen: onIngredientDetailOpen, onClose: onIngredientDetailClose } = useDisclosure()
  const [selectedIngredient, setSelectedIngredient] = useState<GetIngredientDBColumns | null>(null);
  useEffect(() => {
    console.log(prop.allIngredients);
  });

  return (
    <div className="ingredient-page__body">
      <div className="ingredient-page__body__table">
        {prop.allIngredients && prop.ingredientCount > 0 ? (
          <TableContainer>
            <Table variant="simple" colorScheme="telegram">
              <TableCaption>
                List of All <strong>{prop.ingredientCount}</strong> Ingredients!
              </TableCaption>{" "}
              <Thead>
                <Tr>
                  <Th>Ingridient Name</Th>
                  <Th>Type</Th>
                  {NutritionalInfoKeys.map((nutritionalInfo) => (
                    <Th key={nutritionalInfo} isNumeric>
                      {nutritionalInfo}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {prop.allIngredients.map(
                  (ingredient: GetIngredientDBColumns) => (
                    <Tr key={ingredient.id}>
                      <Td onClick={() => {
                        setSelectedIngredient(ingredient);
                        console.log("selectedIngredient", selectedIngredient)
                        onIngredientDetailOpen();
                        // HELP: I want to pass the ingredient object to the modal
                      }}>{ingredient.ingredientName}</Td>
                      <Td>{ingredient.ingredientType}</Td>
                      <Td isNumeric>{ingredient.nutritionalInfo.calories}</Td>
                      <Td isNumeric>{ingredient.nutritionalInfo.protein}</Td>
                      <Td isNumeric>{ingredient.nutritionalInfo.fat}</Td>
                      <Td isNumeric>{ingredient.nutritionalInfo.sugar}</Td>
                      <Td isNumeric>{ingredient.nutritionalInfo.weight}</Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <div>There is no ingredient in the database!</div>
        )}
      </div>
      <IngredientDetailModal isOpen={isIngredientDetailOpen} onClose={onIngredientDetailClose} ingredient={selectedIngredient}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getAllIngredientsResponse = await getAllIngredients();
  console.log("getAllIngredientsResponse", getAllIngredientsResponse);
  return {
    props: {
      allIngredients: getAllIngredientsResponse,
      ingredientCount: getAllIngredientsResponse.length,
    },
  };
};

export default IngredientPage;