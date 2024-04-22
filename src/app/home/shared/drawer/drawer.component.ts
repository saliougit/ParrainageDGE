import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {

  @Output() fileUploaded:EventEmitter<File>= new EventEmitter<File>();
  @Output() onCloseForm:EventEmitter<boolean>= new EventEmitter<boolean>();

  checksum : string ='';

  selectedFile: File | any = null;
  errorMessage: string = '';

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
 

  uploadFile() {
    if (this.selectedFile) {
      this.fileUploaded.emit(this.selectedFile);
    } else {
      console.error('Aucun fichier sélectionné.');
    }
  }



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

  send() {
    if (this.selectedFile && this.checksum) {

      console.log(`Uploading : ${this.selectedFile} ${this.checksum}`);

      const formData = new FormData();
      formData.append('content', this.selectedFile);
      formData.append('checksum', this.checksum);

      this.closeForm();

      // Envoi du fichier avec le checksum à l'API
      // this.apiService.uploadFileAndChecksum(this.selectedFile, this.checksum).subscribe(
      //   response => {
      //     console.log('Fichier envoyé avec succès à l\'API.', response);
      //     // Ajoutez ici la logique pour gérer la réponse de l'API
      //   },
      //   error => {
      //     console.error('Erreur lors de l\'envoi du fichier à l\'API.', error);
      //     // Ajoutez ici la logique pour gérer les erreurs de l'API
      //   }
      // );
    } else {
      console.error('Veuillez sélectionner un fichier et saisir un checksum.');
    }
  }

}
