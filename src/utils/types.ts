import { DimensionValue, ImageResizeMode, ImageSourcePropType, StyleProp, ViewStyle } from "react-native"
import { ReactNode } from 'react';
import { NavigationProp } from "@react-navigation/native";

export type headerType = {
    title : string,
    message? : string,
    displayProfile? : boolean
    navigation : NavigationProp<any>
    right? : ReactNode
}

export type searchbarprops = {
    rounded? : number
}

export type imageBgsProps = {
    width? : DimensionValue,
    height? : DimensionValue,
    source : ImageSourcePropType,
    rounded? : number,
    children? : ReactNode,
    resizeMode? : ImageResizeMode,
    bgcolor? : string,
    flex? : number
    style? : StyleProp<ViewStyle>
}

export type paddingMarginTypes = {
    padding? : DimensionValue
    margin? : DimensionValue
    paddingLeft? : DimensionValue
    paddingRight? : DimensionValue
    paddingBottom? : DimensionValue
    paddingTop? : DimensionValue
    paddingHorizontal? : DimensionValue
    paddingVertical? : DimensionValue
    marginHorizontal? : DimensionValue
    marginVertical? : DimensionValue
    marginLeft? : DimensionValue
    marginRight? : DimensionValue
    marginTop? : DimensionValue,
    marginBottom? : DimensionValue,
}

export type severityTypes = 'normal' | 'severe' | 'critical'

export type articleTypes = {
    navigation : NavigationProp<any>
    title : string,
    description : string,
    date : Date,
    coverImageURL : ImageSourcePropType
    full_name1 : string
}

export type alertDataTypes = {
    category : string,
    date : Date,
    data : string,
    description : string,
    id : number,
    read : boolean, 
    severity : string,
    title : string,
    user : string,
    image : any
}