import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { DataType, ISection } from '../../data/data.types';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.html',
  styleUrl: './section-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSelector {
  sections = input.required<ISection[]>();
  selectedSectionChange = output<ISection>();

  onSectionChange(section: ISection) {
    this.selectedSectionChange.emit(section);
  }
}
