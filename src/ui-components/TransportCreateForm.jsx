/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Transport } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function TransportCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Mode: undefined,
    CO2perMile: undefined,
  };
  const [Mode, setMode] = React.useState(initialValues.Mode);
  const [CO2perMile, setCO2perMile] = React.useState(initialValues.CO2perMile);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMode(initialValues.Mode);
    setCO2perMile(initialValues.CO2perMile);
    setErrors({});
  };
  const validations = {
    Mode: [],
    CO2perMile: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Mode,
          CO2perMile,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Transport(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "TransportCreateForm")}
    >
      <TextField
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Mode: value,
              CO2perMile,
            };
            const result = onChange(modelFields);
            value = result?.Mode ?? value;
          }
          if (errors.Mode?.hasError) {
            runValidationTasks("Mode", value);
          }
          setMode(value);
        }}
        onBlur={() => runValidationTasks("Mode", Mode)}
        errorMessage={errors.Mode?.errorMessage}
        hasError={errors.Mode?.hasError}
        {...getOverrideProps(overrides, "Mode")}
      ></TextField>
      <TextField
        label="Co2per mile"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Mode,
              CO2perMile: value,
            };
            const result = onChange(modelFields);
            value = result?.CO2perMile ?? value;
          }
          if (errors.CO2perMile?.hasError) {
            runValidationTasks("CO2perMile", value);
          }
          setCO2perMile(value);
        }}
        onBlur={() => runValidationTasks("CO2perMile", CO2perMile)}
        errorMessage={errors.CO2perMile?.errorMessage}
        hasError={errors.CO2perMile?.hasError}
        {...getOverrideProps(overrides, "CO2perMile")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
