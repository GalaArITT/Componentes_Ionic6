import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment,{static:true}) segment: IonSegment;
  //observable para subscribe
  superHeroes:Observable<any>
  //variable para busqueda
  publisher='';

  constructor(private dataService:DataService) { }

  ngOnInit() {
   // this.segment.value = 'torneo';
   this.segment.value='torneo';
   this.superHeroes = this.dataService.getSuperHeroes();
  }
  segmentChanged(event){
    const valorSegmento = event.detail.value;
    
    //filtrar valores 
    if(valorSegmento==='torneo'){
      this.publisher = '';
    }else{
      this.publisher = valorSegmento;
    }
    console.log(valorSegmento);
  }

}
