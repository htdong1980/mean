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

          // CUSTOMER

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
            // VENDOR
            // CUSTOMER
        ]
      },

      // LIBRARY
      {
        path: 'library',
        data: {
          menu: {
            title: 'sidebar.library',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
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
              }
            ]
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
        ]
      },
    ]
  }
];
