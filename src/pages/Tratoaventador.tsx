import {IonAlert, IonButton, IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Configuracion.css';
import aventador2014 from '../images/aventador2014.jpg';

const Tratogallardo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallardo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div>
      <IonBreadcrumbs>
      <IonBreadcrumb href="/Home">Menu principal</IonBreadcrumb>
      <IonBreadcrumb href="/Tratoaventador">Trato cerrado</IonBreadcrumb>
    </IonBreadcrumbs>
    </div>

    <br></br>
    <h1 className='ion-text-center'>FELICITACIONES!</h1>
    <h1 className='ion-text-center'>TRATO CERRADO!</h1>

      <IonCard className='ion-text-center'>
      <img alt="Aventador 2014" src={aventador2014} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Aventador 2014</IonCardTitle>
        <IonCardSubtitle>Kilometros: 2.100</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
    <br></br>
    <div className='ion-text-center'>
<IonButton  id="alerta-compartirg">Compartir</IonButton>
      <IonAlert
        trigger="alerta-compartirg"
        header="Trato compartido!"
        buttons={['Cerrar']}
      ></IonAlert>

</div>

<br></br>
<br></br>


        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Gallardo" />
      </IonContent>
    </IonPage>
  );
};

export default Tratogallardo;