import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
describe('StoreService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(StoreService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=store.service.spec.js.map