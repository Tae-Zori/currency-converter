import { Alert } from "@mui/material"
import { MyAlertProps } from "../../interfaces/Interfaces"

const MyAlert = ({text}:MyAlertProps) => {
    return(
        <Alert variant="outlined" severity="warning"  sx={{ bgcolor: '#ffe0b2', color:"#f57c00" }}>
            {text}
        </Alert>
    )
}
export default MyAlert