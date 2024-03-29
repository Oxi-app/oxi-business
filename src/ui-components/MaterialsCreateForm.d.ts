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
export declare type MaterialsCreateFormInputValues = {
    Material?: string;
    CO2perkg?: string;
};
export declare type MaterialsCreateFormValidationValues = {
    Material?: ValidationFunction<string>;
    CO2perkg?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialsCreateFormOverridesProps = {
    MaterialsCreateFormGrid?: FormProps<GridProps>;
    Material?: FormProps<TextFieldProps>;
    CO2perkg?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaterialsCreateFormProps = React.PropsWithChildren<{
    overrides?: MaterialsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MaterialsCreateFormInputValues) => MaterialsCreateFormInputValues;
    onSuccess?: (fields: MaterialsCreateFormInputValues) => void;
    onError?: (fields: MaterialsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MaterialsCreateFormInputValues) => MaterialsCreateFormInputValues;
    onValidate?: MaterialsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialsCreateForm(props: MaterialsCreateFormProps): React.ReactElement;
