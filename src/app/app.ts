import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { List } from './list/list';
import { Total } from './total/total';
import { Item } from './type';

@Component({
  selector: 'app-root',
  imports: [List, Total],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  basket: Item[] = [];
  httpClient = inject(HttpClient);

  items: Item[] = [];

  constructor() {
    firstValueFrom(
      this.httpClient.get<Item[]>(`https://fakestoreapi.com/products`)
    ).then((items) => (this.items = items));
  }
  addToBasket(item: Item) {
    this.basket.push(item);
  }
}
