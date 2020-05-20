import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //arreglo para detalles de los componentes el cual está a base de una interface
  componentes: Observable<Componente[]>;
  constructor(private menuCtrl:MenuController, private dataService:DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}

