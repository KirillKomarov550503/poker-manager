import { Injectable } from '@angular/core';

import { DataBaseService } from '../data-base.service';

@Injectable()
export class DataBaseSericeService {

  constructor(
    private readonly dataBaseService: DataBaseService,
  ) { }
}
