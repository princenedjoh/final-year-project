import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetProps, BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import theme from '../../styles/theme';
import { hexOpacity } from '../../utils/hexOpacity';
import { BlurView } from 'expo-blur';
import AppTypography from '../../styles/components/appTypography';

const Drawer = ({
    onChange,
    children,
    props
} : {
    onChange? : (index : number)=>void
    children? : ReactNode,
    props? : Omit<BottomSheetProps, 'children'>
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [intensity, setIntensity] = useState(0)

  useEffect(()=>{
    setTimeout(() => {
      setIntensity(50)
    }, 100);
  }, [])

  // renders
  return (
      <BottomSheet
        ref={bottomSheetRef}
        onChange={onChange}
        snapPoints={['10%', '50%', '85%' ]}
        index={1}
        overDragResistanceFactor={3}
        style={{
            elevation : 100,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 20,
        }}
        backgroundStyle={{
            backgroundColor : `#ffffff${hexOpacity(0)}`
        }}
        {...props}
      >
        <View
            style={{
                width:'100%',
                height:'150%',
                backgroundColor : `#ffffff${hexOpacity(80)}`,
                borderRadius : 30,
                overflow : 'hidden',
            }}
        >
            <BlurView 
                intensity={intensity} 
                style={{
                    width:'100%',
                    height:'100%',
                    paddingVertical : 10
                }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    {children}
                </BottomSheetView>
            </BlurView>
        </View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Drawer