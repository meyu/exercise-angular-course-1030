import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WallComponent } from './wall/wall.component';
import { SearchComponent } from './search/search.component';
import { MessagesBoardComponent } from './messages-board/messages-board.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [TimelineComponent, InvoiceComponent, PricingComponent, ContactsComponent, FaqComponent, ProjectsComponent, BlogComponent, ArticleComponent, ProfileComponent, GalleryComponent, WallComponent, SearchComponent, MessagesBoardComponent]
})
export class PagesModule { }
