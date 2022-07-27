import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../layout/news.service';
import { DocumentoService } from '../service/documento.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private newsService: NewsService,private documentoService: DocumentoService) { }

  ngOnInit() {
  }

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.documentoService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe({
        next: (nextNews) => {
          console.log(nextNews)
          cardData.placeholders = [];
          cardData.news.push(...nextNews);
          cardData.loading = false;
          cardData.pageToLoadNext++;
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

}
