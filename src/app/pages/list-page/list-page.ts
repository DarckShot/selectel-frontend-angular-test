import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { SectionSelector } from '../../components/section-selector/section-selector';
import { IItem, ISection } from '../../data/data.types';
import { ItemSelector } from '../../components/item-selector/item-selector';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-page',
  imports: [Header, SectionSelector, ItemSelector],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPage {
  private dataService = inject(DataService);
  data = this.dataService.data;

  selectedSection = signal<ISection | null>(null);
  selectedItems = signal<IItem[]>([]);

  sections = computed(() => this.data().sections);
  sectionName = computed(() => this.selectedSection()?.sectionName || '');
  selectedItemsCount = computed(() => this.selectedItems().length);
  selectedItemsValue = computed(() =>
    this.selectedItems().reduce((sum, item) => sum + item.value, 0),
  );

  onSectionSelected(section: ISection) {
    this.selectedSection.set(section);
    this.selectedItems.set([]);
  }

  onItemsSelected(items: IItem[]) {
    this.selectedItems.set(items);
  }
}
