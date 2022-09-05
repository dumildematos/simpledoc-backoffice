import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://dumildematos.github.io/" target="_blank">Dumilde Matos</a></b> 2022
    </span>
    <div class="socials">
      <a href="https://github.com/dumildematos" target="_blank" class="ion ion-social-github"></a>
      <!-- <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a> -->
      <a href="https://www.linkedin.com/in/dumilde-matos/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
