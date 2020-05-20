import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  
  titulo:string;

  constructor(public alertController : AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Este es un mensaje de Alerta.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Boton Ok');
        }
      }]
    });
    await alert.present();
  }
  async presentAlertPrompt(){
    const input = await this.alertController.create({
      header: 'Alerta de Prompt',
      subHeader:'Ingrese su nombre',
      inputs:[{
        name: 'txtNombre', //imprimir name
        type: 'text',
        placeholder:'Escribe un nombre'
      }],
      buttons:[{
        text:'Cancel',
        role:'cancel',
        handler:()=>{
          console.log("Evento de cancelar")
        }
      },{
        text:'Ok',
        handler:(data)=> {
          console.log("Confimar", data);
          this.titulo = data.txtNombre;
      }
        
      }]
    });
    await input.present();
  }
  
  ngOnInit() {
  }

}
