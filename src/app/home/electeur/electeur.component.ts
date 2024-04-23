import { Component , OnInit } from '@angular/core';
import { DrawerComponent } from '../shared/drawer/drawer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from '../shared/table/table.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-electeur',
  standalone: true,
  imports: [
    DrawerComponent, 
    NzButtonModule,
    TableComponent
  ],
  templateUrl: './electeur.component.html',
  styleUrl: './electeur.component.css'
})
export class ElecteurComponent implements OnInit {

  isOpenDrawer : boolean = false;
  loading : boolean = false;

  // electeurs : any[] = [];

  // Exemple de données d'électeurs
  electeurs : any[] = [];
  headers: string[] = ['cin', 'bureauvote', 'centrevote', 'nom', 'prenom', 'datenaissance', 'numelecteur',];

  ngOnInit(): void {
    this.getElecteurs();
  }

  constructor(
    private dataService: DataService
  ){}


  getElecteurs() {
    this.loading = true;
    this.dataService?.getElecteurs().subscribe({
      next :( value : any )=> {
        console.log(value);
        this.electeurs = value.items;
        this.loading = false;
      },
      error : error => console.log(error)
    })
  }

  openDrawer(){
    this.isOpenDrawer = true;
  }

  onCloseForm(){
    this.isOpenDrawer = !this.isOpenDrawer;
  }



}
