import { useState } from "react"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { Title } from "../../../styles/components/appTypography"
import NotifCard from "./notifCard"
import Hr from "../../../styles/components/hr"
import theme from "../../../styles/theme"
import NotifCard2 from "./notifCard2"

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
                gap={20}
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
                                gap={20}
                            >
                                <NotifCard />
                                <Hr marginLeft={55}/>
                                <NotifCard2 />
                                {
                                    index < data.length - 1 &&
                                    <Hr marginLeft={55}/>
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
                                gap={20}
                            >
                                <NotifCard />
                                <Hr marginLeft={55}/>
                                <NotifCard2 />
                                {
                                    index < data.length - 1 &&
                                    <Hr marginLeft={55}/>
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