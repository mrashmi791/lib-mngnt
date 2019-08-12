import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../api/api.service';
import { Book } from './../../models/book-mangnt.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  // bookList: Book[] = [];
  // addNewBook = new Book();
  // isEdit: boolean = false;
  // selectedIndex: number;

  url: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchObj = new Book();
  searchValue: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // let book: Book = {
    //   sr: 1,
    //   authorName: 'Rashmi',
    //   bookName: 'Maths',
    //   noOfBooks: 5,
    //   publication: 'Chandra'
    // };

    // let book2 = new Book();
    // book2.authorName = 'Mrityunjay';
    // book2.bookName = 'Java';
    // book2.noOfBooks = 10;
    // book2.publication = 'Arihant';
    // book2.sr = 2;

    // this.bookList.push(book);
    // this.bookList.push(book2);
  }
  // passing api(url) to service and return data...
  getBook() {
    if(this.searchValue.length === 0) {
      alert("Please enter any book name..!!");
      return;
    } else {
      this.apiService.getBookList(this.url + this.searchValue).subscribe(data => {
        console.log(data);
        this.searchObj = data;
      });
    }
    


    // if(this.isEdit) {
    //   this.bookList[this.selectedIndex] = this.addNewBook;
    // } else {
    //   this.bookList.push(this.addNewBook);
    // }
    
    // this.isEdit = false;
    // this.selectedIndex = -1;
    // this.addNewBook = new Book();
  }

  // deleteRecord(index: number) {
  //   this.bookList.splice(index,1);
  // }

  // editRecord(book: Book, index: number) {
  //   this.addNewBook = book;
  //   this.selectedIndex = index;
  //   this.isEdit = true;
  // }

}
