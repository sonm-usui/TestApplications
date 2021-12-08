import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';

const Chats = () => {

    const [ present ] = useIonAlert();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Chats</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Chats;
