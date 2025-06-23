import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item/item';
import { Item as ItemDto } from '../type';

@Component({
  selector: 'app-list',
  imports: [Item],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() items: ItemDto[] = [];

  @Output() add = new EventEmitter<ItemDto>();

  addToBasket(item: ItemDto) {
    this.add.emit(item);
  }
}
