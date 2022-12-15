/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ManufacturedItemsCreateFormInputValues = {
    Barcode?: string;
    Name?: string;
    Manufacturer?: string;
    Carbon?: string;
};
export declare type ManufacturedItemsCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Manufacturer?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManufacturedItemsCreateFormOverridesProps = {
    ManufacturedItemsCreateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
    Manufacturer?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManufacturedItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: ManufacturedItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManufacturedItemsCreateFormInputValues) => ManufacturedItemsCreateFormInputValues;
    onSuccess?: (fields: ManufacturedItemsCreateFormInputValues) => void;
    onError?: (fields: ManufacturedItemsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManufacturedItemsCreateFormInputValues) => ManufacturedItemsCreateFormInputValues;
    onValidate?: ManufacturedItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ManufacturedItemsCreateForm(props: ManufacturedItemsCreateFormProps): React.ReactElement;
