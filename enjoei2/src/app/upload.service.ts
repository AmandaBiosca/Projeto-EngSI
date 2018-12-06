import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private toastr: ToastrService) { }
  
  // uploadAction (e): string {
  //   let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   let pattern = /image-*/;
  //   let reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     this.toastr.error('Formato de arquivo inválido', 'Algo deu errado!');
  //     return null;
  //   }
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);
  // }

  // _handleReaderLoaded(e): string {
  //   let reader = e.target;
  //   return reader.result.split('base64,')[1];
  // }
}
