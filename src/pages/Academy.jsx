import {
    IonButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonMenuButton,
    IonPage, IonRow, IonText,
    IonTitle,
    IonToolbar,
    useIonActionSheet
} from '@ionic/react';
import {arrowForward, bookmarkOutline, chatboxEllipsesOutline, imageOutline, personAddOutline} from "ionicons/icons";
import styles from "./Academy.scss"

const Academy = () => {

    const [ present, dismiss ] = useIonActionSheet();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Academy</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Academy
