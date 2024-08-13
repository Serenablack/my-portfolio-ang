import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  showAlert(
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    text?: string
  ) {
    Swal.fire({
      title: title,
      text: text,
      icon: type,
      confirmButtonText: 'OK',
    });
  }

  showConfirmAlert(
    title: string,
    text: string,
    confirmText: string,
    cancelText: string
  ) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });
  }
}
