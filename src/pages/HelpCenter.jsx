import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import { useState } from 'react';

const HelpCenter = () => {

    const [ present ] = useIonPicker();
    const [ value, setValue ] = useState('');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Help Center</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default HelpCenter;
