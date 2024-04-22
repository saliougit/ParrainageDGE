import { Component } from '@angular/core';
import { DrawerComponent } from '../shared/drawer/drawer.component';

@Component({
  selector: 'app-electeur',
  standalone: true,
  imports: [
    DrawerComponent
  ],
  templateUrl: './electeur.component.html',
  styleUrl: './electeur.component.css'
})
export class ElecteurComponent {

  isOpenDrawer : boolean = false;


  openDrawer(){
    this.isOpenDrawer = true;
  }

  onCloseForm(){
    this.isOpenDrawer = !this.isOpenDrawer;
  }

}
