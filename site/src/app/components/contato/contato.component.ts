import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  public btnDisabled = true;
  public formData = {
    email: '',
    message: '',
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    console.log('Formulário enviado!');
  }

  public showInputData(event: any): void {
    console.log(event.target.value);
  }
}
