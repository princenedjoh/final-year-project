import { DimensionValue, ImageResizeMode, ImageSourcePropType } from "react-native"
import { ReactNode } from 'react';
import { NavigationProp } from "@react-navigation/native";

export type headerType = {
    title : string,
    message? : string,
    displayProfile? : boolean
    navigation : NavigationProp<any>
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