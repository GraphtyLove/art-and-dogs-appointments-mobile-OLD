import { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import { localNotification } from './LocalPushController'
import firestore from '@react-native-firebase/firestore'




const RemotePushController = () => {
    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: deviceInfo =>  {
                // fetch all users tokens
                firestore().collection('users').where('token', '==', deviceInfo.token).get()
                    // id the device's token not in DB, add it.
                    .then( snapshot => snapshot.empty && firestore().collection('users').add(deviceInfo))

            },
            // Show notification when notification received
            onNotification: notification => {
                localNotification(notification.title, notification.message)
            },
            popInitialNotification: true,
            requestPermissions: true
        })
    }, [])
    
    return null
}

export default RemotePushController