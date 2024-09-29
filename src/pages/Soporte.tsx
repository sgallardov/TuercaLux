import {IonButton, IonAlert, IonItem, IonInput, IonTextarea,  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Soporte.css';

const Soporte: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Soporte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <h5 className='ion-text-center'>Soporte</h5>

      <br></br>
        <div>
        <IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="" type='number'>
          <div slot="label">
            Nombre completo
          </div>
        </IonInput>
      </IonItem>

<br></br>


<IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="" type='number'>
          <div slot="label">
            Correo electrónico
          </div>
        </IonInput>
      </IonItem>

<br></br>


<IonItem className='ion-margin-bottom'>
  <IonTextarea labelPlacement="floating" autoGrow={true} rows={6}>
    <div slot="label">Mensaje, sugerencia y/o reclamo.</div>
  </IonTextarea>
</IonItem>

<br></br>
<br></br>

        </div>

        <div className='ion-text-center'>
<IonButton  id="alerta-enviar">Enviar</IonButton>
      <IonAlert
        trigger="alerta-enviar"
        header="Mensaje enviado con éxito!"
        message="Te estaremos contactando para resolver tu caso."
        buttons={['Cerrar']}
      ></IonAlert>

</div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Soporte;