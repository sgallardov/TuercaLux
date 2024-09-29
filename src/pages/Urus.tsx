import {IonButton, IonAlert, IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Configuracion.css';
import Urus from '../images/urus2020.jpg';

const Configuracion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuracion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <div>
      <IonBreadcrumbs>
      <IonBreadcrumb href="/Busqueda">Busqueda</IonBreadcrumb>
      <IonBreadcrumb href="/Urus">Urus 2020</IonBreadcrumb>
    </IonBreadcrumbs>
    </div>

      <IonCard className='ion-text-center'>
      <img alt="Aventador 2014" src={Urus} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Urus 2020</IonCardTitle>
        <IonCardSubtitle>Kilometros: 7.100</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      El Lamborghini Urus es un SUV de lujo con un potente motor V8 biturbo de 4.0 litros que genera 641 caballos de fuerza. Combina un diseño agresivo y elegante con un interior opulento y tecnología de vanguardia, ofreciendo un rendimiento excepcional tanto en carretera como fuera de ella. $999.999.999</IonCardContent>
    </IonCard>

    <h6 className='ion-text-center'>Publicado por: Pedro Pascal</h6>
    <h6 className='ion-text-center'>+56 9 1234 5678</h6>

    <div className='ion-text-center'>
<IonButton  id="alerta-urus">Solicitar compra</IonButton>
      <IonAlert
        trigger="alerta-urus"
        header="Solicitud de compra enviada con éxito!"
        message="Ahora a esperar la respuesta de Pedro :)."
        buttons={['Cerrar']}
      ></IonAlert>

</div>

<br></br>

<div className='ion-text-center'>
<IonButton href='/Tratourus' id="trato-urus">Cerrar trato </IonButton>
</div>

<br></br>
<br></br>
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

export default Configuracion;