import { TouchableOpacity, View } from "react-native"
import theme from "../../../../../styles/theme"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from "react"

const Bookmark = () => {

    const [bookmarked, setBookmarked] = useState<Boolean>(false)

    const handleBookmark = () => {
        setBookmarked(!bookmarked)
    }

    return (
        <View
                style={{
                    backgroundColor : theme.colors.dark[10],
                    borderRadius : 100,
                    width : 'auto',
                    position : 'absolute',
                    bottom : -25,
                    right : 40,
                    overflow : 'hidden'
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handleBookmark}
                >
                    <View
                        style={{
                            padding : 15,
                            backgroundColor : theme.colors.main.primary,
                            width : '100%',
                            height : '100%'
                        }}
                    >
                        <Ionicons 
                            name={
                                bookmarked 
                                    ? "bookmark" 
                                    : "bookmark-outline"
                            }
                            color={theme.colors.dark[10]}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </View>
    )
}

export default Bookmark