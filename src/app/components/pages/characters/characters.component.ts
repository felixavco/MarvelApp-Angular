import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters = [];
  limit = 20;
  offset = 0;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getList(this.limit, this.offset, true)
      .subscribe(res => {
        this.characters = res.data.results;
      }, error => {
        console.log(error);
      });
  }

}
