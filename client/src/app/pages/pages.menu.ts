export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      // GENERAL
      {
        path: 'general',
        data: {
          menu: {
            title: 'sidebar.general',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'news80',
            data: {
              menu: {
                title: 'tcode.news80',
              }
            }
          },
          {
            path: 'sop80',
            data: {
              menu: {
                title: 'tcode.sop80',
              }
            }
          },
          {
            path: 'cnt80',
            data: {
              menu: {
                title: 'tcode.cnt80',
              }
            }
          },
        ]
      },

      // My INBOX
      {
        path: 'myapproval',
        data: {
          menu: {
            title: 'sidebar.category.myapproval.title',
            icon: 'ion-android-checkbox-outline',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'inbox',
            data: {
              menu: {
                title: 'sidebar.category.myapproval.inbox',
                icon: 'ion-ios-filing',
              }
            }
          },
          {
            path: 'outbox',
            data: {
              menu: {
                title: 'sidebar.category.myapproval.outbox',
                icon: 'ion-ios-filing-outline',
              }
            }
          },
        ]
      },

      // My OUTBOX
      {
        path: 'myrequests',
        data: {
          menu: {
            title: 'sidebar.category.myrequests.title',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'draft',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.draft',
                icon: 'ion-ios-compose-outline',
              }
            }
          },
          {
            path: 'inprogress',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.inprogress',
                icon: 'ion-load-a',
              }
            }
          },
          {
            path: 'documenting',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.documenting',
                icon: 'ion-ios-albums-outline',
              }
            }
          },
          {
            path: 'finished',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.finished',
                icon: 'ion-android-done-all',
              }
            }
          },
        ]
      },

      // WORKFLOW
      {
        path: 'workflow',
        data: {
          menu: {
            title: 'sidebar.workflow',
            icon: 'ion-shuffle',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'vdr20',
            data: {
              menu: {
                title: 'tcode.vdr20',
              }
            }
          }
        ]
      },

      // TRANSACTION
      {
        path: 'transaction',
        data: {
          menu: {
            title: 'sidebar.transaction',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'mje10',
            data: {
              menu: {
                title: 'tcode.mje10',
              }
            }
          },
          {
            // MJE
            path: '',
            data: {
              menu: {
                title: 'tcode.mje',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [              
              {
                path: 'mje01',
                data: {
                  menu: {
                    title: 'tcode.mje01',
                  }
                }
              },
              {
                path: 'mje02',
                data: {
                  menu: {
                    title: 'tcode.mje02',
                  }
                }
              },
              {
                path: 'mje11',
                data: {
                  menu: {
                    title: 'tcode.mje11',
                  }
                }
              },
              {
                path: 'mje12',
                data: {
                  menu: {
                    title: 'tcode.mje12',
                  }
                }
              },
            ]
          },
        ]
      },

      // MASTER DATA
      {
        path: 'masterdata',
        data: {
          menu: {
            title: 'sidebar.masterdata',
            icon: 'ion-social-buffer-outline',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          // VENDOR
          {
            path: '',
            data: {
              menu: {
                title: 'tcode.vdr',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'vdr00',
                data: {
                  menu: {
                    title: 'tcode.vdr00',
                  }
                }
              },
              {
                path: 'vdr01',
                data: {
                  menu: {
                    title: 'tcode.vdr01',
                  }
                }
              },
              {
                path: 'vdr02',
                data: {
                  menu: {
                    title: 'tcode.vdr02',
                  }
                }
              },
              {
                path: 'vdr03',
                data: {
                  menu: {
                    title: 'tcode.vdr03',
                  }
                }
              },
              {
                path: 'vdr04',
                data: {
                  menu: {
                    title: 'tcode.vdr04',
                  }
                }
              },
              {
                path: 'vdr05',
                data: {
                  menu: {
                    title: 'tcode.vdr05',
                  }
                }
              },
              {
                path: 'vdr06',
                data: {
                  menu: {
                    title: 'tcode.vdr06',
                  }
                }
              },
              {
                path: 'vdr11',
                data: {
                  menu: {
                    title: 'tcode.vdr11',
                  }
                }
              },
              {
                path: 'vdr12',
                data: {
                  menu: {
                    title: 'tcode.vdr12',
                  }
                }
              },
              {
                path: 'vdr13',
                data: {
                  menu: {
                    title: 'tcode.vdr13',
                  }
                }
              },
              {
                path: 'vdr14',
                data: {
                  menu: {
                    title: 'tcode.vdr14',
                  }
                }
              },
              {
                path: 'vdr15',
                data: {
                  menu: {
                    title: 'tcode.vdr15',
                  }
                }
              },
              {
                path: 'vdr16',
                data: {
                  menu: {
                    title: 'tcode.vdr16',
                  }
                }
              },
            ]
          },

          // CUSTOMER
          {
            path: '',
            data: {
              menu: {
                title: 'tcode.ctm',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'ctm00',
                data: {
                  menu: {
                    title: 'tcode.ctm00',
                  }
                }
              },
              {
                path: 'ctm01',
                data: {
                  menu: {
                    title: 'tcode.ctm01',
                  }
                }
              },
              {
                path: 'ctm02',
                data: {
                  menu: {
                    title: 'tcode.ctm02',
                  }
                }
              },
              {
                path: 'ctm03',
                data: {
                  menu: {
                    title: 'tcode.ctm03',
                  }
                }
              },
              {
                path: 'ctm04',
                data: {
                  menu: {
                    title: 'tcode.ctm04',
                  }
                }
              },
              {
                path: 'ctm05',
                data: {
                  menu: {
                    title: 'tcode.ctm05',
                  }
                }
              },
              {
                path: 'ctm06',
                data: {
                  menu: {
                    title: 'tcode.ctm06',
                  }
                }
              },
              {
                path: 'ctm11',
                data: {
                  menu: {
                    title: 'tcode.ctm11',
                  }
                }
              },
              {
                path: 'ctm12',
                data: {
                  menu: {
                    title: 'tcode.ctm12',
                  }
                }
              },
              {
                path: 'ctm13',
                data: {
                  menu: {
                    title: 'tcode.ctm13',
                  }
                }
              },
              {
                path: 'ctm14',
                data: {
                  menu: {
                    title: 'tcode.ctm14',
                  }
                }
              },
              {
                path: 'ctm15',
                data: {
                  menu: {
                    title: 'tcode.ctm15',
                  }
                }
              },
              {
                path: 'ctm16',
                data: {
                  menu: {
                    title: 'tcode.ctm16',
                  }
                }
              },
            ]
          },

        ]
      },

      // CONFIGURATION
      {
        path: 'config',
        data: {
          menu: {
            title: 'sidebar.config',
            icon: 'ion-settings',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            // VENDOR
            path: '',
            data: {
              menu: {
                title: 'tcode.vdr',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'vdr90',
                data: {
                  menu: {
                    title: 'tcode.vdr90',
                  }
                }
              },
              {
                path: 'vdr91',
                data: {
                  menu: {
                    title: 'tcode.vdr91',
                  }
                }
              },
            ]
          },
          {
            // CUSTOMER
            path: '',
            data: {
              menu: {
                title: 'tcode.ctm',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'ctm90',
                data: {
                  menu: {
                    title: 'tcode.ctm90',
                  }
                }
              },
              {
                path: 'ctm91',
                data: {
                  menu: {
                    title: 'tcode.ctm91',
                  }
                }
              },
            ]
          },
        ]
      },

      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'main',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Main Page', // menu title
            icon: 'ion-document', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 5,
          }
        }
      },
      {
        path: 'blank',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Blank Page', // menu title
            icon: 'ion-document', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 10,
          }
        }
      },
      {
        path: 'adminLTE',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'AdminLTE Page', // menu title
            icon: 'ion-document', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 20,
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              }
            }
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
      {
        path: 'page_error',
        data: {
          menu: {
            title: 'general.menu.page_error',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'page404',
            data: {
              menu: {
                title: 'general.menu.page404',
              }
            }
          },
          {
            path: 'page500',
            data: {
              menu: {
                title: 'general.menu.page500',
              }
            }
          },
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/'],
            data: {
              menu: {
                title: 'general.menu.landingpage'
              }
            }
          },
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/reset'],
            data: {
              menu: {
                title: 'general.menu.reset'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register',
              }
            }
          },
          {
            path: ['/page404'],
            data: {
              menu: {
                title: 'general.menu.page404',
              }
            }
          },
          {
            path: ['/page500'],
            data: {
              menu: {
                title: 'general.menu.page500',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
