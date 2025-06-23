import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item as ItemDto } from '../type';
@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input({ required: true })
  item!: ItemDto;

  @Output() add = new EventEmitter<ItemDto>();

  addToBasket() {
    this.add.emit(this.item);
  }
}
