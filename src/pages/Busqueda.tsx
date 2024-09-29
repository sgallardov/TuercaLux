import { IonChip, IonLabel, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Busqueda.css';
import {carOutline, close} from 'ionicons/icons';
import gallardo2013 from '../images/gallardo2013.jpg';
import aventador2014 from '../images/aventador2014.jpg';
import urus2020 from '../images/urus2020.jpg';

const Busqueda: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Busqueda</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div>
        <p>Resultados que coinciden con la busqueda:</p>
        <div>
          <IonChip>
        <IonIcon icon={carOutline} color="primary"></IonIcon>
        <IonLabel>Lamborghini</IonLabel>
        <IonIcon icon={close}></IonIcon>
        </IonChip>
        </div>
        <br></br>
    <div className='ion-text-center'>
      <IonRouterLink routerLink='/gallardo'>
      <IonCard>
      <img alt="Lamborghini Gallardo" src={gallardo2013} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Gallardo 2013</IonCardTitle>
        <IonCardSubtitle>$999.999.999</IonCardSubtitle>
      </IonCardHeader>

    </IonCard>
    </IonRouterLink>
    </div>

    <br></br>
    <div className='ion-text-center'>
    <IonRouterLink routerLink='/aventador'>
      <IonCard>
      <img alt="Lamborghini Aventador" src={aventador2014} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Aventador 2014</IonCardTitle>
        <IonCardSubtitle>$999.999.999</IonCardSubtitle>
      </IonCardHeader>

    </IonCard>
    </IonRouterLink>
    </div>

    <br></br>
    <div className='ion-text-center'>
    <IonRouterLink routerLink='/urus'>
      <IonCard>
      <img alt="Lamborghini Urus" src={urus2020} />
      <IonCardHeader>
        <IonCardTitle>Lamborghini Urus 2020</IonCardTitle>
        <IonCardSubtitle>$999.999.999</IonCardSubtitle>
      </IonCardHeader>

    </IonCard>
    </IonRouterLink>
    </div>

    <br></br>
    <br></br>
    
        

        

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

export default Busqueda;
