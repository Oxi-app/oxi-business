/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ManufacturedItems } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ManufacturedItemsUpdateFormInputValues = {
    Barcode?: string;
    Name?: string;
    Manufacturer?: string;
    Carbon?: string;
};
export declare type ManufacturedItemsUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Manufacturer?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManufacturedItemsUpdateFormOverridesProps = {
    ManufacturedItemsUpdateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
    Manufacturer?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManufacturedItemsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManufacturedItemsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    manufacturedItems?: ManufacturedItems;
    onSubmit?: (fields: ManufacturedItemsUpdateFormInputValues) => ManufacturedItemsUpdateFormInputValues;
    onSuccess?: (fields: ManufacturedItemsUpdateFormInputValues) => void;
    onError?: (fields: ManufacturedItemsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManufacturedItemsUpdateFormInputValues) => ManufacturedItemsUpdateFormInputValues;
    onValidate?: ManufacturedItemsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManufacturedItemsUpdateForm(props: ManufacturedItemsUpdateFormProps): React.ReactElement;
