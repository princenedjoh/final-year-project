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
import SmallCardSkeleton from "../../components/article card/smallCardSkeleton"
import LargeCardSkeleton from "../../components/article card/largeCardSkeleton"
import { RefreshControl } from "react-native"
import { HomeDivider } from "../home/home"

const Article = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [data, setData] = useState<any[]>([])
    const [smallArticles, setSmallArticles] = useState<'loading' | any[]>([])
    const [largeArticles, setLargeArticles] = useState<'loading' | any[]>([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000)
    }

    const getArticles = async () => {
        const response = await getAllArticles()
        setData(response.results)
    }

    const splitArticles = () => {
        if(data.length >= 4){
            const smallArticlesCopy = [...data].splice(data.length - 3)
            const largeArticlesCopy = [...data].splice(0, data.length >= 6 ? 2 : data.length - 3)
            smallArticlesCopy.length === 0 
                ? setSmallArticles([])
                : setSmallArticles([...smallArticlesCopy])
            largeArticlesCopy.length === 0
            ? setLargeArticles([])
            : setLargeArticles([...largeArticlesCopy])
        } else {
            setLargeArticles([])
            setSmallArticles(data)
        }
    }

    useEffect(()=>{
        splitArticles()
    }, [data])

    useEffect(()=>{
        setLargeArticles('loading')
        setSmallArticles('loading')
        getArticles()
    }, [])

    useEffect(()=>{
        if(refreshing){
            setLargeArticles(refreshing ? 'loading' : "loading")
            setSmallArticles(refreshing ? 'loading' : "loading")
            getArticles()
        }
    }, [refreshing])

    return (
        <Safescroll
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
    >
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
                    gap={20}
                >
                    <Suggestions />
                    {HomeDivider}
                    {
                        largeArticles.length > 0 && largeArticles !== 'loading' ?
                        <Flex marginTop={-3}>
                            <BigArticles 
                                navigation={navigation}
                                articles={largeArticles}
                            />
                        </Flex>
                        : largeArticles === 'loading' &&
                        <LargeCardSkeleton />
                    }
                    {
                        largeArticles.length > 0 && largeArticles !== 'loading' &&
                        HomeDivider
                    }
                    {
                        smallArticles.length > 0 && smallArticles !== 'loading' ?
                        <SmallArticles 
                            navigation={navigation}
                            articles={smallArticles}
                        />
                        : smallArticles === 'loading' &&
                        [1,2,3,4].map((item, index) => (
                            <SmallCardSkeleton key={index}/>
                        ))
                    }
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Article