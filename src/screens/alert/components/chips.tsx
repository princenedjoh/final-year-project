import { useState } from "react"
import Chip from "../../../components/chip/chip"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"

const Chips = () => {

    const [chips, setChips] = useState([
        'Earth quakes', 'Land slides', 'Flood', 'Atlantic ocean', 'USA'
    ])

    return (
        <Flex
            gap={10}
            marginHorizontal={sizes.marginSM}
        >
            {
                chips.map((item, index : number) => {
                    return (
                        <Chip
                            name={item}
                            key={index}
                        />
                    )
                })
            }
        </Flex>
    )
}

export default Chips