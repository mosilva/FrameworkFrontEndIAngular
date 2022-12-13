import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Profiles } from 'src/app/constants/Profiles.enum';
import { HeaderSectionData } from 'src/app/models/header-section-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public valueSearch?: string;

  @Input() public headerData!: HeaderSectionData;
  @Output() public sendSearch: EventEmitter<string> =
    new EventEmitter<string>();

  public profileEnum = Profiles;

  onSubmittedSearch() {
    this.sendSearch.emit(this.valueSearch);
  }

  getSearch(event: any): void {
    this.valueSearch = event.target.value;
  }
}
