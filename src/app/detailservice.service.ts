import { Injectable } from '@angular/core';
import { facilityDetail } from './facilityDetail';
import { listofDetail } from './mock-detail';
@Injectable()
export class DetailserviceService {
    getAllDetail():facilityDetail[]
    {
        return listofDetail;
    }

}
