import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';
//no importa por default el popinfocomponent


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ],
  exports:[
    HeaderComponent, //es para los que se usen en otras paginas
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //importar porque sino no los reconoce
    RouterModule
  ]
})
export class ComponentsModule { }
