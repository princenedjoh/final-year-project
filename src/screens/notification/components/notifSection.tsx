import { useState } from "react"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { Title } from "../../../styles/components/appTypography"
import NotifCard from "./notifCard"
import Hr from "../../../styles/components/hr"
import theme from "../../../styles/theme"

const NotifSection = () => {

    const [data, setData] = useState([1,2,3])

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
            gap={30}
        >
            <Flex
                direction="column"
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
                                <NotifCard 
                                    key={index}
                                />
                                {
                                    index < data.length - 1 &&
                                    <Hr/>
                                }
                            </Flex>
                        )
                    })
                }
            </Flex>

            <Flex
                direction="column"
                gap={10}
            >
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
                                <NotifCard 
                                    key={index}
                                />
                                {
                                    index < data.length - 1 &&
                                    <Hr/>
                                }
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default NotifSection