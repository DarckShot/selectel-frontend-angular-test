import { Component, input, output, ChangeDetectionStrategy, linkedSignal } from '@angular/core';
import { IItem, ISection } from '../../data/data.types';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.html',
  styleUrl: './item-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSelector {
  section = input.required<ISection>();
  selectedItemsCheck = output<IItem[]>();

  private selectedIds = linkedSignal({
    source: this.section,
    computation: () => new Set<number>(),
  });

  private emitSelectedItems() {
    const items = this.section()?.items?.filter((i) => this.selectedIds().has(i.id)) ?? [];
    this.selectedItemsCheck.emit(items);
  }

  isSelected(item: IItem) {
    return this.selectedIds().has(item.id);
  }

  onCheckboxChange(item: IItem, checkbox: HTMLInputElement) {
    this.toggleSelection(item, checkbox.checked);
  }

  toggleSelection(item: IItem, checked: boolean) {
    this.selectedIds.update((currentSet) => {
      const newSet = new Set(currentSet);
      checked ? newSet.add(item.id) : newSet.delete(item.id);
      return newSet;
    });
    this.emitSelectedItems();
  }
}
