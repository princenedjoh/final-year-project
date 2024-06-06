import { View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"
import DescriptionHead from "./descriptionHead"
import { useState } from 'react';
import { data } from "./descriptionData"

const Description = () => {

    const [items, setItems] = useState(data)

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
            gap={20}
            paddingBottom={50}
            width={sizes.screenWidth}
        >
            {
                items.map((item, index : number) => {
                    return (
                        <Flex
                            direction="column"
                            key={index}
                        >
                            <DescriptionHead 
                                open={item.active}
                                index={index}
                                items={items}
                                setItems={setItems}
                            />
                            <Flex
                                paddingHorizontal={15}
                                height={item.active ? 'auto' : 0}
                            >
                                <AppTypography
                                    lineHeight={20}
                                >
                                    {item.description}
                                </AppTypography>
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Flex>
    )
}

export default Description