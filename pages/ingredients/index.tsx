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

const ingredientTypes = ["protein", "carb", "fiber", "others"];

const formInitialValues = {
  ingredientType: "",
  foodItem: "",
  remarks: "",
  calories: "",
  protein: "",
  fat: "",
  sugar: "",
};

export default function normalFood() {
  const onSubmit = async (formResponse) => {
    console.log(formResponse);
  };

  return (
    <div className="normal-food">
      Hello this is the ingredients section
      <div className="normal-food__body">
        <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="mealType">
                {({ field }) => (
                  <FormControl>
                    <FormLabel as="legend">What kind of ingredient?</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        {ingredientTypes.map((ingredientType) => (
                          <Radio
                            key={ingredientType}
                            value={ingredientType}
                            onChange={() => {
                              setFieldValue("mealType", ingredientType);
                              console.log("FIELDD");
                              console.log(field);
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

              <Field name="foodItem">
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
                <Field name="calories">
                  {({ field }) => (
                    <Flex align="center">
                      <FormControl className="normal-food__body--individualMacros">
                        <FormLabel>Calories</FormLabel>
                        <Input
                        {...field}
                          width="auto"
                          type="number"
                          placeholder="Calories"
                        />
                      </FormControl>
                    </Flex>
                  )}
                </Field>

                <Field name="protein">
                  {({ field }) => (
                    <Flex align="center">
                      <FormControl className="normal-food__body--individualMacros">
                        <FormLabel>Protein</FormLabel>
                        <Input
                        {...field}
                          width="auto"
                          type="number"
                          placeholder="Protein"
                        />
                      </FormControl>
                    </Flex>
                  )}
                </Field>

                <Flex align="center">
                  <FormLabel>Fat (g)</FormLabel>
                  <Input
                    name="fat"
                    htmlSize={4}
                    width="auto"
                    type="number"
                    placeholder="Fat"
                  />
                </Flex>

                <Flex align="center">
                  <FormLabel>Sugar (g)</FormLabel>
                  <Input
                    name="sugar"
                    htmlSize={4}
                    width="auto"
                    type="number"
                    placeholder="Sugar"
                  />
                </Flex>
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
