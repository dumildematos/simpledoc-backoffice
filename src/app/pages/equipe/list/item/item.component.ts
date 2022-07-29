import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Equipe } from '../../model/equipe';

@Component({
  selector: 'ngx-equipe-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() equipe: Equipe;

  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
