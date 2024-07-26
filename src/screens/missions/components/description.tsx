import { View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"
import DescriptionHead from "./descriptionHead"
import { useEffect, useState } from 'react';
import { data } from "./descriptionData"

const Description = ({
    descriptionData
} : {
    descriptionData : any
}) => {

    const [items, setItems] = useState(data)

    // useEffect(()=>{
    //     console.log({descriptionData : descriptionData[4]})
    // },[])

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
            gap={20}
            paddingBottom={50}
            width={sizes.screenWidth}
        >
            {
                descriptionData.map((item : any, index : number) => {
                    return (
                        <Flex
                            direction="column"
                            key={index}
                        >
                            <DescriptionHead 
                                open={item.active ?? true}
                                index={index}
                                items={items}
                                setItems={setItems}
                                title={item.name}
                            />
                            <Flex
                                paddingHorizontal={15}
                                height={item.active ? 'auto' : 0}
                            >
                                {
                                    Array.isArray(item.value)
                                    ?
                                    <Flex
                                        direction="column"
                                    >
                                        {
                                            item.value.map((item : any, index : number) => (
                                                <AppTypography
                                                    lineHeight={20}
                                                    key={index}
                                                >
                                                    {item.text ?? item}
                                                </AppTypography>
                                            ))
                                        }
                                    </Flex>
                                    :
                                    <AppTypography
                                        lineHeight={20}
                                        key={index}
                                    >
                                        {item.value}
                                    </AppTypography>
                                }
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Flex>
    )
}

export default Description