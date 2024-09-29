import { IonButton, IonAlert, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBreadcrumb, IonBreadcrumbs, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Configuracion.css';
import Aventador from '../images/aventador2014.jpg'

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
      <IonBreadcrumb href="/Aventador">Aventador 2014</IonBreadcrumb>
    </IonBreadcrumbs>
    </div>

      <IonCard className='ion-text-center'>
      <img alt="Aventador 2014" src={Aventador} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Aventador 2014</IonCardTitle>
        <IonCardSubtitle>Kilometros: 2.100</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      El Lamborghini Aventador es un superdeportivo con un motor V12 de 6.5 litros, que genera 700 caballos de fuerza, permitiendo una aceleración de 0 a 100 km/h en 2.9 segundos. Con un diseño aerodinámico agresivo y tracción en las cuatro ruedas, alcanza una velocidad máxima de 350 km/h.   $999.999.999</IonCardContent>
    </IonCard>

    <h6 className='ion-text-center'>Publicado por: Rodolfo Rosales</h6>
    <h6 className='ion-text-center'>+56 9 5454 9493</h6>

    <div className='ion-text-center'>
<IonButton  id="alerta-aventador">Solicitar compra</IonButton>
      <IonAlert
        trigger="alerta-aventador"
        header="Solicitud de compra enviada con éxito!"
        message="Ahora a esperar la respuesta de Rodolfo :)."
        buttons={['Cerrar']}
      ></IonAlert>

</div>


<br></br>

<div className='ion-text-center'>
<IonButton href='/Tratoaventador' id="trato-aventador">Cerrar trato </IonButton>
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