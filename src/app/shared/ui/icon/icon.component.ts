import {Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons/';
import {TitleCasePipe} from '@angular/common';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  public icon: IconDefinition = null!;
  private readonly DEFAULT_PREFIX = 'fa';

  constructor(@Attribute('iconName') private readonly iconName: IconName,
              @Attribute('prefix') private prefix: string,
              private titleCasePipe: TitleCasePipe,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    import('@fortawesome/free-solid-svg-icons').then((i: any) => {
      this.icon = i[this.prefix ?? this.DEFAULT_PREFIX + this.getImportName()];
      this.cdRef.detectChanges();
    })
  }

  private getImportName(): string {
    return this.replaceAll(this.titleCasePipe.transform(this.replaceAll(this.iconName, '-', ' ')), ' ', '');
  }

  private replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
