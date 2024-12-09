import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonButtons,
  IonPage,
  IonList,
  IonItem,
  IonButton,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  addCircleOutline,
  homeOutline,
  personOutline,
  constructOutline,
} from 'ionicons/icons';
import Home from './pages/Home';
import Publicar from './pages/Publicar';
import Perfil from './pages/Perfil';
import Soporte from './pages/Soporte';
import Busqueda from './pages/Busqueda';
import Gallardo from './pages/Gallardo';
import Aventador from './pages/Aventador';
import Urus from './pages/Urus';
import Tratogallardo from './pages/Tratogallardo';
import Tratoaventador from './pages/Tratoaventador';
import Tratourus from './pages/Tratourus';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedInEmail(user.email);
      } else {
        setLoggedInEmail(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setLoggedInEmail(null);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main-content" side="start" menuId="first">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home">
                <IonIcon slot="start" icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/publicar">
                <IonIcon slot="start" icon={addCircleOutline} />
                <IonLabel>Publicar</IonLabel>
              </IonItem>
              <IonItem routerLink="/perfil">
                <IonIcon slot="start" icon={personOutline} />
                <IonLabel>Perfil</IonLabel>
              </IonItem>
              <IonItem routerLink="/soporte">
                <IonIcon slot="start" icon={constructOutline} />
                <IonLabel>Soporte</IonLabel>
              </IonItem>
              {loggedInEmail && (
                <IonItem button onClick={handleLogout}>
                  <IonIcon slot="start" icon={personOutline} />
                  <IonLabel>Cerrar Sesión</IonLabel>
                </IonItem>
              )}
              {!loggedInEmail && (
                <IonItem routerLink="/login">
                  <IonIcon slot="start" icon={personOutline} />
                  <IonLabel>Iniciar Sesión</IonLabel>
                </IonItem>
              )}
            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle className="ion-text-center">TuercaLux</IonTitle>
              <IonButtons slot="end">
                <IonButton routerLink={loggedInEmail ? '/perfil' : '/login'}>
                  <IonIcon icon={personOutline} />
                  {loggedInEmail && (
                    <p
                      style={{
                        fontSize: 'small',
                        margin: '0',
                        textAlign: 'center',
                      }}
                    >
                      {loggedInEmail}
                    </p>
                  )}
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/publicar">
                <Publicar />
              </Route>
              <Route exact path="/perfil">
                <Perfil />
              </Route>
              <Route exact path="/busqueda">
                <Busqueda />
              </Route>
              <Route exact path="/gallardo">
                <Gallardo />
              </Route>
              <Route exact path="/aventador">
                <Aventador />
              </Route>
              <Route exact path="/urus">
                <Urus />
              </Route>
              <Route exact path="/TratoGallardo">
                <Tratogallardo />
              </Route>
              <Route exact path="/TratoAventador">
                <Tratoaventador />
              </Route>
              <Route exact path="/Tratourus">
                <Tratourus />
              </Route>
              <Route exact path="/soporte">
                <Soporte />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/registrar">
                <Registrar />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true" icon={homeOutline} />
                <IonLabel>HOME</IonLabel>
              </IonTabButton>
              <IonTabButton tab="publicar" href="/publicar">
                <IonIcon aria-hidden="true" icon={addCircleOutline} />
                <IonLabel>PUBLICAR</IonLabel>
              </IonTabButton>
              <IonTabButton tab="perfil" href="/perfil">
                <IonIcon aria-hidden="true" icon={personOutline} />
                <IonLabel>PERFIL</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
