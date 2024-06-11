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
    s.notificationSettings
]

export default screens