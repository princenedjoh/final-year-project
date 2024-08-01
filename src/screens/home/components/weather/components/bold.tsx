import { ReactNode } from "react"
import AppTypography from "../../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../../styles/components/types"

const B = ({
    children
} : {
    children? : ReactNode
}) => {
    return (
        <AppTypography bold={TypographyBold.md2}>
            {children}
        </AppTypography>
    )
}
export default B