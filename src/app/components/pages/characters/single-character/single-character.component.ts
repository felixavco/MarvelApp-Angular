import { CharactersService } from './../../../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit {

  id: string;
  character: object;

  constructor( private characterService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.characterService.getOne(this.id)
      .subscribe((res: any) => {
        this.character = res.data.results[0];
      }, error => {
        console.log(error);
      });
  }

}
