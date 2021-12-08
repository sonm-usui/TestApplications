import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';

const Contacts = () => {

    const [ present ] = useIonLoading();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Contacts</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Contacts;
