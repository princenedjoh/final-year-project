import { ReactNode } from "react";
import { AnimatableNumericValue, DimensionValue, FlexAlignType } from "react-native";

export interface flexProps {
    children? : ReactNode
    flex? : number
    direction ? : 'column' | 'row'
    gap ? : number
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
    justify ? : "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    align ? : FlexAlignType
    width ? : DimensionValue
    height ? : DimensionValue
    maxWidth ? : DimensionValue
    maxHeight ? : DimensionValue
    flexWrap? : "wrap" | "nowrap" | "wrap-reverse"
    opacity? : number
    rounded? : AnimatableNumericValue
    background? : string
    z? : number
    position? : 'relative' | 'absolute'
  }

export enum TypographySize {
  xs = 12,
  sm = 14,
  sm2 = 16,
  md = 17,
  md2 = 19,
  lg = 22,
  lg2 = 28,
  xl = 33,
  xxl = 41,
  xl3 = 56
}

export interface AppTypographyProps {
  children : ReactNode,
  numberOfLines? : number
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined
  bold?: TypographyBold;
  size?: TypographySize;
  textColor?: string;
  colorTheme? : string;
  wrap?: string;
  underline?: boolean
  clickable?: boolean
  clickableLink?: boolean
  italic?: boolean
  textAlign? : "auto" | "left" | "right" | "center" | "justify" | undefined
  display? : "flex" | "none" | undefined
  ellipsis? : boolean
  maxLines? : number
  lineHeight? : number
}

export interface buttonProps {
  width : string,
  backgroundColor : string,
}

export enum TypographyBold {
  sm = "400",
  sm2 = "500",
  md = "600",
  md2 = "700",
  lg = "800",
}

export interface hrProps {
  size? : {
    width? : DimensionValue,
    height? : DimensionValue,
  },
  background? : string,
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

export interface clickableProps {
  cursor? : string
  radius? : string
  padding? : string
  margin? : string
}