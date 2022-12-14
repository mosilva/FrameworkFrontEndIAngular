import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FeraturesSectionsData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css'],
})
export class DestaqueComponent {
  @Input() public featuresDataReceive!: FeraturesSectionsData;
  @Output() public sendFeatures: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit() {
    this.sendFeatures.emit('features');
  }
}
