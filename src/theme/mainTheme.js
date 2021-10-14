import { createTheme } from "@mui/material/styles";
import colors from "../utils/colorimetría"

const theme = createTheme({
    palette: {
        primary: {
            main: colors.darkBlue,
            light: colors.limeGreen
        },
        secondary: {
            main:colors.black,
            light: colors.darkGreen
        }
    }
})

export default theme;