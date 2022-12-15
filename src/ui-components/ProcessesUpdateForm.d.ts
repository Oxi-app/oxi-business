/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Processes } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProcessesUpdateFormInputValues = {
    Barcode?: string;
    Electricity?: string;
    Renewable?: string;
    Source?: string;
    Fuel?: string;
    Type?: string;
    Waste?: string;
    Composition?: string;
    Carbon?: string;
    Name?: string;
};
export declare type ProcessesUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Electricity?: ValidationFunction<string>;
    Renewable?: ValidationFunction<string>;
    Source?: ValidationFunction<string>;
    Fuel?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Waste?: ValidationFunction<string>;
    Composition?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProcessesUpdateFormOverridesProps = {
    ProcessesUpdateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Electricity?: FormProps<TextFieldProps>;
    Renewable?: FormProps<TextFieldProps>;
    Source?: FormProps<TextFieldProps>;
    Fuel?: FormProps<TextFieldProps>;
    Type?: FormProps<TextFieldProps>;
    Waste?: FormProps<TextFieldProps>;
    Composition?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
    Name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProcessesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProcessesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    processes?: Processes;
    onSubmit?: (fields: ProcessesUpdateFormInputValues) => ProcessesUpdateFormInputValues;
    onSuccess?: (fields: ProcessesUpdateFormInputValues) => void;
    onError?: (fields: ProcessesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProcessesUpdateFormInputValues) => ProcessesUpdateFormInputValues;
    onValidate?: ProcessesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProcessesUpdateForm(props: ProcessesUpdateFormProps): React.ReactElement;
