import { IonContent, IonHeader, IonPage, IonAlert, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonInput, IonTextarea, IonButton, IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Publicar.css';
import addimage from '../images/addimage.png'

const Publicar: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Publicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
      <IonBreadcrumbs>
      <IonBreadcrumb href="/Home">Menu principal</IonBreadcrumb>
      <IonBreadcrumb href="/Publicar">Publicar vehículo</IonBreadcrumb>
    </IonBreadcrumbs>
    </div>
        <div className='small-card columnas-x2'>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>Agregar imagen</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      <img alt="Agregar imagen" src={addimage} />
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>Agregar imagen</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      <img alt="Agregar imagen" src={addimage} />
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>Agregar imagen</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      <img alt="Agregar imagen" src={addimage} />
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle className='ion-text-center'>Agregar imagen</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
      <img alt="Agregar imagen" src={addimage} />
      </IonCardContent>
    </IonCard>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>




<div> 
<IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="">
          <div slot="label">
          Marca
          </div>
        </IonInput>
      </IonItem>

<br></br>

<IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="">
          <div slot="label">
            Modelo
          </div>
        </IonInput>
      </IonItem>

<br></br>

<IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="" type='number'>
          <div slot="label">
            Kilometraje
          </div>
        </IonInput>
      </IonItem>

<br></br>

<IonItem className='ion-margim-bottom'>
        <IonInput labelPlacement="floating" value="" type='number'>
          <div slot="label">
            Año
          </div>
        </IonInput>
      </IonItem>

<br></br>


<IonItem className='ion-margin-bottom'>
  <IonTextarea labelPlacement="floating" autoGrow={true} rows={6}>
    <div slot="label">Descripción</div>
  </IonTextarea>
</IonItem>

<br></br>

<div className='ion-text-center'>
<IonButton  id="alerta-publicar">Publicar</IonButton>
      <IonAlert
        trigger="alerta-publicar"
        header="Vehiculo publicado con éxito!"
        message="Ahora los adictos a la tuerca podran ver tu publicación."
        buttons={['Cerrar']}
      ></IonAlert>

</div>

<br></br>
<br></br>


</div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Publicar" />
      </IonContent>
    </IonPage>
  );
};

export default Publicar;
