import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../type';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.html',
  styleUrl: './total.css',
})
export class Total {
  @Input() basket!: Item[];
}
