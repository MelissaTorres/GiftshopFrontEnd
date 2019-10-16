import { ProdsEditService } from './prods.service';
import { TestBed } from '@angular/core/testing';

describe('ProdsEditService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ProdsEditService = TestBed.get(ProdsEditService);
        expect(service).toBeTruthy();
    });
});