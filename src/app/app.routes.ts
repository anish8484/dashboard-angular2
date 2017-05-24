import { Routes } from '@angular/router';
//import { TablesBasicComponent } from './pages/tables-basic/tables-basic.component';
import { UserComponent } from './pages/user/user.component';

/**
 * Router Setting
 *
 * Write your component (Page) here to load.
 */
 export const ROUTES: Routes = [
   { path: '', redirectTo: '/', pathMatch: 'full' },

   //{ path: 'manageRoles',  component: RolesComponent },
   //{
     //path: 'Revenue/Salesperson',
     //component: DashboardEdgeComponent
   //},
   //{
     //path: 'Sales',
     //component: ComponentButtonsComponent
   //},
   /*{
     path: 'organization',
     //component: ComponentProgressComponent
   },
   {
     path: 'salesman',
     //component: ComponentCardComponent
   },
   {
     path: 'createBarcode',
     //component: ComponentBootstrapComponent
   },*/
   {
     path: 'manageUsers',
     component: UserComponent
   }
   /*{
     path: '/recordPower/1/20',
     //component: ComponentNotificationsComponent
   },
   {
     path: 'returnOrder',
     //component: ComponentRadioButtonComponent
   },
   {
     path: 'FranchisePOView',
     //component: ComponentCheckboxComponent
   },
   {
     path: 'bulkOrderList',
     //component: ComponentChipsComponent
   },
   {
     path: 'gatePass/1/20',
     //component: ComponentDatePickerComponent
   },
   {
     path: 'inventorycount',
     //component: ComponentListComponent
   },
   {
     path: 'inventorycounthistory/1',
     //component: ComponentMediaPlayerComponent
   },
   {
     path: '48HourCalling/1/20',
     //component: ComponentMenuComponent
   },
   {
     path: 'posBlockedProducts',
     //component: ComponentGridListComponent
   },
   {
     path: 'customerOrderSearch',
     //component: ComponentSelectComponent
   },
   {
     path: 'giftVouchers',
     //component: ComponentSlideToggleComponent
   },
   {
     path: 'dashboard',
     //component: ComponentSliderComponent
   },
   {
     path: 'reports/1/1/20',
     //component: ComponentTabsComponent
   },
   {
     path: 'reports/2/1/20',
     //component: ComponentTextEditorComponent
   },
   {
     path: 'reports/7/1/20',
     //component: ComponentToolbarComponent
   },
   {
     path: 'franchiseEarnedReport',
     //component: ComponentTooltipComponent
   },
   {
     path: 'reports/6/1/20',
     //component: ComponentRadioButtonComponent
   },
   {
     path: 'reports/3/1/20',
     //component: IconMaterialComponent
   },
   {
     path: 'inventorySnapShot',
     //component: IconWeatherComponent
   },
   {
     path: 'reports/8/1/20',
     //component: IconFontawesomeComponent
   },
   {
     path: 'lastPiece/1/20',
     //component: MapsGoogleComponent
   },
   {
     path: 'tickets',
     //component: MapsVectorExampleComponent
   },
   {
     path: 'lk_mirror',
     //component: FormsValidationComponent
   }*/
 ];
