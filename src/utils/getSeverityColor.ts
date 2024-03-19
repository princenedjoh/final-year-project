import theme from "../styles/theme"
import { severityTypes } from "./types"

export const getSeverityColor = (severity? : severityTypes) => {
    switch(severity){
        case 'normal':
            return theme.colors.green.green3
        case 'severe':
            return theme.colors.orange.orange3
        case 'critical':
            return theme.colors.red.red3
        default:
            return theme.colors.green.green3
    }
}