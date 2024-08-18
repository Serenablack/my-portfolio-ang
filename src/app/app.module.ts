import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { provideToastr, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [BrowserModule, SweetAlert2Module.forRoot(), ToastrModule.forRoot()],
  providers: [
    { provide: Window, useValue: window },
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
