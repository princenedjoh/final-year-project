import { ImageResizeMode, ImageSourcePropType } from "react-native"
import { ReactNode } from 'react';

export type headerType = {
    title : string,
    message? : string,
    displayProfile? : boolean
}

export type searchbarprops = {
    rounded? : number
}

export type imageBgsProps = {
    width? : number,
    height? : number,
    source : ImageSourcePropType,
    rounded? : number,
    children? : ReactNode,
    resizeMode? : ImageResizeMode,
    bgcolor? : string,
    flex? : number
}