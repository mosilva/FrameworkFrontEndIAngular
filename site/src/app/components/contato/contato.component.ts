import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactFormData } from 'src/app/models/contact-form-data.models';
import { State } from 'src/app/models/states.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  @Output() public sendForm: EventEmitter<ContactFormData> =
    new EventEmitter<ContactFormData>();

  public btnDisabled = true;

  public form!: FormGroup;

  public formData!: ContactFormData;

  public states: State[] = [
    { name: 'Acre', initials: 'AC' },
    { name: 'Alagoas', initials: 'AL' },
    { name: 'Amapá', initials: 'AP' },
    { name: 'Amazonas', initials: 'AM' },
    { name: 'Bahia', initials: 'BA' },
    { name: 'Ceará', initials: 'CE' },
    { name: 'Distrito Federal', initials: 'DF' },
    { name: 'Espírito Santo', initials: 'ES' },
    { name: 'Goiás', initials: 'GO' },
    { name: 'Maranhão', initials: 'MA' },
    { name: 'Mato Grosso', initials: 'MT' },
    { name: 'Mato Grosso do Sul', initials: 'MS' },
    { name: 'Minas Gerais', initials: 'MG' },
    { name: 'Pará', initials: 'PA' },
    { name: 'Paraíba', initials: 'PB' },
    { name: 'Paraná', initials: 'PR' },
    { name: 'Pernambuco', initials: 'PE' },
    { name: 'Piauí', initials: 'PI' },
    { name: 'Rio de Janeiro', initials: 'RJ' },
    { name: 'Rio Grande do Norte', initials: 'RN' },
    { name: 'Rio Grande do Sul', initials: 'RS' },
    { name: 'Rondônia', initials: 'RO' },
    { name: 'Roraima', initials: 'RR' },
    { name: 'Santa Catarina', initials: 'SC' },
    { name: 'São Paulo', initials: 'SP' },
    { name: 'Sergipe', initials: 'SE' },
    { name: 'Tocantins', initials: 'TO' },
  ];

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      cpf: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
      message: new FormControl(),
      address: new FormGroup({
        zipcode: new FormControl(),
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        neighborhood: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      }),
      contact: new FormGroup({
        phone: new FormControl(),
        email: new FormControl(),
      }),
    });
  }

  public submitForm(): void {
    console.log('Formulário enviado!');
    console.log(this.form);
    this.formData = this.form.getRawValue();
    console.log(this.formData);
    // this.sendForm.emit(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value);
  }
}
