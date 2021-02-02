import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowArticleComponent } from '../show-article/show-article.component';

@Component({
  selector: 'app-add-edit-art',
  templateUrl: './add-edit-art.component.html',
  styleUrls: ['./add-edit-art.component.css']
})
export class AddEditArtComponent implements OnInit {

  constructor(private service: SharedService, private xxx: ShowArticleComponent) { }

  @Input() art:any;
  Id:string;
  Title:string;
  Body:string;

  ngOnInit(): void {
    this.Id=this.art.id;
    this.Title=this.art.title;
    this.Body=this.art.body;
  }

  addArticle(){
    var val = {Id:this.Id, Title:this.Title, Body:this.Body};
    this.service.addArticles(val).subscribe(res=>{
      alert(res.toString());
      this.xxx.closeClick();
    });
    
  }

  updateArticle(){
    var val = {Id:this.Id, Title:this.Title, Body:this.Body};
    this.service.updateArticles(val).subscribe(res=>{
      alert(res.toString());
      this.xxx.closeClick();
    }); 
  }


}
