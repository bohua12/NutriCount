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

const mealTypes = ["breakfast", "lunch", "dinner"];

const formInitialValues = {
  mealType: "",
  foodItem: "",
  remarks: "",
  calories: "",
  protein: "",
};

export default function normalFood() {
  const onSubmit = async (formResponse) => {
    console.log(formResponse);
  };

  return (
    <div className="normal-food">
      Hello this is the normal food section
      <div className="normal-food__body">
        <Formik initialValues={formInitialValues} onSubmit={onSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="mealType">
                {({ field }) => (
                  <FormControl>
                    <FormLabel as="legend">What meal?</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px">
                        {mealTypes.map((mealType) => (
                          <Radio
                            key={mealType}
                            value={mealType}
                            onChange={() => {
                              setFieldValue("mealType", mealType);
                              console.log("FIELDD");
                              console.log(field);
                              console.log(values);
                            }}
                          >
                            {mealType}
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
                    <FormLabel>Food Item</FormLabel>
                    <Input
                      {...field}
                      required
                      placeholder="Name of food item"
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
