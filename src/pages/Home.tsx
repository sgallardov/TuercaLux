import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonButton, IonInput, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import image911 from '../images/911gt4rs.jpeg';
import Busqueda from './Busqueda';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <img src={image911} alt="911 GT4 RS" className="full-width-image" />
      <h5 className='ion-text-center'>Hora de buscar el auto de tus sueños!</h5>
      <br></br>
      <br></br>
      <IonItem>
        <IonInput labelPlacement="floating" value="">
          <div slot="label">
            Marca
          </div>
        </IonInput>
      </IonItem>
      <br></br>
      <IonItem>
        <IonInput labelPlacement="floating" value="">
          <div slot="label">
            Modelo 
          </div>
        </IonInput>
      </IonItem>
      <br></br>
      <div className='ion-text-center'>
      <IonButton routerLink='/busqueda'>Buscar</IonButton>
      </div>
      <br></br>
      <h6 className='ion-text-center'>Marcas mejor valoradas este mes</h6>
      <IonList>
      <IonItem>
        <IonLabel className='ion-text-center'>1. Porsche</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className='ion-text-center'>2. Lexus</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className='ion-text-center'>3. Aston Martin</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className='ion-text-center'>4. Lamborghini</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className='ion-text-center'>5. Lotus</IonLabel>
      </IonItem>
    </IonList>
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

export default Home;
