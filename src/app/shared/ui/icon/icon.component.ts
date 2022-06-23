import {Component, Input, OnInit} from '@angular/core';
import {IconName} from '@fortawesome/free-solid-svg-icons/';
import {TitleCasePipe} from '@angular/common';
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() public iconName: IconName = 'circle'
  @Input() public prefix = 'fa';
  public icon: IconDefinition = faCircle

  constructor(private titleCasePipe: TitleCasePipe) {
  }

  ngOnInit() {
    const importName = this.replaceAll(this.titleCasePipe.transform(this.replaceAll(this.iconName, '-', ' ')), ' ', '')
    import('@fortawesome/free-solid-svg-icons').then((i: any) => {
      this.icon = i[ this.prefix + importName];
    })
  }

  replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
