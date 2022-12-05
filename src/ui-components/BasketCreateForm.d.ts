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
export declare type BasketCreateFormInputValues = {
    Barcode?: string;
    Merchant?: string;
    Name?: string;
    Price?: string;
    Weight?: string;
    Material?: string;
    Carbon?: string;
    owner?: string;
};
export declare type BasketCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Merchant?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Weight?: ValidationFunction<string>;
    Material?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketCreateFormOverridesProps = {
    BasketCreateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Merchant?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
    Price?: FormProps<TextFieldProps>;
    Weight?: FormProps<TextFieldProps>;
    Material?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
    owner?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasketCreateFormProps = React.PropsWithChildren<{
    overrides?: BasketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onSuccess?: (fields: BasketCreateFormInputValues) => void;
    onError?: (fields: BasketCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onValidate?: BasketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasketCreateForm(props: BasketCreateFormProps): React.ReactElement;
