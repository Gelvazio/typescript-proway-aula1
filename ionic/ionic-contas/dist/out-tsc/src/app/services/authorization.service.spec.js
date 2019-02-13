import { TestBed } from '@angular/core/testing';
import { AuthorizationService } from './authorization.service';
describe('AuthorizationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthorizationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authorization.service.spec.js.map