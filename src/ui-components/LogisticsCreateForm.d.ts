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
export declare type LogisticsCreateFormInputValues = {
    Barcode?: string;
    Location?: string;
    Distance?: string;
    Mode?: string;
    Carbon?: string;
};
export declare type LogisticsCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Distance?: ValidationFunction<string>;
    Mode?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogisticsCreateFormOverridesProps = {
    LogisticsCreateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Location?: FormProps<TextFieldProps>;
    Distance?: FormProps<TextFieldProps>;
    Mode?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogisticsCreateFormProps = React.PropsWithChildren<{
    overrides?: LogisticsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogisticsCreateFormInputValues) => LogisticsCreateFormInputValues;
    onSuccess?: (fields: LogisticsCreateFormInputValues) => void;
    onError?: (fields: LogisticsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LogisticsCreateFormInputValues) => LogisticsCreateFormInputValues;
    onValidate?: LogisticsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogisticsCreateForm(props: LogisticsCreateFormProps): React.ReactElement;
