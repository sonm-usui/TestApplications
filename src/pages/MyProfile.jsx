import {
    IonButtons,
    IonCard,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonGrid, IonRow, IonCol, IonButton, IonIcon
} from '@ionic/react';
import styles from "./MyProfile.scss";
import {arrowForward, bookmarkOutline, chatboxEllipsesOutline, imageOutline, personAddOutline} from "ionicons/icons";

const MyProfile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>My Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
                            <IonCard className={ styles.profileHeader }>

                                <IonCardContent>

                                    <IonRow>
                                        <IonCol size="4">
                                            <img src="https://testasmpublic-14e65.kxcdn.com/1638777165_99e32bb69db98ccce3f2e04465a87b_2.jpeg" alt="avatar" className={ styles.avatar } />
                                        </IonCol>

                                        <IonCol size="8">
                                            <IonRow className={ styles.profileInfo }>
                                                <IonCol size="12">
                                                    <IonText color="dark" className={ styles.profileName }>
                                                        <p>Sonam Choeda</p>
                                                    </IonText>
                                                    <IonText color="medium">
                                                        <p>Software Developer</p>
                                                    </IonText>
                                                </IonCol>
                                            </IonRow>

                                            <IonRow className={ styles.profileStats }>

                                                <IonCol className={ styles.profileStat }>

                                                    <IonCardTitle>109</IonCardTitle>
                                                    <IonCardSubtitle>Following</IonCardSubtitle>
                                                </IonCol>

                                                <IonCol className={ styles.profileStat }>

                                                    <IonCardTitle>1.2k</IonCardTitle>
                                                    <IonCardSubtitle>Followers</IonCardSubtitle>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>

                                    <IonRow>
                                        <IonCol size="6">
                                            <IonButton fill="outline" expand="block">
                                                Message
                                            </IonButton>
                                        </IonCol>

                                        <IonCol size="6">
                                            <IonButton color="primary" expand="block">
                                                <IonIcon icon={ personAddOutline } size="small" />&nbsp;
                                                Follow
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow className={ styles.profileStatusContainer }>
                        <IonCol size="12">
                            <IonCard className={ styles.profileCard }>

                                <IonCardHeader>
                                    <IonRow className={ styles.profileStatus }>
                                        <IonIcon icon={ chatboxEllipsesOutline } />
                                        <IonCardSubtitle>Status</IonCardSubtitle>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonText>
                                        <p>serving to describe oneself : being or providing a description of oneself … shedding self-consciousness by filling out name tags that included their occupation and a self-descriptive adjective: Laura, banker, scandalous. Tom, sales, adventurous.</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="6">
                            <IonCard className={ styles.profileCard }>
                                <IonCardContent>
                                    <IonIcon icon={ imageOutline } />
                                    <IonCardTitle>147</IonCardTitle>
                                    <IonCardSubtitle>Photos</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>

                        <IonCol size="6">
                            <IonCard className={ styles.profileCard }>
                                <IonCardContent>
                                    <IonIcon icon={ bookmarkOutline } />
                                    <IonCardTitle>63</IonCardTitle>
                                    <IonCardSubtitle>Bookmarks</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow className={ styles.profileActionContainer }>
                        <IonCol size="12">
                            <IonCard className={ styles.profileActionCard }>
                                <IonCardContent>
                                    <IonRow className="ion-justify-content-between">
                                        <IonCardSubtitle>View latest project</IonCardSubtitle>
                                        <IonIcon icon={ arrowForward } />
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default MyProfile;
