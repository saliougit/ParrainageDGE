import { Component } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';

@Component({
  selector: 'app-candidat',
  standalone: true,
  imports: [
    TableComponent,
    
  ],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent {

}
