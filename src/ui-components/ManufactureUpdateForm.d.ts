/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Manufacture } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ManufactureUpdateFormInputValues = {
    Barcode?: string;
};
export declare type ManufactureUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManufactureUpdateFormOverridesProps = {
    ManufactureUpdateFormGrid?: FormProps<GridProps>;
    Barcode?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManufactureUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManufactureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    manufacture?: Manufacture;
    onSubmit?: (fields: ManufactureUpdateFormInputValues) => ManufactureUpdateFormInputValues;
    onSuccess?: (fields: ManufactureUpdateFormInputValues) => void;
    onError?: (fields: ManufactureUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManufactureUpdateFormInputValues) => ManufactureUpdateFormInputValues;
    onValidate?: ManufactureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManufactureUpdateForm(props: ManufactureUpdateFormProps): React.ReactElement;
