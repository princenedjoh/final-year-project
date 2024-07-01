import { Animated, View, StyleSheet, RegisteredStyle, ViewStyle, StyleProp } from 'react-native';
import { ReactNode, useEffect } from 'react';
import theme from '../../styles/theme';

const pulseAnimation = new Animated.Value(1);

const styles = StyleSheet.create({
  container: {
    opacity: pulseAnimation,
    backgroundColor: theme.colors.dark[10], // Placeholder background color for skeleton effect
    borderRadius: 10,
    width: '100%',
    height: 80,
  }
});

const Skeleton = ({
    style,
    children
} : {
    style? : StyleProp<ViewStyle>
    children? : ReactNode
}) => {
    useEffect(() => {
        const animation = Animated.sequence([
          // Animate opacity from 1 to 0.8 (fading effect)
          Animated.timing(pulseAnimation, {
            toValue: 0.4,
            duration: 500, // Adjust duration for fading
            useNativeDriver: true,
          }),
          // Animate opacity back from 0.8 to 1 (increasing effect)
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 500, // Adjust duration for increasing
            useNativeDriver: true,
          }),
        ]);
    
        animation.start(() => Animated.loop(animation).start());
      }, []);

  return (
    <Animated.View style={[styles.container, style]}>
      {children}
    </Animated.View>
  );
};

export default Skeleton;
