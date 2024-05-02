import { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material";

export interface MyInputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
}

export interface CurrencyData {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: Record<string, Currency>;
}

export interface Currency {
    ID?: string;
    NumCode?: string;
    CharCode?: string;
    Nominal?: number;
    Name: string;
    Value?: number;
    Previous?: number;
}

export interface MySelectProps {
    options: Currency[];
    label: string;
    readOnly?: boolean;
    onChange?: (event: React.SyntheticEvent<Element, Event>, value: Currency | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<Currency> | undefined) => void;
}

export interface MyAlertProps {
    text: string;
}