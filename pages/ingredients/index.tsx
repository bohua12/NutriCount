import { getAllIngredients } from "@/services/food";
import { GetServerSideProps } from "next/types";
import Image from "next/image";
import { useEffect } from "react";
import { get } from "http";

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
  allIngredients: any; // TODO: add type when backend DB type is done
}

export default function IngredientPage(prop: ingridientProps) {
  useEffect(() => {
    console.log(prop.allIngredients);
  });

  return (
    <>
      {prop.allIngredients && prop.allIngredients.length > 0 ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>List of All Ingredients!</TableCaption>
            <Thead>
              <Tr>
                <Th>Ingridient Name</Th>
                <Th>Type</Th>
                <Th isNumeric>Calorie</Th>
                <Th isNumeric>Protein</Th>
                <Th isNumeric>Fat</Th>
                <Th isNumeric>Sugar</Th>
                <Th isNumeric>Weight</Th>
              </Tr>
            </Thead>

            <Tbody>
              {
                prop.allIngredients.map((ingredient) => (
                  <Tr key={ingredient._id}>
                    <Td>{ingredient.ingredientName}</Td>
                    <Td>{ingredient.ingredientType}</Td>
                    <Td isNumeric>{ingredient.calories}</Td>
                    <Td isNumeric>{ingredient.protein}</Td>
                    <Td isNumeric>{ingredient.fat}</Td>
                    <Td isNumeric>{ingredient.sugar}</Td>
                    <Td isNumeric>{ingredient.weight}</Td>
                  </Tr>
                ))
              }
            </Tbody>

            <Tfoot>
              <Tr>
                <Th>Sugart</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      ) : (
        <div>There is no ingredient in the database!</div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getAllIngredientsResponse = await getAllIngredients();
  console.log("getAllIngredientsResponse", getAllIngredientsResponse);
  return {
    props: {
      allIngredients: getAllIngredientsResponse,
    },
  };
};
