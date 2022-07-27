import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.scss']
})
export class KittenCardComponent implements OnInit, OnDestroy {

  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
