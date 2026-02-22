import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  sectionName = input<string>('');
  selectedItemsCount = input<number>(0);
  selectedItemsValue = input<number>(0);
}
