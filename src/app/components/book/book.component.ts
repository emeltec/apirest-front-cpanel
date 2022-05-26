import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: IBook = {} as IBook;
  notCover = 'https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png'

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBookFromStore();
  }

  getBookFromStore(): void {
    this.book = this.store.selectedBook$.getValue();
    if(this.book.title == undefined) {
      this.router.navigate(['books']);
    }
    console.log(this.book)
  }

  getImageCover(): string {
    if(this.book.title !== undefined) {
      if(this.book.url_image == null || this.book.url_image == '' ) {
        return this.notCover;
      } else {
        return this.book.url_image;
      }
    }
    return this.notCover;
  }

  editBook(book:IBook) {
    this.store.editBook$.next(book);
    this.router.navigate(['edit-book'])
  }

}
