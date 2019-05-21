import { Component, OnInit } from '@angular/core';
//Service
import { PostService } from '../services/post.service'
//Router
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  sub: any;
  article: object;

  constructor(public _post:PostService , public _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((params)=>{this.id=params['id']
  });
    this.article = this._post.DatoDummy[this.id];
  }

ngOnDestroy(){
  this.sub.unsubscribe();
  
}

timeConverter(date):string{
  var a = new Date(date * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


}
