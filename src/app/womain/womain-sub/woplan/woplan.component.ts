import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-woplan',
  templateUrl: './woplan.component.html',
  styleUrls: ['./woplan.component.css']
})
export class WoplanComponent implements OnInit {
  selectedRows: any[];
  'data':
    [
        {
            'data': {
                'name': 'Andrew',
                'gender': 'Male'
            },
            'children': [
                {
                    'data': {
                        'name': 'Andrewson',
                        'gender': 'Male'
                    },
                    'children': [
                        {
                            'data': {
                                'name': 'Eric',
                                'gender': 'Male'
                            }
                        }
                    ]
                }
            ]
          }
      ];

  constructor() { }
  /*
  nodes = {
    'data':
      [
        {
          'data': {
            'name': 'Documents',
            'size': '75kb',
            'type': 'Folder'
          },
          'children': [
            {
              'data': {
                'name': 'Expenses.doc',
                'size': '30kb',
                'type': 'Document'
              }
            },
            {
              'data': {
                'name': 'Resume.doc',
                'size': '25kb',
                'type': 'Resume'
              }
            }
          ]
        },
        {
          'data': {
              'name': 'Home',
              'size': '20kb',
              'type': 'Folder'
          },
          'children': [
            {
              'data': {
                  'name': 'Invoices',
                  'size': '20kb',
                  'type': 'Text'
              }
            }
          ]
        }
      ]
    };
    */
  ngOnInit() {
  }


nodeSelect(event) {
    console.log(event);
}
}
