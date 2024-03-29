/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { RawMaterials } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RawMaterialsUpdateForm(props) {
  const {
    id,
    rawMaterials,
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
    Material: undefined,
    Mass: undefined,
    Carbon: undefined,
  };
  const [Barcode, setBarcode] = React.useState(initialValues.Barcode);
  const [Material, setMaterial] = React.useState(initialValues.Material);
  const [Mass, setMass] = React.useState(initialValues.Mass);
  const [Carbon, setCarbon] = React.useState(initialValues.Carbon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...rawMaterialsRecord };
    setBarcode(cleanValues.Barcode);
    setMaterial(cleanValues.Material);
    setMass(cleanValues.Mass);
    setCarbon(cleanValues.Carbon);
    setErrors({});
  };
  const [rawMaterialsRecord, setRawMaterialsRecord] =
    React.useState(rawMaterials);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(RawMaterials, id)
        : rawMaterials;
      setRawMaterialsRecord(record);
    };
    queryData();
  }, [id, rawMaterials]);
  React.useEffect(resetStateValues, [rawMaterialsRecord]);
  const validations = {
    Barcode: [],
    Material: [],
    Mass: [],
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
          Material,
          Mass,
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
            RawMaterials.copyOf(rawMaterialsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RawMaterialsUpdateForm")}
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
              Material,
              Mass,
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
        label="Material"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Material}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Material: value,
              Mass,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Material ?? value;
          }
          if (errors.Material?.hasError) {
            runValidationTasks("Material", value);
          }
          setMaterial(value);
        }}
        onBlur={() => runValidationTasks("Material", Material)}
        errorMessage={errors.Material?.errorMessage}
        hasError={errors.Material?.hasError}
        {...getOverrideProps(overrides, "Material")}
      ></TextField>
      <TextField
        label="Mass"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Mass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Material,
              Mass: value,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Mass ?? value;
          }
          if (errors.Mass?.hasError) {
            runValidationTasks("Mass", value);
          }
          setMass(value);
        }}
        onBlur={() => runValidationTasks("Mass", Mass)}
        errorMessage={errors.Mass?.errorMessage}
        hasError={errors.Mass?.hasError}
        {...getOverrideProps(overrides, "Mass")}
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
              Material,
              Mass,
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
