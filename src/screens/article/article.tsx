import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import SmallArticles from './components/smallArticles';
import BigArticles from "./components/bigArticles"
import Suggestions from "./components/suggestions"
import { NavigationProp } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { getAllArticles } from "../../api/prismic"

const Article = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [data, setData] = useState<any>([])
    const [smallArticles, setSmallArticles] = useState<any[]>([])
    const [largeArticles, setLargeArticles] = useState<any[]>([])
    const [dataResponse, setResponse] = useState()

    const getArticles = async () => {
        const response = await getAllArticles()
        setData(response.results)
        setResponse(dataResponse)
        splitArticles()
    }

    const splitArticles = () => {
        if(data.length >= 5){
            const smallArticles = data.splice(0,3)
            const largeArticles = data.splice(0,3)
            setSmallArticles([...smallArticles])
            setLargeArticles([...largeArticles])
        } else {
            setSmallArticles(data)
        }
    }

    useEffect(()=>{
        getArticles()
    }, [])

    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={12}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    marginTop={10}
                    gap={4}
                >
                    <Header
                        navigation={navigation}
                        title="Articles"
                        displayProfile
                    />
                    <Searchbar/>
                </Flex>
                <Flex
                    direction="column"
                    gap={0}
                >
                    <Suggestions />
                    {
                        largeArticles.length > 0 &&
                        <Flex marginTop={-3}>
                            <BigArticles 
                                navigation={navigation}
                                articles={largeArticles}
                            />
                        </Flex>
                    }
                    {
                        smallArticles.length > 0 &&
                        <SmallArticles 
                            navigation={navigation}
                            articles={smallArticles}
                        />
                    }
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Article