import { useEffect, useState } from "react";
import { CurrencyData } from "../interfaces/Interfaces";


export function useGetData(): { data: CurrencyData | null, loading: boolean, error: string | null } {
    const [data, setData] = useState<CurrencyData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchData(): Promise<void> {
        try {
            const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
        } catch (error:any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
}