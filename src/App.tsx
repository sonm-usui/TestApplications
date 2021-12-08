import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MyProfile from './pages/MyProfile';
import Academy from './pages/Academy';
import Chats from './pages/Chats';
import Contacts from './pages/Contacts';
import Tasks from './pages/Tasks';
import HelpCenter from './pages/HelpCenter';


const App = () => {

  const pages = [
    {
      label: "My Profile",
      url: "/myprofile",
      icon: "profile",
      component: MyProfile
    },
    {
      label: "Academy",
      url: "/Academy",
      icon: "school-outline",
      component: Academy
    },
    {
      label: "Chats",
      url: "/chats",
      icon: "chatbox",
      component: Chats
    },
    {
      label: "Contacts",
      url: "/contacts",
      icon: "book",
      component: Contacts
    },
    {
      label: "Tasks",
      url: "/task",
      icon: "book",
      component: Tasks
    },
    {
      label: "Help Center",
      url: "/helpcenter",
      icon: "book",
      component: HelpCenter
    }
  ];

  return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu pages={ pages } />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/myprofile" />
              </Route>

              { pages.map((page, index) => {
                const pageComponent = page.component;
                return (
                    <Route key={ index } path={ page.url } exact={ true } component={ pageComponent } />
                );
              })}
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
  );
};

export default App;
