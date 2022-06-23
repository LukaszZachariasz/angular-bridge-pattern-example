import {Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons/';
import {TitleCasePipe} from '@angular/common';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

/**
 * Author: Łukasz Zachariasz
 */

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  public icon: IconDefinition = null!;
  private readonly DEFAULT_PREFIX = 'fa';

  private static replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  constructor(@Attribute('name') private readonly name: IconName,
              @Attribute('prefix') private prefix: string,
              private titleCasePipe: TitleCasePipe,
              private cdRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    import('@fortawesome/free-solid-svg-icons')
      .then((module: any) => this.icon = module[this.prefix ?? this.DEFAULT_PREFIX + this.getIconDefinitionPropName()])
      .then(() => this.cdRef.detectChanges())
  }

  private getIconDefinitionPropName(): string {
    return IconComponent.replaceAll(this.titleCasePipe.transform(IconComponent.replaceAll(this.name, '-', ' ')), ' ', '');
  }
}
