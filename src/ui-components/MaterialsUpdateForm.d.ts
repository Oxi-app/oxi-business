/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Materials } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MaterialsUpdateFormInputValues = {
    Material?: string;
    CO2perkg?: string;
};
export declare type MaterialsUpdateFormValidationValues = {
    Material?: ValidationFunction<string>;
    CO2perkg?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialsUpdateFormOverridesProps = {
    MaterialsUpdateFormGrid?: FormProps<GridProps>;
    Material?: FormProps<TextFieldProps>;
    CO2perkg?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MaterialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MaterialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    materials?: Materials;
    onSubmit?: (fields: MaterialsUpdateFormInputValues) => MaterialsUpdateFormInputValues;
    onSuccess?: (fields: MaterialsUpdateFormInputValues) => void;
    onError?: (fields: MaterialsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MaterialsUpdateFormInputValues) => MaterialsUpdateFormInputValues;
    onValidate?: MaterialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialsUpdateForm(props: MaterialsUpdateFormProps): React.ReactElement;
