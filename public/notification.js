console.log(Notification.permission);

function dispNotif(){
    console.log('disNotif');
    let textNotif = "Ma notif à moi";
    let param = {
        body: textNotif,
        icon: 'img/apple-icon-57x57-seochecker-manifest-1328.png'
    }
    const notif = new Notification('Notification de mon appli', param);
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