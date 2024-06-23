import Alert from "../screens/alert/alert"
import AlertDetails from "../screens/alert/screens/alertDetails"
import Article from "../screens/article/article"
import ArticlePost from "../screens/article/screens/article post/articlePost"
import Home from "../screens/home/home"
import Notification from "../screens/notification/notification"
import Profile from "../screens/profile/profile"
import Satellite from "../screens/missions/missions"
import MissionPost from "../screens/missions/screens/mission post/missionPost"
import { screenNames } from "./screennames"
import Login from "../screens/login/login"
import Register from "../screens/register/register"
import Settings from "../screens/settings/settings"
import AlertSettings from "../screens/settings/screens/alert settings/alertsSettings"
import NotificationSettings from "../screens/settings/screens/notifications settings/notificationsSettings"
import EarthQuakeSettings from "../screens/settings/screens/alert settings/screens/earth quakes/earthQuake"
import LocationSettings from "../screens/settings/screens/alert settings/screens/earth quakes/screens/location/location"
import MagnitudeSettings from "../screens/settings/screens/alert settings/screens/earth quakes/screens/magnitude/magnitude"
import DepthSettings from "../screens/settings/screens/alert settings/screens/earth quakes/screens/depth/depth"
import FloodSettings from "../screens/settings/screens/alert settings/screens/floods/floods"
import WildfiresSettings from "../screens/settings/screens/alert settings/screens/wildfires/wildfires"
import HurricanesSettings from "../screens/settings/screens/alert settings/screens/hurricanes/hurricanes"
import AirqualitySettings from "../screens/settings/screens/alert settings/screens/air quality/ariQuality"
import WaterQualitySettings from "../screens/settings/screens/alert settings/screens/water quality/waterQuality"
import LandslidesSettings from "../screens/settings/screens/alert settings/screens/landslides/landslides"
import DroughtSettings from "../screens/settings/screens/alert settings/screens/drought/drought"
import AccountSettings from "../screens/settings/screens/account/account"
import SavedSettings from "../screens/settings/screens/saved/savedSettings"
import SavedAlertSettings from "../screens/settings/screens/saved/screens/saved alerts/alerts"
import SavedArticlesSettings from "../screens/settings/screens/saved/screens/saved articles/articles"
import OnBoarding from "../screens/onboarding/onboarding"
import EarthquakeDetails from "../screens/details/earthquake/earthquake"
import FloodDetails from "../screens/details/floods/floods"
import AirQuality from "../screens/details/air quality/airQuality"

const sn = screenNames
const screens = {
    home : {
        name : sn.home,
        component : Home,
    },
    article : {
        name : sn.article,
        component : Article
    },
    alert : {
        name : sn.alert,
        component : Alert
    },
    notification : {
        name : sn.notification,
        component : Notification
    },
    articlePost : {
        name : sn.articlePost,
        component : ArticlePost
    },
    alertDetails : {
        name : sn.alertDetails,
        component : AlertDetails
    },
    missions : {
        name : sn.missions,
        component : Satellite
    },
    profile : {
        name : sn.profile,
        component : Profile
    },
    missionPost : {
        name : sn.missionPost,
        component : MissionPost
    },
    login : {
        name : sn.login,
        component : Login
    },
    register : {
        name : sn.register,
        component : Register
    },
    settings : {
        name : sn.settings,
        component : Settings
    },
    alertSettings : {
        name : sn.alertSettings,
        component : AlertSettings
    },
    notificationSettings : {
        name : sn.notificationSettings,
        component : NotificationSettings
    },
    earthQuakeSettings : {
        name : sn.earhQuakeSettings,
        component : EarthQuakeSettings
    },
    locationSettings : {
        name : sn.locationSettings,
        component : LocationSettings
    },
    magnitudeSettings : {
        name : sn.magnitudeSettings,
        component : MagnitudeSettings
    },
    depthSettings : {
        name : sn.depthSettings,
        component : DepthSettings
    },
    floodSettings : {
        name : sn.floodSettings,
        component : FloodSettings
    },
    wildfiresSettings : {
        name : sn.wildfireSettings,
        component : WildfiresSettings
    },
    hurricanesSettings : {
        name : sn.HurricaneSettings,
        component : HurricanesSettings
    },
    airQualitySettings : {
        name : sn.airQualitySettings,
        component : AirqualitySettings
    },
    waterQualitySettings : {
        name : sn.waterQualitySettings,
        component : WaterQualitySettings
    },
    landslidesSettings : {
        name : sn.landslidesSettings,
        component : LandslidesSettings
    },
    droughtSettings : {
        name : sn.droughtSettings,
        component : DroughtSettings
    },
    accountSettings : {
        name : sn.accountSettings,
        component : AccountSettings
    },
    savedSettings : {
        name : sn.savedSettings,
        component : SavedSettings
    },
    savedArticlesSettings : {
        name : sn.savedArticlesSettings,
        component : SavedArticlesSettings
    },
    savedAlertSettings : {
        name : sn.savedAlertSettings,
        component : SavedAlertSettings
    },
    onBoarding : {
        name : sn.onBoarding,
        component : OnBoarding
    },
    earthquakeDetails : {
        name : sn.earthquakeDetails,
        component : EarthquakeDetails
    },
    floodDetails : {
        name : sn.floodDetails,
        component : FloodDetails
    },
    airQuality : {
        name : sn.airQuality,
        component : AirQuality
    }
}

const s = screens
export const subScreens = [
    s.articlePost,
    s.alertDetails,
    s.missions,
    s.profile,
    s.missionPost,
    s.login,
    s.register,
    s.settings,
    s.alertSettings,
    s.notificationSettings,
    s.earthQuakeSettings,
    s.locationSettings,
    s.magnitudeSettings,
    s.depthSettings,
    s.floodSettings,
    s.wildfiresSettings,
    s.hurricanesSettings,
    s.airQualitySettings,
    s.waterQualitySettings,
    s.landslidesSettings,
    s.droughtSettings,
    s.savedSettings,
    s.accountSettings,
    s.savedAlertSettings,
    s.savedArticlesSettings,
    s.earthquakeDetails,
    s.floodDetails,
    s.airQuality
]

export default screens