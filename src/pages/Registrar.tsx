import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText, IonButtons, IonMenuButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Registrar: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');  // Email
  const [password, setPassword] = useState<string>('');  // Contraseña
  const [error, setError] = useState<string | null>(null);  // Para mostrar errores

  // Función para manejar el registro
  const handleRegister = async () => {
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      // Intentar crear el usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario creado:", user);

      // Redirigir al login después de crear el usuario
      history.push("/login");
    } catch (error: any) {
      console.error("Error al registrar usuario:", error.message);
      console.error("Detalles del error:", error.message, error.code);

      // Manejo de errores específicos
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya está registrado. Por favor, inicia sesión o usa otro correo.");
      } else if (error.code === "auth/invalid-email") {
        setError("El correo no es válido. Por favor, verifica el formato.");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña es demasiado débil. Debe tener al menos 6 caracteres.");
      } else {
        setError("No se pudo registrar. Verifica tus datos.");
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Regístrate</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="login-container">
          <div className="login-form">
            <IonText className="subtitulo">
              <h3>Crear una nueva cuenta</h3>
            </IonText>


            <IonItem className="login-item">
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonInput={(e: any) => setEmail(e.target.value)}
                className="login-input"
              />
            </IonItem>

 
            <IonItem className="login-item">
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonInput={(e: any) => setPassword(e.target.value)}
                className="login-input"
              />
            </IonItem>


            {error && <IonText color="danger">{error}</IonText>}

   
            <IonButton className="login-button" expand="block" onClick={handleRegister}>
              Registrarse
            </IonButton>


            <IonButton className="register-button" expand="block" fill="outline" onClick={() => history.push('/login')}>
              Ya tengo cuenta
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registrar;
