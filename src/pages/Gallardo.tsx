import {IonAlert, IonButton, IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Configuracion.css';
import gallardo2013 from '../images/gallardo2013.jpg';

const Gallardo: React.FC = () => {
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
      <IonBreadcrumb href="/Busqueda">Busqueda</IonBreadcrumb>
      <IonBreadcrumb href="/Gallardo">Gallardo 2013</IonBreadcrumb>
    </IonBreadcrumbs>
    </div>

      <IonCard className='ion-text-center'>
      <img alt="Gallardo 2013" src={gallardo2013} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Gallardo 2013</IonCardTitle>
        <IonCardSubtitle>Kilometros: 4.700</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      El Lamborghini Gallardo cuenta con un motor V10 de 5.2 litros que genera 550 caballos de fuerza, tracción total y una aceleración de 0 a 100 km/h en 3.7 segundos.
$999.999.999</IonCardContent>
    </IonCard>
    <h6 className='ion-text-center'>Publicado por: Tomas Gonzalez</h6>
    <h6 className='ion-text-center'>+56 9 9999 6666</h6>

    <div className='ion-text-center'>
<IonButton  id="alerta-gallardo">Solicitar compra</IonButton>
      <IonAlert
        trigger="alerta-gallardo"
        header="Solicitud de compra enviada con éxito!"
        message="Ahora a esperar la respuesta de Tomas :)."
        buttons={['Cerrar']}
      ></IonAlert>

</div>
 

 <br></br>
<div className='ion-text-center'>
<IonButton href='/Tratogallardo' id="trato-gallardo">Cerrar trato </IonButton>
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

export default Gallardo;