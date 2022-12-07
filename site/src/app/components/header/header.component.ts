import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public valueSearch?: string;

  @Output() public sendSearch: EventEmitter<string> =
    new EventEmitter<string>();

  onSubmittedSearch() {
    this.sendSearch.emit(this.valueSearch);
  }

  getSearch(event: any): void {
    this.valueSearch = event.target.value;
  }
}
