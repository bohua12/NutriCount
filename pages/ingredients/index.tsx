import { getAllIngredients } from "@/services/food";
import { GetServerSideProps } from "next/types";
import Image from "next/image";
import { useEffect } from "react";
import { get } from "http";
import {
  IngredientDBColumns,
  GetIngredientDBColumns,
  NutritionalInfoKeys,
} from "@/models/ingredients";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface ingridientProps {
  allIngredients: GetIngredientDBColumns[];
  ingredientCount: number;
}

export default function IngredientPage(prop: ingridientProps) {
  useEffect(() => {
    console.log(prop.allIngredients);
  });

  return (
    <div className="ingredient-page__body">
      <div className="ingredient-page__body__table">
        {prop.allIngredients && prop.ingredientCount > 0 ? (
          <TableContainer>
            <Table variant="simple">
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
                      <Td>{ingredient.ingredientName}</Td>
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
