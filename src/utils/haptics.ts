import * as Haptics from 'expo-haptics';

const haptics = {
    heavy : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    light : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    medium : ()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}

export default haptics