import { NavbarComponent } from './../../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AutheticationService } from 'src/app/core/authetication.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  constructor(private service: SharedService, public autheticated: AutheticationService) { }

  ArticleList:any=[];

  ModalTitle:string;
  ActiveAddEditArtComp:boolean=false;
  art:any;
  searchText;

  ngOnInit(): void {
    this.refreshArtList();
  }

  addClick() {
    this.art = {
      Id:0,
      Title: "",
      Body: "",
    }
    this.ModalTitle = "Add Article";
    this.ActiveAddEditArtComp = true;
  }

  editClick(item){
    this.art=item;
    this.ModalTitle="Edit Article";
    this.ActiveAddEditArtComp=true;
  }

  deleteClick(item){
     if(confirm('Are you sure?')){
       this.service.deleteArticles(item.id).subscribe(data=>{
         alert(data.toString());
         this.refreshArtList();
       })
     }
  }

  closeClick() {
    this.ActiveAddEditArtComp = false;
    this.refreshArtList();
  }

  refreshArtList() {
    this.service.getArtList().subscribe(data =>
      {
       this.ArticleList = data; 
      });
  }

  

}
