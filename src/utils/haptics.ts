import * as Haptics from 'expo-haptics';

const haptic = {
    heavy : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    light : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    meadium : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}

export default haptic