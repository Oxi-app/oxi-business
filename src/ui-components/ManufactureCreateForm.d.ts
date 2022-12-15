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
export declare type ManufactureCreateFormInputValues = {
    Barcode?: string;
};
export declare type ManufactureCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManufactureCreateFormOverridesProps = {
    ManufactureCreateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManufactureCreateFormProps = React.PropsWithChildren<{
    overrides?: ManufactureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManufactureCreateFormInputValues) => ManufactureCreateFormInputValues;
    onSuccess?: (fields: ManufactureCreateFormInputValues) => void;
    onError?: (fields: ManufactureCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManufactureCreateFormInputValues) => ManufactureCreateFormInputValues;
    onValidate?: ManufactureCreateFormValidationValues;
} & React.CSSProperties>;
export default function ManufactureCreateForm(props: ManufactureCreateFormProps): React.ReactElement;
