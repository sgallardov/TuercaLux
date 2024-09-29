import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Perfil.css';
import charger from '../images/charger.avif'
import lfa from '../images/lfa.jpg'
import f40 from '../images/F40.jpg'

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <img src={charger} alt="Charger" className="full-width-image" />
      <div className='centrar-perfil'> 
      <IonAvatar >
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>  
      <h5 className='ion-text-center'>  Santiago Gallardo</h5>
      </div>
      <br></br>
      <h2 className='ion-text-center'>Tus publicaciones</h2>
      <br></br>
      <div className='ion-text-center'>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Lexus LFA</IonCardTitle>
        <img alt="LFA" src={lfa} />
      </IonCardHeader>
      <IonCardContent>$999.999.999</IonCardContent>
    </IonCard>
    </div>
    <br></br>
    <div className='ion-text-center'>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ferrari F40</IonCardTitle>
        <img alt="LFA" src={f40} />
      </IonCardHeader>
      <IonCardContent>$999.999.999</IonCardContent>
    </IonCard>
    </div>
      <h2 className='ion-text-center'>Referencias</h2>
      <br></br>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Roberto Osses</IonCardTitle>
        <IonCardSubtitle>Calificación: 4.8 estrellas</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Un agrado el poder hacer negocios con Santiago, respuestas rápidas, buenas fotos y muy amable. Lo unico que no me gusto del todo fue el olor que tenia el auto.</IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Francesco Virgolini</IonCardTitle>
        <IonCardSubtitle>Calificación: 2.0 estrellas</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Buenas fotos y descripciones pero realmente un desagrado el contacto con el vendedor, no lo recomendaría.</IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ivo Matus</IonCardTitle>
        <IonCardSubtitle>Calificación: 3.0 estrellas</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Muy amable y con una respuesta muy rápida, pero cuando fui a ver el vehículo estaba con miles de fallas que no se mostraron en la imágen.</IonCardContent>
    </IonCard>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
