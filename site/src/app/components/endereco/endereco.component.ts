import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressSectionData } from 'src/app/models/address-section-data.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css'],
})
export class EnderecoComponent {
  @Input() public addressDataReceive!: AddressSectionData;
  @Output() public addressCreated: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit() {
    this.addressCreated.emit('address');
  }

  // public addressData: addressData = {
  //   street: 'Rua Luiz Galvez',
  //   number: 254,
  //   complement: '3º floor living room 386',
  //   state: 'AC',
  //   city: 'White river',
  //   district: 'group White Castle',
  //   zipCode: '69911-262',
  // };
}
