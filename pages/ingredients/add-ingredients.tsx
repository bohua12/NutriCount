import Image from "next/image";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Radio,
  RadioGroup,
  HStack,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import { addIngredient } from "@/services/food";

import { IngredientDBColumns, IngredientTypes, NutritionalInfoKeys } from "@/models/ingredients";


const formInitialValues : IngredientDBColumns = {
  ingredientName: "",
  ingredientType: "",
  remarks: "",
  nutritionalInfo: {
    calories: null,
    protein: null,
    fat: null,
    sugar: null,
    weight: null,
  },
};

export default function normalFood() {
  const onSubmit = async (formResponse, { resetForm }) => {
    console.log("fr", formResponse);
    console.log("fiv", formInitialValues)
    const response = await addIngredient(formResponse);
    if (response.status === 201) {
      alert("Successfully added ingredient!");
      resetForm({ values: { ...formInitialValues } });
    } else {
      alert("Failed to add ingredient!");
    }
  };

  return (
    <div className="normal-food">
      Hello this is the ingredients section
      <div className="normal-food__body">
        <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="ingredientType">
                {({ field }) => (
                  <FormControl>
                    <FormLabel as="legend">What kind of ingredient?</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        {IngredientTypes.map((ingredientType) => (
                          <Radio
                            key={ingredientType}
                            value={ingredientType}
                            onChange={() => {
                              console.log("this is field", field);
                              setFieldValue("ingredientType", ingredientType);
                              console.log(values);
                            }}
                          >
                            {ingredientType}
                          </Radio>
                        ))}
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="ingredientName">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Ingredient</FormLabel>
                    <Input
                      {...field}
                      required
                      placeholder="Name of ingredient"
                    />
                  </FormControl>
                )}
              </Field>

              {/* Additional Macro Information */}
              <div className="normal-food__body--macros">
                {NutritionalInfoKeys.map((nutritionType) => (
                  <Field name={nutritionType} key={nutritionType}>
                    {({ field }) => (
                      <Flex align="center">
                        <FormControl className="normal-food__body--individualMacros">
                          <FormLabel>
                            {nutritionType.charAt(0).toUpperCase() +
                              nutritionType.slice(1)}
                          </FormLabel>
                          <Input
                            {...field}
                            width="auto"
                            type="number"
                            placeholder={
                              nutritionType.charAt(0).toUpperCase() +
                              nutritionType.slice(1)
                            }
                          />
                        </FormControl>
                      </Flex>
                    )}
                  </Field>
                ))}
              </div>
              <Field name="remarks">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Remarks</FormLabel>
                    <Textarea {...field} placeholder="Comments for this meal" />
                  </FormControl>
                )}
              </Field>

              <Button colorScheme="teal" variant="outline" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
