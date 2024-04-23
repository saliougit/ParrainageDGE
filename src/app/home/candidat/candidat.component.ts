import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { DrawerComponent } from '../shared/drawer/drawer.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-candidat',
  standalone: true,
  imports: [
    TableComponent,
    DrawerComponent,
    CommonModule
  ],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent  implements OnInit {
  isOpenDrawer : boolean = false;
  drawerContent: number = 0;
  selectedCandidate: any = null;


  candidats : any[] = [];
  

  ngOnInit(): void {
    this.getCandidats();

      
  }

  constructor(
    private http : HttpClient ,
    private dataService : DataService
  ){}


  getCandidats(){
    // this.loading = true;
    this.dataService?.getCandidats().subscribe({
      next :( value : any )=> {
        console.log(value);
        this.candidats = value.items;
        // this.loading = false;
      },
      error : error => console.log(error)
    })
  }

  getNbCandidats(): number{
    return this.candidats.length;
  }

  openDrawer(caseId : number, candidate? : any) :void{
    this.isOpenDrawer = true;
    this.drawerContent = caseId;
    if(caseId == 2 && candidate){
      this.selectedCandidate = candidate;
    }else {
      this.selectedCandidate = null;
    }
    
  }

  onCloseDrawer(){
    this.isOpenDrawer = false;
  }
}
