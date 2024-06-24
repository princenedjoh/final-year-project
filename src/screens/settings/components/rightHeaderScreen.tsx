import { NavigationProp } from "@react-navigation/native"
import Safescroll from "../../../components/safescroll"
import OverlayActivityIndicator from "../../../components/overlayActivityIndicator/overlayActivityIndicator"
import { ReactNode, useState } from "react"
import Flex from "../../../styles/components/flex"
import Header from "../../../components/header/header"
import { sizes } from "../../../utils/sizes"
import { TouchableOpacity } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import theme from "../../../styles/theme"
import { TypographyBold, TypographySize } from "../../../styles/components/types"

const RightHeaderScreen = ({
    navigation,
    unsavedChanges,
    children,
    onSave,
    title,
    command
} : {
    navigation : NavigationProp<any>
    onSave? : ()=>void
    unsavedChanges : boolean
    children? : ReactNode
    title : string,
    command? : string
}) => {
    const [showloader, setShowloader] = useState(false)
    const handleSave = async () => {
        if(unsavedChanges){
            try {
                setShowloader(true)
                onSave && await onSave()
                setShowloader(false)
            } catch (error) {
                setShowloader(false)
            }
        }
    }

    return (
        <Safescroll>
            <OverlayActivityIndicator
                isVisible={showloader}
            />
            <Flex
                direction="column"
                gap={12}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    marginTop={10}
                    gap={10}
                >
                    <Header
                        navigation={navigation}
                        title={title}
                        right={
                            <TouchableOpacity
                                onPress={handleSave}
                            >
                                <AppTypography
                                    textColor={
                                        unsavedChanges
                                            ? theme.colors.main.primary
                                            : theme.colors.main.text.light
                                    }
                                    size={TypographySize.md}
                                    bold={TypographyBold.md}
                                >
                                    {command ?? 'Save'}
                                </AppTypography>
                            </TouchableOpacity>
                        }
                    />
                    {children}
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default RightHeaderScreen