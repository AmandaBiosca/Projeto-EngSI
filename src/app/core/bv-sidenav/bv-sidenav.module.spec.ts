import { BvSidenavModule } from './bv-sidenav.module';

describe('BvSidenavModule', () => {
  let bvSidenavModule: BvSidenavModule;

  beforeEach(() => {
    bvSidenavModule = new BvSidenavModule();
  });

  it('should create an instance', () => {
    expect(bvSidenavModule).toBeTruthy();
  });
});
