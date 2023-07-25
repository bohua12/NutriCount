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

import { Formik, Form, Field} from "formik";

export default function normalFood() {
  const onSubmit = async (formResponse) => {
    console.log(formResponse);
  };

  return (
    <div className="normal-food">
      Hello this is the normal food section
      <div className="normal-food__body">
        <Formik
          initialValues={{
            mealType: "",
            foodItem: "",
            remarks: "",
          }}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="mealType">
                {({ field }) => (
                  <FormControl>
                    <FormLabel as="legend">What meal?</FormLabel>
                    <RadioGroup id="mealType" {...field}>
                      <HStack spacing="24px">
                        <Radio value="breakfast">Breakfast</Radio>
                        <Radio value="lunch">Lunch</Radio>
                        <Radio value="dinner">Dinner</Radio>
                        <Radio value="others" fontWeight="bold">
                          Others:
                        </Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="foodItem">
                {({ field }) => (
                  <FormControl>
                    <FormLabel>Food Item</FormLabel>
                    <Input
                      {...field}
                      required
                      placeholder="Name of food item"
                    />
                  </FormControl>
                )}
              </Field>

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
        {/* Additional Macro Information */}
        {/* <div className="normal-food__body--macros">
                  <Flex align="center">
                    <FormLabel>Calories</FormLabel>
                    <Input
                      name="calories"
                      htmlSize={4}
                      width="auto"
                      type="number"
                      placeholder="Calories"
                    />
                  </Flex>

                  <Flex align="center">
                    <FormLabel>Protein (g)</FormLabel>
                    <Input
                      name="protein"
                      htmlSize={4}
                      width="auto"
                      type="number"
                      placeholder="Protein"
                    />
                  </Flex>

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
                    <FormLabel>Carbs (g)</FormLabel>
                    <Input
                      name="carbs"
                      htmlSize={3}
                      width="auto"
                      type="number"
                      placeholder="Carbs"
                    />
                  </Flex>

                  <Flex align="center">
                    <FormLabel>Sugar (g)</FormLabel>
                    <Input
                      name="sugar"
                      htmlSize={2}
                      width="auto"
                      type="number"
                      placeholder="Sugar"
                    />
                  </Flex>
                </div> */}
      </div>
    </div>
  );
}
