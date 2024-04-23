import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],

  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent  implements OnInit {

  @Output() fileUploaded:EventEmitter<File>= new EventEmitter<File>();
  @Output() onCloseForm:EventEmitter<boolean>= new EventEmitter<boolean>();
  @Input() aAfficher : number = 1;
  @Input() candidat : any;

  checksum : string ='';

  selectedFile: File | any = null;
  errorMessage: string = '';

  ngOnInit(): void {
    console.log(this.candidat);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const selectedFileNameElement = document.getElementById('selectedFileName');
    if (this.isCSVFile(this.selectedFile)) {
      // Appel de la méthode pour envoyer le fichier au serveur
      // this.uploadFile(this.selectedFile);
      if (selectedFileNameElement) {
        selectedFileNameElement.innerText = (this.selectedFile) ? this.selectedFile.name : '';
      }
  
    } else {
      console.error('Veuillez sélectionner un fichier au format CSV.');
      this.errorMessage = 'Veuillez sélectionner un fichier au format CSV.';
       // Réinitialiser le champ de fichier
      event.target.value = null;
      // Réinitialiser le fichier sélectionné à null
      this.selectedFile = null;
    }
  }

  isCSVFile(file: File): boolean {
    return file.name.endsWith('.csv');
  }
 

  // uploadFile() {
  //   if (this.selectedFile) {
  //     this.fileUploaded.emit(this.selectedFile);
  //   } else {
  //     console.error('Aucun fichier sélectionné.');
  //   }
  // }


  constructor(
    private dataService: DataService
  ){}

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

 

  closeForm(){
    this.onCloseForm.emit(false);
  }

  // send() {
  //   if (this.selectedFile && this.checksum) {

  //     console.log(`Uploading : ${this.selectedFile} ${this.checksum}`);

  //     const formData = new FormData();
  //     formData.append('content', this.selectedFile);
  //     formData.append('checksum', this.checksum);

  //     this.closeForm();

  //     // Envoi du fichier avec le checksum à l'API
  //     // this.apiService.uploadFileAndChecksum(this.selectedFile, this.checksum).subscribe(
  //     //   response => {
  //     //     console.log('Fichier envoyé avec succès à l\'API.', response);
  //     //     // Ajoutez ici la logique pour gérer la réponse de l'API
  //     //   },
  //     //   error => {
  //     //     console.error('Erreur lors de l\'envoi du fichier à l\'API.', error);
  //     //     // Ajoutez ici la logique pour gérer les erreurs de l'API
  //     //   }
  //     // );
  //   } else {
  //     console.error('Veuillez sélectionner un fichier et saisir un checksum.');
  //   }
  // }

  // uploadFile() {
  //   if (!this.selectedFile || !checksum) {
  //     console.error('Aucun fichier sélectionné.');
  //     return;
  //   }

  //   // Récupérer le type MIME du fichier
  //   const mimeType = this.selectedFile.type;

  //   // Calculer le checksum du fichier
  //   const checksum = this.checksum;

  //   // Créer un objet FormData pour envoyer le fichier à l'API
  //   const formData = new FormData();
  //   formData.append('file', this.selectedFile);
  //   formData.append('checksum', checksum.toString());
  //   formData.append('dateUpload', new Date().toISOString());
  //   formData.append('typeMime', mimeType);

  //   // Envoyer le fichier à l'API
  //   this.http.post<any>('https://apex.oracle.com/pls/apex/mcarred/parrainage/agent/uploadfile', formData)
  //     .subscribe(
  //       response => {
  //         console.log('Fichier envoyé avec succès à l\'API.', response);
  //         // Gérer la réponse de l'API ici
  //       },
  //       error => {
  //         console.error('Erreur lors de l\'envoi du fichier à l\'API.', error);
  //         // Gérer les erreurs ici
  //       }
  //     );

  //   this.closeForm();
  // }

  uploadFile() {
    if (!this.selectedFile) {
      console.error('Aucun fichier sélectionné.');
      return;
    }

    // Vérifier si le checksum est vide
    if (!this.checksum) {
      console.error('Le checksum est requis.');
      return;
    }

    // Récupérer le type MIME du fichier
    const mimeType = this.selectedFile.type;

    // Récupérer le checksum saisi par l'utilisateur
    const checksum = this.checksum;

    // Créer un objet FormData pour envoyer le fichier à l'API
    const formData = new FormData();
    formData.append('content', this.selectedFile);
    formData.append('checksum', checksum);
    formData.append('dateUpload', new Date().toISOString());
    formData.append('typeMime', mimeType);

    // Envoyer le fichier à l'API en utilisant le service DataService
    this.dataService.uploadFile(formData)
      .subscribe(
        response => {
          console.log('Fichier envoyé avec succès à l\'API.', response);
          this.closeForm();

          // Gérer la réponse de l'API ici
        },
        error => {
          console.error('Erreur lors de l\'envoi du fichier à l\'API.', error);
          // Gérer les erreurs ici
        }
      );

  }


}
