import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    popInitialNotification: true,
    requestPermissions: true
})

export const localNotification = (title, message, bigText = '', subText='', vibration=300, playSound=true, soundName='default', ) => {
    PushNotification.localNotification({
        autoCancel: true,
        bigText: bigText,
        subText: subText,
        title: title,
        message: message,
        vibrate: true,
        vibration: vibration,
        playSound: playSound,
        soundName: soundName,
        actions: '["voir le rendez-vous"]'
    })
}