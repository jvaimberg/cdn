new Mmenu(
                document.querySelector('#menu'),
                { 
				    scrollBugFix: {fix:true},
					slidingSubmenus: false,
                    extensions: ['theme-dark', 'shadow-page', 'pagedim-black','multiline'],
                    setSelected:{"hover":true,"parent":true},
                    counters: true,
                    searchfield: {
                        placeholder: 'Buscar dentro del Menu',
                    },
					drag:	{
					open: true, 
					},
                    iconbar: {
                        use: '(min-width: 650px)',
                        top: [
                            '<a href="#/"><span class="fa fa-home"></span></a>',
                        ],
                        bottom: [
                            '<a href="#/"><span class="fa fa-twitter"></span></a>',
                            '<a href="#/"><span class="fa fa-facebook"></span></a>',
                            '<a href="#/"><span class="fa fa-youtube"></span></a>',
                        ],
                    },
                    sidebar: {
                        collapsed: {
                            use: '(min-width: 450px)',
                            hideNavbar: false,
                        },
                        expanded: {
                            use: '(min-width: 992px)',
                        },
                    },
                    navbars: [
                        
                        {
                            type: 'tabs',
                            content: [
                                '<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Menu</span></a>',
                                '<a href="#panel-account"><i class="fa fa-user"></i> <span>Mi Cuenta</span></a>',
                                '<a href="#panel-cart"><i class="fa fa-shopping-cart"></i> <span>Carrito</span></a>',
                            ],
                        },
                        {
                            content: ['prev', 'breadcrumbs', 'close'],
                        },
                        {
                            position: 'bottom',
                            content: [
                                '<a href="index.asp" target="_blank">Kekul</a>',
                            ],
                        },
                    ],
                },
                {
                    searchfield: {
                        clear: true,
                    },
                    navbars: {
                        breadcrumbs: {
                            removeFirst: true,
                        },
                    },
                }
            );

            document.addEventListener('click', function (evnt) {
                var anchor = evnt.target.closest('a[href^="#/"]');
                if (anchor) {
                    alert("Kekul.com");
                    evnt.preventDefault();
                }
            });
