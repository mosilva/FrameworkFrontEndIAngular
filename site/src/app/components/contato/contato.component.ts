import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from 'src/app/models/contact-form-data.models';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  @Output() public sendForm: EventEmitter<ContactFormData> =
    new EventEmitter<ContactFormData>();

  public btnDisabled = true;

  public formData: ContactFormData = {
    email: 'teste@teste.com.br',
    message: 'Pattern',
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log('Formulário enviado!');
    // console.log(this.formData);
    this.sendForm.emit(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value);
  }
}
