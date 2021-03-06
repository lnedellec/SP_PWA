console.log(Notification.permission);

function dispNotif(){
    console.log('disNotif');
    let textNotif = "Vous recevrez des notifications lors de nouveaux messages !";
    let param = {
        body: textNotif,
        icon: 'img/apple-icon-57x57-seochecker-manifest-1328.png'
    }
    const notif = new Notification('Préférences de notification', param);
};

function reqNotif(){
    Notification.requestPermission().then(permission=>{
        if(Notification.permission === 'granted'){
            console.log('disNotif');
            dispNotif();
        }
        
        if(Notification.permission === 'denied'){
            console.log('pas de notifications');
        }
    })
};

if(Notification.permission === 'default'){
    reqNotif();
}
if(Notification.permission === 'granted'){
    console.log('disNotif');
    dispNotif();
}

if(Notification.permission === 'denied'){
    console.log('pas de notifications');
}