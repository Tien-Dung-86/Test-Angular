import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../iuser";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  text: string = '';
  pageTitle: string = "Quản lý người dùng";
  imageSize: number = 150;
  showImage: boolean = false;
  message: string = '';
  searchText?: string;
  userFillter: IUser[] = [];
  users: IUser[] = [
    {
      name: 'Nguyen Van Nam',
      email: 'nam@gmail.com',
      phone: '093538616',
      address: 'Ha Noi',
      image: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
    },
    {
      name: 'Tran Van Duong',
      email: 'duong@gmail.com',
      phone: '09613456',
      address: 'Ha Noi',
      image: "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png",
    },
    {
      name: 'Pham Thi Linh',
      email: 'linh@gmail.com',
      phone: '094564576',
      address: 'Da Nang',
      image: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
    }
  ]

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userFillter = this.users;
  }

  showHideImage() {
    this.showImage = !this.showImage;
  }

  searchUser(event: any) {
    let keyword = event.toLowerCase();
    this.userFillter = (keyword) ? this.findUserByKeyword(keyword) : this.users;
  }

  findUserByKeyword(keyword: string) {
    return this.users.filter(user => {
      return (user.name.toLocaleLowerCase().indexOf(keyword) != -1 || user.email.toLocaleLowerCase().indexOf(keyword) != -1);
    })
  }

  deleteUser(index: number) {
    if (confirm('Are you sure?'))
      this.users.splice(index, 1);
    this.text = "Delete user Successful";
  }

  changSizeImage(event: any) {
    this.imageSize = event.target.value;
  }

  showDetail() {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: {name: "An", email: "an@gmail.com", address: "Hanoi", phone: "0161684666"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
