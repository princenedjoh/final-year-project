import { useState } from "react"
import AppTypography, { Title } from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import AlertCard from "./alertCard"
import Hr from "../../../styles/components/hr"
import theme from "../../../styles/theme"

const AlertsSection = () => {

    const [data, setData] = useState([1,2,3])

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
            gap={10}
        >
            <Title textColor={theme.colors.main.primary}>
                Today
            </Title>
            {
                data.map((items, index : number) => {
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap={10}
                        >
                            <AlertCard 
                                key={index}
                            />
                            {
                                index < data.length - 1 &&
                                <Hr
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }

            <Title textColor={theme.colors.main.primary}>
                Yesterday
            </Title>
            {
                data.map((items, index : number) => {
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap={10}
                        >
                            <AlertCard 
                                key={index}
                            />
                            {
                                index < data.length - 1 &&
                                <Hr
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }
        </Flex>
    )
}

export default AlertsSection