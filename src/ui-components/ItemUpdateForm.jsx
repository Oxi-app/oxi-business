/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Item } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ItemUpdateForm(props) {
  const {
    id,
    item,
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
    Merchant: undefined,
    Name: undefined,
    Price: undefined,
    Weight: undefined,
    Material: undefined,
    Carbon: undefined,
  };
  const [Barcode, setBarcode] = React.useState(initialValues.Barcode);
  const [Merchant, setMerchant] = React.useState(initialValues.Merchant);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [Weight, setWeight] = React.useState(initialValues.Weight);
  const [Material, setMaterial] = React.useState(initialValues.Material);
  const [Carbon, setCarbon] = React.useState(initialValues.Carbon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...itemRecord };
    setBarcode(cleanValues.Barcode);
    setMerchant(cleanValues.Merchant);
    setName(cleanValues.Name);
    setPrice(cleanValues.Price);
    setWeight(cleanValues.Weight);
    setMaterial(cleanValues.Material);
    setCarbon(cleanValues.Carbon);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(item);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Item, id) : item;
      setItemRecord(record);
    };
    queryData();
  }, [id, item]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    Barcode: [],
    Merchant: [],
    Name: [],
    Price: [],
    Weight: [],
    Material: [],
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
          Merchant,
          Name,
          Price,
          Weight,
          Material,
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
            Item.copyOf(itemRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ItemUpdateForm")}
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
              Merchant,
              Name,
              Price,
              Weight,
              Material,
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
        label="Merchant"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Merchant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Merchant: value,
              Name,
              Price,
              Weight,
              Material,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Merchant ?? value;
          }
          if (errors.Merchant?.hasError) {
            runValidationTasks("Merchant", value);
          }
          setMerchant(value);
        }}
        onBlur={() => runValidationTasks("Merchant", Merchant)}
        errorMessage={errors.Merchant?.errorMessage}
        hasError={errors.Merchant?.hasError}
        {...getOverrideProps(overrides, "Merchant")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Merchant,
              Name: value,
              Price,
              Weight,
              Material,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Merchant,
              Name,
              Price: value,
              Weight,
              Material,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Price ?? value;
          }
          if (errors.Price?.hasError) {
            runValidationTasks("Price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("Price", Price)}
        errorMessage={errors.Price?.errorMessage}
        hasError={errors.Price?.hasError}
        {...getOverrideProps(overrides, "Price")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Merchant,
              Name,
              Price,
              Weight: value,
              Material,
              Carbon,
            };
            const result = onChange(modelFields);
            value = result?.Weight ?? value;
          }
          if (errors.Weight?.hasError) {
            runValidationTasks("Weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("Weight", Weight)}
        errorMessage={errors.Weight?.errorMessage}
        hasError={errors.Weight?.hasError}
        {...getOverrideProps(overrides, "Weight")}
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
              Merchant,
              Name,
              Price,
              Weight,
              Material: value,
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
        label="Carbon"
        isRequired={false}
        isReadOnly={false}
        defaultValue={Carbon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Merchant,
              Name,
              Price,
              Weight,
              Material,
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