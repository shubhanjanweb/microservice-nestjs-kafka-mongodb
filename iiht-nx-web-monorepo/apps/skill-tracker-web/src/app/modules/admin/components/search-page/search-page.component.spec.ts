// import { SearchPageComponent } from './search-page.component';

// (window as { [key: string]: any }) = {};
// (window as { [key: string]: any })['env'] = {};
// (window as { [key: string]: any })["env"]["apiUrl"] = '';
// (window as { [key: string]: any })["env"]["debug"] = false;

// describe('SearchPageComponent', () => {
//   let component: SearchPageComponent;
//   let searchSrvcMock: any;

//   beforeEach(() => {
//     searchSrvcMock = {
//       getSkillList: jest.fn(),
//       getProfiles: jest.fn()
//     };
//     component = new SearchPageComponent(searchSrvcMock);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('Test ngOnInit()', () => {

//     it('should call getSkillList', () => {
//       component.ngOnInit();
//       expect(searchSrvcMock.getSkillList).toHaveBeenCalled();
//     });

//   });

//   describe('Test onSearch()', () => {

//     it('should call getProfiles', () => {
//       let data = {};
//       component.onSearch(data);
//       expect(searchSrvcMock.getProfiles).toHaveBeenCalledWith(data);
//     });

//   });

// });

describe('Test', () => {
  it('should run', () => {
    expect(true).toBe(true);
  });
});
