import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DocumentoAction, DocumentoDetail } from '../../model/documento';


@Component({
  selector: 'ngx-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.scss']
})
export class KittenCardComponent implements OnInit, OnDestroy {

  @Input() documento: DocumentoDetail;
  @Output() action = new EventEmitter<DocumentoAction>();
  docmentoAction: DocumentoAction = {
    documento: null,
    operation: null
  }


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

  operation(action: string): void {
    this.docmentoAction = {
      documento: this.documento,
      operation: action
    }
    this.action.emit(this.docmentoAction);
  }

}
