import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchField:String= null;
  @Output() searchTextEvent= new EventEmitter<any>();
  
  onUpdateSearchText(event:Event){
    this.searchField=(<HTMLInputElement>event.target).value;
     this.searchTextEvent.emit(this.searchField );
  }

}
