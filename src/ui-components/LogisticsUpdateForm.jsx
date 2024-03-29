/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Logistics } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function LogisticsUpdateForm(props) {
  const {
    id,
    logistics,
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
    Barcode: undefined,
    Location: undefined,
    Distance: undefined,
    Mode: undefined,
    Carbon: undefined,
  };
  const [Barcode, setBarcode] = React.useState(initialValues.Barcode);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Distance, setDistance] = React.useState(initialValues.Distance);
  const [Mode, setMode] = React.useState(initialValues.Mode);
  const [Carbon, setCarbon] = React.useState(initialValues.Carbon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...logisticsRecord };
    setBarcode(cleanValues.Barcode);
    setLocation(cleanValues.Location);
    setDistance(cleanValues.Distance);
    setMode(cleanValues.Mode);
    setCarbon(cleanValues.Carbon);
    setErrors({});
  };
  const [logisticsRecord, setLogisticsRecord] = React.useState(logistics);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Logistics, id) : logistics;
      setLogisticsRecord(record);
    };
    queryData();
  }, [id, logistics]);
  React.useEffect(resetStateValues, [logisticsRecord]);
  const validations = {
    Barcode: [],
    Location: [],
    Distance: [],
    Mode: [],
    Carbon: [],
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
          Barcode,
          Location,
          Distance,
          Mode,
          Carbon,
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
          await DataStore.save(
            Logistics.copyOf(logisticsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "LogisticsUpdateForm")}
    >
      <TextField
        label="Barcode"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Barcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode: value,
              Location,
              Distance,
              Mode,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Barcode ?? value;
          }
          if (errors.Barcode?.hasError) {
            runValidationTasks("Barcode", value);
          }
          setBarcode(value);
        }}
        onBlur={() => runValidationTasks("Barcode", Barcode)}
        errorMessage={errors.Barcode?.errorMessage}
        hasError={errors.Barcode?.hasError}
        {...getOverrideProps(overrides, "Barcode")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Location: value,
              Distance,
              Mode,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Distance"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Distance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Location,
              Distance: value,
              Mode,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Distance ?? value;
          }
          if (errors.Distance?.hasError) {
            runValidationTasks("Distance", value);
          }
          setDistance(value);
        }}
        onBlur={() => runValidationTasks("Distance", Distance)}
        errorMessage={errors.Distance?.errorMessage}
        hasError={errors.Distance?.hasError}
        {...getOverrideProps(overrides, "Distance")}
      ></TextField>
      <TextField
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Location,
              Distance,
              Mode: value,
              Carbon,
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
        label="Carbon"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Carbon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Location,
              Distance,
              Mode,
              Carbon: value,
            };
            const result = onChange(modelFields);
            value = result?.Carbon ?? value;
          }
          if (errors.Carbon?.hasError) {
            runValidationTasks("Carbon", value);
          }
          setCarbon(value);
        }}
        onBlur={() => runValidationTasks("Carbon", Carbon)}
        errorMessage={errors.Carbon?.errorMessage}
        hasError={errors.Carbon?.hasError}
        {...getOverrideProps(overrides, "Carbon")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
