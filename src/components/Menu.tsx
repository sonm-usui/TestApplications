import {
    IonAvatar,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
    star,
    starOutline,
    chatbox,
    list,
    schoolOutline,
    peopleOutline,
    callOutline,
    createOutline, personOutline
} from 'ionicons/icons';
import './Menu.css';
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react';

// @ts-ignore
const Menu = ({pages}) => {

    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <div className='avatar-img' style={{
                    display : 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    marginBottom: '0px',
                }}>
                    <IonAvatar item-end class={'avatar-img'} style={{
                        height: '150px',
                        width: '150px'
                    }}>
                        <img src="https://testasmpublic-14e65.kxcdn.com/1638777165_99e32bb69db98ccce3f2e04465a87b_2.jpeg"  />
                    </IonAvatar>
                </div>

                <div style={{
                    marginTop: '20px',
                    textAlign: 'center',
                }}>
                    <p>Sonam Choeda</p>
                    <IonNote>sonamchoeda@gmail.com</IonNote>
                </div>
                <IonList id="inbox-list">


                    {pages.map((appPage: { url: string | undefined; label: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; icon: string},
                                index: Key | null | undefined) => {

                        const isSelected = location.pathname === appPage.url;

                        return (
                            <IonMenuToggle key={ index } autoHide={false}>
                                <IonItem className={ isSelected ? 'selected' : '' } routerLink={ appPage.url } routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" icon ={ appPage.label === 'My Profile'? personOutline:
                                        (appPage.label === 'Academy')? schoolOutline :
                                            (appPage.label === 'Chats')? chatbox :
                                                (appPage.label === 'Contacts')? peopleOutline:
                                                    (appPage.label === 'Help Center')? callOutline:
                                                        (appPage.label === 'Tasks')? createOutline: star} />
                                    <IonLabel>{ appPage.label }</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
