/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UntitledModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UntitledModelUpdateFormInputValues = {
    Barcode?: string;
    Electricity?: string;
    Renewable?: string;
    Source?: string;
    Fuel?: string;
    Type?: string;
    Waste?: string;
    Composition?: string;
    Carbon?: string;
};
export declare type UntitledModelUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Electricity?: ValidationFunction<string>;
    Renewable?: ValidationFunction<string>;
    Source?: ValidationFunction<string>;
    Fuel?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Waste?: ValidationFunction<string>;
    Composition?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelUpdateFormOverridesProps = {
    UntitledModelUpdateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Electricity?: FormProps<TextFieldProps>;
    Renewable?: FormProps<TextFieldProps>;
    Source?: FormProps<TextFieldProps>;
    Fuel?: FormProps<TextFieldProps>;
    Type?: FormProps<TextFieldProps>;
    Waste?: FormProps<TextFieldProps>;
    Composition?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UntitledModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    untitledModel?: UntitledModel;
    onSubmit?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onSuccess?: (fields: UntitledModelUpdateFormInputValues) => void;
    onError?: (fields: UntitledModelUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onValidate?: UntitledModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelUpdateForm(props: UntitledModelUpdateFormProps): React.ReactElement;
