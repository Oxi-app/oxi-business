/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RawMaterials } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RawMaterialsUpdateFormInputValues = {
    Barcode?: string;
    Material?: string;
    Mass?: string;
    Carbon?: string;
};
export declare type RawMaterialsUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Material?: ValidationFunction<string>;
    Mass?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RawMaterialsUpdateFormOverridesProps = {
    RawMaterialsUpdateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
    Material?: FormProps<TextFieldProps>;
    Mass?: FormProps<TextFieldProps>;
    Carbon?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RawMaterialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RawMaterialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rawMaterials?: RawMaterials;
    onSubmit?: (fields: RawMaterialsUpdateFormInputValues) => RawMaterialsUpdateFormInputValues;
    onSuccess?: (fields: RawMaterialsUpdateFormInputValues) => void;
    onError?: (fields: RawMaterialsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RawMaterialsUpdateFormInputValues) => RawMaterialsUpdateFormInputValues;
    onValidate?: RawMaterialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RawMaterialsUpdateForm(props: RawMaterialsUpdateFormProps): React.ReactElement;
