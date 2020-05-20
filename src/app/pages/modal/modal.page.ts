import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component:ModalInfoPage,
      componentProps:{
        'nombre':'Oliver Galaviz',
        'pais':'México'
      }
    });
    await modal.present();
    
    const { data }= await modal.onDidDismiss();
    console.log('Retorno del modal');
    console.log(JSON.stringify(data));
  }

}
