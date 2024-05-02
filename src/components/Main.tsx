import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { InputBar } from "./inputBar/InputBar";
import { useGetData } from "../data/GetData";
import { defaulteData } from "../data/DefaulteData";
import { Currency } from "../interfaces/Interfaces";
import MyAlert from "./alert/MyAlert";

const Main = () => {
    const { data, loading, error } = useGetData();
    const [rub, setRub] = useState<number>(0);
    const [otherCurrency, setOtherCurrency] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
        null
    );
    const [alert, setAlert] = useState<boolean>(false);
    const valuteArray = data?.Valute ? Object.values(data.Valute) : [];

    const handleChangeSelect = (event: React.ChangeEvent<{}>, value: any) => {
        setSelectedCurrency(value);
        setAlert(false);
        currencyChange(value);
    };

    function currencyChange(currency: Currency) {
        if (currency.Nominal !== undefined && currency.Value !== undefined) {
            setOtherCurrency(
                Number((rub * (currency.Nominal / currency.Value)).toFixed(2))
            );
        }
    }

    function rubToOtherCurrency(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = parseFloat(e.target.value);
        if (!selectedCurrency) {
            setAlert(true);
        } else if (
            selectedCurrency.Nominal !== undefined &&
            selectedCurrency.Value !== undefined
        ) {
            setRub(newValue);
            setOtherCurrency(
                Number(
                    (
                        newValue *
                        (selectedCurrency.Nominal / selectedCurrency.Value)
                    ).toFixed(2)
                )
            );
        }
    }

    function otherCurrencyToRub(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = parseFloat(e.target.value);
        if (!selectedCurrency) {
            setAlert(true);
        } else if (
            selectedCurrency.Nominal !== undefined &&
            selectedCurrency.Value !== undefined
        ) {
            setOtherCurrency(newValue);
            setRub(
                Number(
                    (
                        newValue /
                        (selectedCurrency.Nominal / selectedCurrency.Value)
                    ).toFixed(2)
                )
            );
        }
    }

    return (
        <main className="main">
            <Box
                my={4}
                display="flex"
                alignItems="center"
                gap={2}
                p={2}
                sx={{
                    border: "2px solid #cfd8dc",
                    width: "80vw",
                    minWidth: 290,
                    justifyContent: "center",
                    overflow: "hidden",
                    flexWrap: "wrap",
                    flexDirection:"column",
                }}
            >
                {alert && (                
                        <MyAlert text={"Пожалуйста, выберите валюту"} />
                )}

                <Container
                    sx={{
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap:"20px" 
                    }}
                
                >
                    <InputBar
                        valute={[defaulteData]}
                        readOnly={true}
                        label={defaulteData.Name}
                        valueInput={rub}
                        onChangeInput={rubToOtherCurrency}
                    />
                    <InputBar
                        valute={valuteArray}
                        label={"Валюта"}
                        valueInput={otherCurrency}
                        onChangeInput={otherCurrencyToRub}
                        onChangeSelect={handleChangeSelect}
                    />
                </Container>
            </Box>
        </main>
    );
};

export default Main;
