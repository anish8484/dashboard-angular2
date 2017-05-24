/**
 * Menu data mock
 */
export class MenuMock {
  static root = [
    {
      name: 'Revenue/Salesperson',
      title: 'Revenue/Salesperson',
      faIcon: 'fa-tachometer',
      link: '/rev_per_sp'
    },
    {
      name: 'Sales',
      title: 'Sales',
      faIcon: 'fa-window-maximize',
      link: '/productSearch'
      // Notify title
      //notifyContent: 'new',
      // Notify title class
      //notifyClass: 'bg-warn label',
    },
   /*{
      // Data menu name
    //  name: 'widgets',
      // Show title
      //title: 'Widget',
      // Fontawesome icon class
      faIcon: 'fa-magic',
      // Router link
      //link: '/widgets',
      // Notify title
      notifyContent: 'new',
      // Notify title class
      notifyClass: 'bg-primary label',
    },*/
    {
      name: 'Organization',
      title: 'Organization',
      faIcon: 'fa-tasks',
      // Sub menu, only one level (Match Material Design)
      sub: [
        {
          name: 'Franchisee Details',
          title: 'Franchisee Details',
          link: '/organization'
        },
        {
          name: 'Salesmen Details',
          title: 'Salesmen Details',
          link: '/salesman'
        },
        {
          name: 'Manage Users',
          title: 'Manage Users',
          link: '/manageUsers'
        }
      ]
    },
    {
      name: 'Operations',
      title: 'Operations',
      faIcon: 'fa-check-circle-o',
      sub: [
        {
          name: 'Barcode',
          title: 'Barcode',
          link: '/createBarcode'
        },
        {
          name: 'Record Power',
          title: 'Record Power',
          link: '/recordPower/1/20'
        },
        {
          name: 'Return',
          title: 'Return',
          link: '/returnOrder'
        },
        {
          name: 'Place Bulk Order',
          title: 'Place Bulk Order',
          link: '/FranchisePOView'
        },
        {
          name: 'Bulk Order Summary',
          title: 'Bulk Order Summary',
          link: '/bulkOrderList'
        },
        {
          name: 'Gatepass',
          title: 'Gatepass',
          link: '/gatePass/1/20'
        },
        {
          name: 'Inventory Count',
          title: 'Inventory Count',
          link: '/inventorycount'
        },
        {
          name: 'Inventory Count History',
          title: 'Inventory Count History',
          link: '/inventorycounthistory/1'
        },
        {
          name: '48 - Hour Calling',
          title: '48 - Hour Calling',
          link: '/48HourCalling/1/20'
        },
        {
          name: 'Remove from Display',
          title: 'Remove from Display',
          link: '/posBlockedProducts'
        }
      ]
    },
    {
      name: 'Search',
      title: 'Search',
      faIcon: 'fa-rocket',
      // Notify title
      notifyContent: 'new',
      // Notify title class
      notifyClass: 'bg-primary label',
      sub: [
        {
          name: "Customer's Order search",
          title: "Customer's Order search",

          link: '/customerOrderSearch'
        },
        {
          name: 'Gift Voucher',
          title: 'Gift Voucher',
        
          link: '/giftVouchers'
        }
      ]
    },
    {
      name: 'Reports',
      title: 'Reports',
      faIcon: 'fa-map-marker',
      //notifyContent: '2',
      //notifyClass: 'bg-warn label',
      sub: [
        {
          name: 'Sales Dashboard',
          title: 'Sales Dashboard',
          // Notify title
          notifyContent: 'new',
          // Notify title class
          notifyClass: 'bg-warn label',
          link: '/dashboard'
        },
        {
          name: 'Order Summary',
          title: 'Order Summary',
          link: '/reports/1/1/20'
        },
        {
          name: 'Franchisee Credit Summary',
          title: 'Franchisee Credit Summary',
          link: '/reports/2/1/20'
        },
        {
          name: 'Bulk Reserve Summary',
          title: 'Bulk Reserve Summary',
          link: '/reports/7/1/20'
        },
        {
          name: 'Earning Summary',
          title: 'Earning Summary',
          link: '/franchiseEarnedReport'
        },
        {
          name: 'Cash Management Report',
          title: 'Cash Management Report',
          link: '/reports/6/1/20'
        },
        {
          name: 'Power Followup/Hold',
          title: 'Power Followup/Hold',
          link: '/reports/3/1/20'
        },
        {
          name: 'Inventory SnapShot',
          title: 'Inventory SnapShot',
          link: '/inventorySnapShot'
        },
        {
          name: 'Fatal Panel',
          title: 'Fatal Panel',
          link: '/reports/8/1/20'
        }

      ]
    },
    {
      name: 'Last Piece',
      title: 'Last Piece',
      //notifyContent: '5',
      //notifyClass: 'bg-accent label',
      faIcon: 'fa-pencil-square-o',
      link: '/lastPiece/1/20'

    },
    {
      name: 'Tickets',
      title: 'Tickets',
      faIcon: 'fa-table',
      link: '/tickets'

    },
    {
      name: 'LK Mirror',
      title: 'LK Mirror',
      faIcon: 'fa-line-chart',
      //notifyContent: '3',
      //notifyClass: 'bg-warn label',
      link: '/lk_mirror'
    }

  ];
}
