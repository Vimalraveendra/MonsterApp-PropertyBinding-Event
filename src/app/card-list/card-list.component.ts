import { Component, Input, OnInit } from '@angular/core';
import { Monster } from '../model/monster.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent  implements OnInit{
  @Input() monster:Monster;
 @Input()  imageUrl:string="https://robohash.org/";

  constructor(){}
 
  ngOnInit(): void {
    console.log('ths', this.monster)
    this.imageUrl = this.imageUrl+ this.monster.id+"?set=set2&size=180x180";
  }
}
