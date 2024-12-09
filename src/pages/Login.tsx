import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonText,
  IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowAlert(true);
    } catch (err: any) {
      console.error('Error al iniciar sesión:', err.message);
      setError('Credenciales inválidas. Intenta de nuevo.');
    }
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
    history.push('/home');
  };

  const handleRegisterRedirect = () => {
    history.push('/registrar');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="login-container">
          <div className="login-form">
            <IonText className="subtitulo">
              <h3>Bienvenido de nuevo</h3>
            </IonText>

            <IonItem className="login-item">
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonInput={(e: any) => setEmail(e.target.value)}
              />
            </IonItem>

            <IonItem className="login-item">
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonInput={(e: any) => setPassword(e.target.value)}
              />
            </IonItem>

            {error && <IonText color="danger">{error}</IonText>}

            <IonButton expand="block" onClick={handleLogin}>
              Iniciar Sesión
            </IonButton>
            <IonButton expand="block" fill="outline" onClick={handleRegisterRedirect}>
              Registrarse
            </IonButton>
          </div>
        </div>
      </IonContent>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={handleAlertDismiss}
        header="Inicio de Sesión Exitoso"
        message="¡Bienvenido de nuevo!"
        buttons={['OK']}
      />
    </IonPage>
  );
};

export default Login;
