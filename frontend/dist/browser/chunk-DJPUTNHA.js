import{a as Se}from"./chunk-FFII547K.js";import{c as we,d as re,f as oe,g as se,h as ae}from"./chunk-NJC4F6AZ.js";import{a as ye}from"./chunk-G4DRH3WD.js";import"./chunk-2M545V25.js";import{a as C,b as h}from"./chunk-ARY7AZQE.js";import{A as G,Aa as be,Ab as Z,B as de,Ba as he,Bb as Ce,Cb as q,Db as N,Ea as I,Eb as R,Fa as u,Fb as ie,G as w,Ga as D,H as M,Ha as x,M as pe,N as fe,Na as b,Oa as z,Pa as _,Q as a,Qa as P,R as f,Wa as E,Y as H,a as te,aa as p,b as ne,ca as l,d as ce,da as ge,fb as xe,gb as y,ia as K,ib as O,jb as V,k as me,ka as W,l as ue,la as X,ma as o,na as s,oa as m,ob as L,ra as A,s as Y,sa as k,t as U,ta as v,ua as d,ub as _e,v as J,xa as F,z as g,za as ve}from"./chunk-U5XVBXKV.js";var Me=(()=>{let t=class t{};t.pages=[{group:"\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645",separator:!0,items:[{icon:"assets/icons/heroicons/outline/lock-closed.svg",label:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A",route:"/dashboard/constants"},{icon:"assets/icons/heroicons/outline/user-circle.svg",label:"\u0627\u0644\u0623\u0639\u0636\u0627\u0621",route:"/dashboard/members"},{icon:"assets/icons/heroicons/outline/gift.svg",label:"\u0627\u0644\u0644\u062C\u0627\u0646",route:"/dashboard/commites"},{icon:"assets/icons/heroicons/outline/users.svg",label:"\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646",route:"/dashboard/users"},{icon:"assets/icons/heroicons/outline/users.svg",label:"\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u0644\u062C\u0627\u0646",route:"/dashboard/committeMembers"},{icon:"assets/icons/heroicons/outline/folder.svg",label:"\u0627\u0644\u0648\u0638\u0627\u0626\u0641",route:"/dashboard/jobs"}]}];let e=t;return e})();var S=(()=>{let t=class t{constructor(n){this.router=n,this._showSidebar=H(!0),this._showMobileMenu=H(!1),this._pagesMenu=H([]),this._subscription=new ce,this._pagesMenu.set(Me.pages);let i=this.router.events.subscribe(c=>{c instanceof Z&&this._pagesMenu().forEach(j=>{let le=!1;j.items.forEach(Q=>{let ee=this.isActive(Q.route);Q.expanded=ee,Q.active=ee,ee&&(le=!0),Q.children&&this.expand(Q.children)}),j.active=le})});this._subscription.add(i)}get showSideBar(){return this._showSidebar()}get showMobileMenu(){return this._showMobileMenu()}get pagesMenu(){return this._pagesMenu()}set showSideBar(n){this._showSidebar.set(n)}set showMobileMenu(n){this._showMobileMenu.set(n)}toggleSidebar(){this._showSidebar.set(!this._showSidebar())}toggleMenu(n){this.showSideBar=!0,n.expanded=!n.expanded}toggleSubMenu(n){n.expanded=!n.expanded}expand(n){n.forEach(i=>{i.expanded=this.isActive(i.route),i.children&&this.expand(i.children)})}isActive(n){return this.router.isActive(this.router.createUrlTree([n]),{paths:"subset",queryParams:"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnDestroy(){this._subscription.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(J(q))},t.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var qe=e=>({"max-h-screen":e}),Qe=e=>({sub:e}),Je=()=>({exact:!0}),Ye=e=>({"rotate-90":e});function Ue(e,t){if(e&1){let r=k();o(0,"a",8),v("click",function(){w(r);let i=d(2);return M(i.closeMobileMenu())}),u(1),s()}if(e&2){let r=t.sub;l("routerLink",r.route)("routerLinkActiveOptions",z(3,Je)),a(),x(" ",r.label," ")}}function Ge(e,t){if(e&1&&(o(0,"a",9),u(1),s(),o(2,"button",10),m(3,"svg-icon",11),s()),e&2){let r=t.sub;a(),x(" ",r.label," "),a(),l("ngClass",_(3,Ye,r.expanded)),a(),l("svgClass","h-5 w-5")}}function He(e,t){if(e&1){let r=k();o(0,"li")(1,"div",5),v("click",function(){let i=w(r).$implicit,c=d();return M(c.toggleMenu(i))}),A(2,6),p(3,Ue,2,4,"ng-template",null,0,E)(5,Ge,4,5,"ng-template",null,1,E),s(),m(7,"app-navbar-mobile-submenu",7),s()}if(e&2){let r=t.$implicit,n=I(4),i=I(6);a(2),l("ngTemplateOutlet",r.children?i:n)("ngTemplateOutletContext",_(3,Qe,r)),a(5),l("submenu",r)}}var Ie=(()=>{let t=class t{constructor(n){this.menuService=n,this.submenu={}}ngOnInit(){}toggleMenu(n){this.menuService.toggleSubMenu(n)}collapse(n){n.forEach(i=>{i.expanded=!1,i.children&&this.collapse(i.children)})}closeMobileMenu(){this.menuService.showMobileMenu=!1}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-navbar-mobile-submenu"]],inputs:{submenu:"submenu"},standalone:!0,features:[b],decls:3,vars:4,consts:[["parentMenu",""],["childMenu",""],[1,"max-h-0","overflow-hidden","pt-1","pl-4","transition-all","duration-500",3,"ngClass"],[1,"flex","flex-col","border-l","border-dashed","border-border","pl-2","text-muted-foreground"],[4,"ngFor","ngForOf"],[1,"flex","rounded","hover:bg-card","hover:text-foreground",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"submenu"],["routerLinkActive","text-primary",1,"inline-block","w-full","px-4","py-2","text-xs","font-semibold",3,"click","routerLink","routerLinkActiveOptions"],[1,"inline-block","w-full","cursor-pointer","px-4","py-2","text-xs","font-semibold"],[1,"flex","items-center","p-1","text-muted-foreground","transition-all","duration-500",3,"ngClass"],["src","assets/icons/heroicons/solid/chevron-right.svg",3,"svgClass"]],template:function(i,c){i&1&&(o(0,"div",2)(1,"ul",3),p(2,He,8,5,"li",4),s()()),i&2&&(l("ngClass",_(2,qe,c.submenu.expanded)),a(2),l("ngForOf",c.submenu.children))},dependencies:[t,y,O,L,R,N,h,C]});let e=t;return e})();var Ke=e=>({item:e}),We=(e,t)=>({hidden:e,"rotate-90":t});function Xe(e,t){if(e&1){let r=k();o(0,"div",14)(1,"a",15),v("click",function(){w(r);let i=d(3);return M(i.closeMenu())}),u(2),s()()}if(e&2){let r=t.item;F("routerLink",r.route),a(2),x(" ",r.label," ")}}function Ze(e,t){if(e&1&&(o(0,"div",16)(1,"a",17),u(2),s()()),e&2){let r=t.item;a(2),x(" ",r.label," ")}}function et(e,t){if(e&1&&(o(0,"button",18),m(1,"svg-icon",19),s()),e&2){let r=d().$implicit,n=d(2);l("ngClass",P(2,We,!n.menuService.showSideBar,r.expanded)),a(),l("svgClass","h-5 w-5")}}function tt(e,t){if(e&1){let r=k();o(0,"li")(1,"div",8),v("click",function(){let i=w(r).$implicit,c=d(2);return M(c.toggleMenu(i))}),o(2,"div",9),m(3,"svg-icon",10),s(),A(4,11),p(5,Xe,3,2,"ng-template",null,0,E)(7,Ze,3,1,"ng-template",null,1,E)(9,et,2,5,"button",12),s(),m(10,"app-navbar-mobile-submenu",13),s()}if(e&2){let r=t.$implicit,n=I(6),i=I(8),c=d(2);a(2),l("ngClass",r.active&&!c.menuService.showSideBar?"text-primary":"text-muted-foreground/50"),a(),F("src",r.icon),l("svgClass","h-5 w-5"),a(),l("ngTemplateOutlet",r.children?i:n)("ngTemplateOutletContext",_(7,Ke,r)),a(5),l("ngIf",r.children),a(),l("submenu",r)}}function nt(e,t){if(e&1&&(o(0,"div",3)(1,"div",4)(2,"small",5),u(3),s()(),o(4,"ul",6),p(5,tt,11,9,"li",7),s()()),e&2){let r=t.$implicit;a(3),x(" ",r.group," "),a(2),l("ngForOf",r.items)}}var Ee=(()=>{let t=class t{constructor(n){this.menuService=n}toggleMenu(n){this.menuService.toggleMenu(n)}closeMenu(){this.menuService.showMobileMenu=!1}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-navbar-mobile-menu"]],standalone:!0,features:[b],decls:1,vars:1,consts:[["parentMenu",""],["childMenu",""],["class","pt-4",4,"ngFor","ngForOf"],[1,"pt-4"],[1,"mx-1","mb-2","flex","items-center","justify-between"],[1,"text-xs","font-semibold","text-muted-foreground"],[1,"flex","flex-col","space-y-1"],[4,"ngFor","ngForOf"],[1,"group","relative","text-muted-foreground","hover:text-foreground",3,"click"],[1,"pointer-events-none","absolute","m-2",3,"ngClass"],[3,"src","svgClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","pointer-events-none absolute top-1 right-0 flex items-center p-1 text-muted-foreground/50 transition-all duration-500",3,"ngClass",4,"ngIf"],[3,"submenu"],[1,"flex","h-9","cursor-pointer","items-center","justify-start","rounded","hover:bg-card",3,"routerLink"],["routerLinkActive","text-primary",1,"mr-10","truncate","text-xs","font-semibold","tracking-wide","focus:outline-none",3,"click"],[1,"flex","h-9","cursor-pointer","items-center","justify-start","rounded","hover:bg-card"],[1,"mr-10","truncate","text-xs","font-semibold","tracking-wide","focus:outline-none"],[1,"pointer-events-none","absolute","top-1","right-0","flex","items-center","p-1","text-muted-foreground/50","transition-all","duration-500",3,"ngClass"],["src","assets/icons/heroicons/solid/chevron-right.svg",3,"svgClass"]],template:function(i,c){i&1&&p(0,nt,6,2,"div",2),i&2&&l("ngForOf",c.menuService.pagesMenu)},dependencies:[O,y,h,C,L,N,R,V,Ie]});let e=t;return e})();var Te=(()=>{let t=class t{constructor(n){this.menuService=n}ngOnInit(){}toggleMobileMenu(){this.menuService.showMobileMenu=!1}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-navbar-mobile"]],standalone:!0,features:[b],decls:17,vars:1,consts:[[1,"absolute","inset-x-0","top-0","z-10","origin-top-right","transform","p-2","transition","md:hidden",3,"ngClass"],[1,"rounded-lg","bg-background","shadow-lg"],[1,"pt-5","pb-6"],[1,"flex","items-center","justify-between","px-5"],[1,"flex","items-center","justify-start","sm:order-2","md:mr-10","lg:hidden"],[1,"flex","items-center","justify-center","rounded","bg-primary","p-2","focus:outline-none","focus:ring-1"],["src","assets/logo.png",1,"w-8"],[1,"pr-3","text-sm","font-bold","text-foreground"],[1,"-ml-2"],["type","button",1,"inline-flex","items-center","justify-center","rounded-md","p-2","text-muted-foreground","transition-transform","focus:outline-none","focus:ring-2","focus:ring-inset","focus:ring-primary","hover:rotate-90","hover:bg-card","hover:text-foreground",3,"click"],[1,"sr-only"],["src","assets/icons/heroicons/outline/x.svg"],[1,"scrollbar-thumb-rounded","scrollbar-track-rounded","max-h-[500px]","overflow-y-auto","px-5","scrollbar-thin","scrollbar-track-transparent","scrollbar-thumb-muted"]],template:function(i,c){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"div",4)(6,"a",5),m(7,"img",6),s(),o(8,"b",7),u(9," \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0644\u062C\u0627\u0646 "),s()()(),o(10,"div",8)(11,"button",9),v("click",function(){return c.toggleMobileMenu()}),o(12,"span",10),u(13,"Close menu"),s(),m(14,"svg-icon",11),s()()(),o(15,"div",12),m(16,"app-navbar-mobile-menu"),s()()()()),i&2&&l("ngClass",c.menuService.showMobileMenu?"pointer-events-auto scale-100 animate-fade-in-up opacity-100 duration-200":"pointer-events-none scale-95 opacity-0 duration-100 ease-out")},dependencies:[y,h,C,Ee]});let e=t;return e})();var Fe=(()=>{let t=class t{constructor(n,i){this.element=n,this.document=i,this.clickOutside=new fe}ngAfterViewInit(){this.documentClickSubscription=me(this.document,"click").pipe(ue(n=>!this.isInside(n.target))).subscribe(()=>{this.clickOutside.emit()})}ngOnDestroy(){this.documentClickSubscription?.unsubscribe()}isInside(n){return n===this.element.nativeElement||this.element.nativeElement.contains(n)}};t.\u0275fac=function(i){return new(i||t)(f(pe),f(xe))},t.\u0275dir=de({type:t,selectors:[["","clickOutside",""]],outputs:{clickOutside:"clickOutside"},standalone:!0});let e=t;return e})();var Oe=e=>({"border-muted-foreground bg-card":e});function it(e,t){if(e&1&&(o(0,"li",12),m(1,"svg-icon",18),u(2),s()),e&2){let r=t.$implicit;F("routerLink",r.link),a(),F("src",r.icon),l("svgClass","h-5 w-5 text-muted-foreground/50"),a(),x(" ",r.title," ")}}function rt(e,t){if(e&1){let r=k();o(0,"div",19),v("click",function(){let i=w(r).$implicit,c=d();return M(c.toggleThemeColor(i.name))}),m(1,"span",20),o(2,"p",21),u(3),s()()}if(e&2){let r=t.$implicit,n=d();l("ngClass",_(4,Oe,r.name==n.themeService.theme().color)),a(),ge("background-color",r.code),a(2),D(r.name)}}function ot(e,t){if(e&1){let r=k();o(0,"div",19),v("click",function(){w(r);let i=d();return M(i.toggleThemeMode())}),m(1,"svg-icon",18),o(2,"p",22),u(3),s()()}if(e&2){let r=t.$implicit,n=d();l("ngClass",_(4,Oe,r==n.themeService.theme().mode)),a(),l("src",r=="light"?"assets/icons/heroicons/outline/sun.svg":"assets/icons/heroicons/outline/moon.svg")("svgClass","h-5 ml-2 w-5 text-muted-foreground/50"),a(2),D(n.themeModeAlt[r])}}var Ne=(()=>{let t=class t{constructor(n){this.themeService=n,this.isOpen=!1,this.profileMenu=[{title:"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",icon:"./assets/icons/heroicons/outline/user-circle.svg",link:"/profile"},{title:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",icon:"./assets/icons/heroicons/outline/cog-6-tooth.svg",link:"/settings"},{title:"\u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C",icon:"./assets/icons/heroicons/outline/logout.svg",link:"/auth"}],this.themeColors=[{name:"base",code:"#e11d48"},{name:"yellow",code:"#f59e0b"},{name:"green",code:"#22c55e"},{name:"blue",code:"#3b82f6"},{name:"orange",code:"#ea580c"},{name:"red",code:"#cc0022"},{name:"violet",code:"#6d28d9"}],this.themeMode=["light","dark"],this.themeModeAlt={light:"\u0645\u0636\u064A\u0621",dark:"\u0645\u0638\u0644\u0645"}}ngOnInit(){}toggleMenu(){this.isOpen=!this.isOpen}toggleThemeMode(){this.themeService.theme.update(n=>{let i=this.themeService.isDark?"light":"dark";return ne(te({},n),{mode:i})})}toggleThemeColor(n){this.themeService.theme.update(i=>ne(te({},i),{color:n}))}};t.\u0275fac=function(i){return new(i||t)(f(Se))},t.\u0275cmp=g({type:t,selectors:[["app-profile-menu"]],standalone:!0,features:[b],decls:30,vars:1,consts:[[1,"relative","mr-3"],["type","button",1,"relative","flex","rounded-full","bg-card","text-sm",3,"click"],[1,"sr-only"],["clickOutside","","src","https://avatars.githubusercontent.com/u/12519008?v=4","alt","",1,"h-9","w-9","rounded-md",3,"clickOutside"],[1,"absolute","left-0","z-20","mt-2","w-60","origin-top-right","transform","rounded-md","bg-background","py-4","shadow-custom","ring-1","ring-transparent","ring-opacity-5","transition","focus:outline-none"],[1,"flext-row","flex","items-center","px-4","pb-4"],[1,"w-10","shrink-0"],["src","https://avatars.githubusercontent.com/u/12519008?v=4","alt","",1,"rounded-md"],[1,"overflow-hidden","px-2","text-sm","font-semibold","text-foreground"],[1,"truncate","text-ellipsis","text-xs","font-semibold","text-muted-foreground"],[1,"border-b","border-dashed","border-border"],[1,"my-2","mx-4","flex","flex-col"],["key","$index",1,"inline-flex","cursor-pointer","items-center","gap-2","rounded-md","px-3","py-2","text-xs","font-semibold","text-muted-foreground","hover:bg-card","hover:text-primary",3,"routerLink"],[1,"border-dashed","border-border"],[1,"mx-4","my-2"],[1,"text-xs","font-semibold","text-foreground"],[1,"mt-2","grid","grid-cols-2","gap-2"],["key","$index",1,"focus-visible:ring-ring","inline-flex","h-8","cursor-pointer","items-center","justify-start","whitespace-nowrap","rounded-md","border","border-border","bg-background","px-3","text-xs","font-medium","text-muted-foreground","shadow-sm","transition-colors","focus-visible:outline-none","focus-visible:ring-1","disabled:pointer-events-none","disabled:opacity-50","hover:bg-card","hover:text-foreground",3,"ngClass"],[3,"src","svgClass"],["key","$index",1,"focus-visible:ring-ring","inline-flex","h-8","cursor-pointer","items-center","justify-start","whitespace-nowrap","rounded-md","border","border-border","bg-background","px-3","text-xs","font-medium","text-muted-foreground","shadow-sm","transition-colors","focus-visible:outline-none","focus-visible:ring-1","disabled:pointer-events-none","disabled:opacity-50","hover:bg-card","hover:text-foreground",3,"click","ngClass"],[1,"ml-1","flex","h-5","w-5","shrink-0","-translate-x-1","items-center","justify-center","rounded-full","bg-rose-500"],[1,"capitalize","mr-1"],[1,"capitalize"]],template:function(i,c){i&1&&(o(0,"div",0)(1,"button",1),v("click",function(){return c.toggleMenu()}),o(2,"span",2),u(3,"Open user menu"),s(),o(4,"img",3),v("clickOutside",function(){return c.isOpen=!1}),s()(),o(5,"div",4)(6,"div",5)(7,"div",6),m(8,"img",7),s(),o(9,"div",8),u(10," Luciano Oliveira "),o(11,"p",9),u(12,"me@lanno.dev"),s()()(),m(13,"div",10),o(14,"ul",11),W(15,it,3,4,"li",12,K),s(),m(17,"hr",13),o(18,"div",14)(19,"span",15),u(20,"Color"),s(),o(21,"div",16),W(22,rt,4,6,"div",17,K),s()(),o(24,"div",14)(25,"span",15),u(26,"Mode"),s(),o(27,"div",16),W(28,ot,4,6,"div",17,K),s()()()()),i&2&&(a(5),l("@openClose",c.isOpen?"open":"closed"),a(10),X(c.profileMenu),a(7),X(c.themeColors),a(6),X(c.themeMode))},dependencies:[Fe,y,N,h,C],data:{animation:[we("openClose",[se("open",oe({opacity:1,transform:"translateY(0)",visibility:"visible"})),se("closed",oe({opacity:0,transform:"translateY(-20px)",visibility:"hidden"})),ae("open => closed",[re("0.2s")]),ae("closed => open",[re("0.2s")])])]}});let e=t;return e})();var st=["submenuRef"],at=["navbar-submenu",""],lt=e=>({item:e}),ct=()=>({exact:!0});function mt(e,t){if(e&1&&(o(0,"span",11),m(1,"svg-icon",12),s()),e&2){let r=d().item;a(),F("src",r.icon),l("svgClass","h-5 w-5")}}function ut(e,t){if(e&1&&(o(0,"button",7)(1,"div",8),p(2,mt,2,2,"span",9),o(3,"span",10),u(4),s()()()),e&2){let r=t.item;l("routerLink",r.route)("routerLinkActiveOptions",z(4,ct)),a(2),l("ngIf",r.icon),a(2),D(r.label)}}function dt(e,t){if(e&1&&(o(0,"span",18),m(1,"svg-icon",12),s()),e&2){let r=d().item;a(),F("src",r.icon),l("svgClass","h-5 w-5")}}function pt(e,t){if(e&1&&(o(0,"div",13)(1,"button",14)(2,"div",8),p(3,dt,2,2,"span",15),o(4,"span",10),u(5),s()(),o(6,"span"),m(7,"svg-icon",16),s()(),m(8,"div",17),s()),e&2){let r=t.item;a(3),l("ngIf",r.icon),a(2),D(r.label),a(2),l("svgClass","h-5 w-5 text-text-muted-foreground/50"),a(),l("submenu",r.children)}}function ft(e,t){if(e&1&&(o(0,"li",5),A(1,6),p(2,ut,5,5,"ng-template",null,1,E)(4,pt,9,4,"ng-template",null,2,E),s()),e&2){let r=t.$implicit,n=I(3),i=I(5);a(),l("ngTemplateOutlet",r.children?i:n)("ngTemplateOutletContext",_(2,lt,r))}}var je=(()=>{let t=class t{constructor(){this.submenu={}}ngOnInit(){}ngAfterViewInit(){if(this.submenuRef){let n=this.submenuRef.nativeElement.getBoundingClientRect(),i=document.body.getBoundingClientRect();if(n.right>i.right){let c=this.submenuRef.nativeElement.parentNode;c&&(c.style.left="-100%")}}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=g({type:t,selectors:[["div","navbar-submenu",""]],viewQuery:function(i,c){if(i&1&&ve(st,5),i&2){let j;be(j=he())&&(c.submenuRef=j.first)}},inputs:{submenu:"submenu"},standalone:!0,features:[b],attrs:at,decls:3,vars:1,consts:[["submenuRef",""],["parentMenu",""],["childMenu",""],[1,"mt-2","space-y-0.5","rounded-md","bg-background","py-3","shadow-custom"],["class","flex font-semibold",4,"ngFor","ngForOf"],[1,"flex","font-semibold"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","text-primary",1,"mx-3","flex","w-full","items-center","justify-between","rounded-md","py-2","px-2","text-xs","font-semibold","text-muted-foreground","hover:bg-card","hover:text-foreground",3,"routerLink","routerLinkActiveOptions"],[1,"flex","items-center","justify-start"],["class","mr-2 text-muted-foreground/50",4,"ngIf"],[1,"mr-1"],[1,"mr-2","text-muted-foreground/50"],[3,"src","svgClass"],[1,"dropdown","relative","flex","w-full"],[1,"mx-3","flex","w-full","items-center","justify-between","rounded-md","py-2","px-2","text-xs","font-semibold","text-muted-foreground","hover:bg-card","hover:text-foreground"],["class","ml-2 text-muted-foreground/50",4,"ngIf"],["src","assets/icons/heroicons/solid/chevron-right.svg",3,"svgClass"],["navbar-submenu","",1,"dropdown-content","absolute","top-0","right-[100%]","min-w-[200px]","origin-top-left",3,"submenu"],[1,"ml-2","text-muted-foreground/50"]],template:function(i,c){i&1&&(o(0,"ul",3,0),p(2,ft,6,4,"li",4),s()),i&2&&(a(2),l("ngForOf",c.submenu))},dependencies:[t,O,L,R,N,V,h,C]});let e=t;return e})();function gt(e,t){if(e&1&&(o(0,"div",1)(1,"button",2)(2,"span"),u(3),s()(),m(4,"div",3),s()),e&2){let r=t.$implicit;a(),l("ngClass",r.selected||r.active?"bg-primary text-primary-foreground":"text-muted-foreground/50 hover:bg-card hover:text-muted-foreground "),a(2),D(r.group),a(),l("submenu",r.items)}}var Ae=(()=>{let t=class t{constructor(n){this.menuService=n,this.showMenuClass=["scale-100","animate-fade-in-up","opacity-100","pointer-events-auto"],this.hideMenuClass=["scale-95","animate-fade-out-down","opacity-0","pointer-events-none"]}ngOnInit(){}toggleMenu(n){n.selected=!n.selected}mouseEnter(n){let i=n.target.querySelector("app-navbar-submenu").children[0];i&&(this.hideMenuClass.forEach(c=>i.classList.remove(c)),this.showMenuClass.forEach(c=>i.classList.add(c)))}mouseLeave(n){let i=n.target.querySelector("app-navbar-submenu").children[0];i&&(this.showMenuClass.forEach(c=>i.classList.remove(c)),this.hideMenuClass.forEach(c=>i.classList.add(c)))}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-navbar-menu"]],standalone:!0,features:[b],decls:1,vars:1,consts:[["class","dropdown relative inline-block",4,"ngFor","ngForOf"],[1,"dropdown","relative","inline-block"],[1,"ml-2","inline-flex","rounded-md","px-3","py-2","text-sm","font-medium",3,"ngClass"],["navbar-submenu","",1,"dropdown-content","absolute","top-[100%]","min-w-[200px]","origin-top-left","z-10",3,"submenu"]],template:function(i,c){i&1&&p(0,gt,5,3,"div",0),i&2&&l("ngForOf",c.menuService.pagesMenu)},dependencies:[O,y,je]});let e=t;return e})();var Le=(()=>{let t=class t{constructor(n){this.menuService=n}ngOnInit(){}toggleMobileMenu(){this.menuService.showMobileMenu=!0}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-navbar"]],standalone:!0,features:[b],decls:18,vars:1,consts:[[1,"relative","bg-background"],[1,"mx-auto","px-5"],[1,"flex","items-center","justify-between","py-3.5","md:justify-start"],[1,"sm:order-1","md:hidden"],["type","button","aria-expanded","false",1,"inline-flex","items-center","justify-center","rounded-md","bg-muted","p-2","text-muted-foreground","focus:outline-none","focus:ring-2","focus:ring-inset","focus:ring-primary","hover:bg-muted-foreground","hover:text-muted",3,"click"],[1,"sr-only"],["src","assets/icons/heroicons/outline/menu.svg",3,"svgClass"],[1,"flex","items-center","justify-start","sm:order-2","md:mr-10","lg:hidden"],[1,"flex","items-center","justify-center","rounded","bg-primary","p-2","focus:outline-none","focus:ring-1"],["src","assets/icons/logo.svg"],[1,"hidden","mr-4","pl-3","text-sm","font-bold","text-foreground","sm:block"],[1,"hidden","space-x-10","sm:order-3","md:flex"],[1,"items-center","justify-end","sm:order-4","md:flex","md:flex-1","lg:w-0"]],template:function(i,c){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),v("click",function(){return c.toggleMobileMenu()}),o(5,"span",5),u(6,"Open menu"),s(),m(7,"svg-icon",6),s()(),o(8,"div",7)(9,"a",8),m(10,"svg-icon",9),s(),o(11,"b",10),u(12," \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0644\u062C\u0627\u0646 "),s()(),o(13,"div",11),m(14,"app-navbar-menu"),s(),o(15,"div",12),m(16,"app-profile-menu"),s()()(),m(17,"app-navbar-mobile"),s()),i&2&&(a(7),l("svgClass","h-6 w-6"))},dependencies:[h,C,Ae,Ne,Te]});let e=t;return e})();var Re={name:"commite-management",displayName:"\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0644\u062C\u0627\u0646",version:"0.9.1",description:"",homepage:"",repository:{type:"git",url:""},keywords:["angular","tailwind","starter-kit","tailwind-template","dark mode","open source"],author:"",license:"MIT",scripts:{ng:"ng",start:"ng serve --open",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","test:e2e":"npx playwright test --ui",prettier:'prettier --config ./.prettierrc --write "src/{app,environments}/**/*{.ts,.html,.scss,.json}"',"prettier:verify":'prettier --config ./.prettierrc --check "src/{app,environments}/**/*{.ts,.html,.scss,.json}"',"prettier:staged":"pretty-quick --staged",lint:"ng lint"},private:!0,dependencies:{"@angular/animations":"^18.1.0","@angular/common":"^18.1.0","@angular/compiler":"^18.1.0","@angular/core":"^18.1.0","@angular/forms":"^18.1.0","@angular/platform-browser":"^18.1.0","@angular/platform-browser-dynamic":"^18.1.0","@angular/router":"^18.1.0","@primeng/themes":"^18.0.0","@tailwindcss/aspect-ratio":"^0.4.0","@tailwindcss/forms":"^0.5.2","@tailwindcss/typography":"^0.5.4","angular-svg-icon":"^13.0.0",apexcharts:"^3.35.3","ng-apexcharts":"^1.7.1","ngx-sonner":"^2.0.1",primeng:"^18.0.0",rxjs:"~7.4.0",tslib:"^2.3.0","zone.js":"~0.14.2"},devDependencies:{"@angular-devkit/build-angular":"^18.1.0","@angular/cli":"^18.1.0","@angular/compiler-cli":"^18.1.0","@playwright/test":"^1.42.1","@types/jasmine":"~3.10.0","@types/node":"^12.11.1",autoprefixer:"^10.4.7","cz-conventional-changelog":"^3.3.0","jasmine-core":"~3.10.0",karma:"~6.3.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.7.0",postcss:"^8.4.14",prettier:"^2.7.1","prettier-plugin-tailwindcss":"^0.1.12","tailwind-scrollbar":"^1.3.1",tailwindcss:"^3.1.6",typescript:"~5.4.5"},config:{commitizen:{path:"./node_modules/cz-conventional-changelog"}}};var bt=(e,t)=>({hidden:e,"max-h-screen":t}),ht=e=>({sub:e}),xt=()=>({exact:!0}),_t=(e,t)=>({hidden:e,"rotate-90":t});function Ct(e,t){if(e&1&&(o(0,"a",8),u(1),s()),e&2){let r=t.sub;l("routerLink",r.route)("routerLinkActiveOptions",z(3,xt)),a(),x(" ",r.label," ")}}function yt(e,t){if(e&1&&(o(0,"a",9),u(1),s(),o(2,"button",10),m(3,"svg-icon",11),s()),e&2){let r=t.sub,n=d(2);a(),x(" ",r.label," "),a(),l("ngClass",P(3,_t,!n.menuService.showSideBar,r.expanded)),a(),l("svgClass","h-5 w-5")}}function St(e,t){if(e&1){let r=k();o(0,"li")(1,"div",5),v("click",function(){let i=w(r).$implicit,c=d();return M(c.toggleMenu(i))}),A(2,6),p(3,Ct,2,4,"ng-template",null,0,E)(5,yt,4,6,"ng-template",null,1,E),s(),m(7,"app-sidebar-submenu",7),s()}if(e&2){let r=t.$implicit,n=I(4),i=I(6);a(2),l("ngTemplateOutlet",r.children?i:n)("ngTemplateOutletContext",_(3,ht,r)),a(5),l("submenu",r)}}var De=(()=>{let t=class t{constructor(n){this.menuService=n,this.submenu={}}ngOnInit(){}toggleMenu(n){this.menuService.toggleSubMenu(n)}collapse(n){n.forEach(i=>{i.expanded=!1,i.children&&this.collapse(i.children)})}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-sidebar-submenu"]],inputs:{submenu:"submenu"},standalone:!0,features:[b],decls:3,vars:5,consts:[["parentMenu",""],["childMenu",""],[1,"max-h-0","overflow-hidden","pt-1","pr-4","transition-all","duration-500",3,"ngClass"],[1,"flex","flex-col","border-l","border-dashed","border-border","pr-2","text-muted-foreground"],[4,"ngFor","ngForOf"],[1,"flex","rounded","text-muted-foreground","hover:bg-card","hover:text-foreground",3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"submenu"],["routerLinkActive","text-primary",1,"inline-block","w-full","px-4","py-2","text-xs","font-semibold",3,"routerLink","routerLinkActiveOptions"],[1,"inline-block","w-full","cursor-pointer","px-4","py-2","text-xs","font-semibold"],[1,"flex","items-center","p-1","text-muted-foreground","transition-all","duration-500",3,"ngClass"],["src","assets/icons/heroicons/solid/chevron-right.svg",3,"svgClass"]],template:function(i,c){i&1&&(o(0,"div",2)(1,"ul",3),p(2,St,8,5,"li",4),s()()),i&2&&(l("ngClass",P(2,bt,!c.menuService.showSideBar,c.submenu.expanded)),a(2),l("ngForOf",c.submenu.children))},dependencies:[t,y,O,L,R,N,h,C]});let e=t;return e})();var wt=e=>({hidden:e}),Mt=e=>({item:e}),kt=(e,t)=>({hidden:e,"rotate-90":t});function It(e,t){if(e&1&&(o(0,"div",16)(1,"a",17),u(2),s()()),e&2){let r=t.item;F("routerLink",r.route),a(2),x(" ",r.label," ")}}function Et(e,t){if(e&1&&(o(0,"div",18)(1,"a",19),u(2),s()()),e&2){let r=t.item;a(2),x(" ",r.label," ")}}function Tt(e,t){if(e&1&&(o(0,"button",20),m(1,"svg-icon",21),s()),e&2){let r=d().$implicit,n=d(2);l("ngClass",P(2,kt,!n.menuService.showSideBar,r.expanded)),a(),l("svgClass","h-5 w-5")}}function Ft(e,t){if(e&1&&(o(0,"div",22)(1,"span",23),u(2),s()()),e&2){let r=d().$implicit;a(2),x(" ",r.label," ")}}function Ot(e,t){if(e&1){let r=k();o(0,"li")(1,"div",9),v("click",function(){let i=w(r).$implicit,c=d(2);return M(c.toggleMenu(i))}),o(2,"div",10),m(3,"svg-icon",11),s(),A(4,12),p(5,It,3,2,"ng-template",null,0,E)(7,Et,3,1,"ng-template",null,1,E)(9,Tt,2,5,"button",13)(10,Ft,3,1,"div",14),s(),m(11,"app-sidebar-submenu",15),s()}if(e&2){let r=t.$implicit,n=I(6),i=I(8),c=d(2);a(2),l("ngClass",r.active&&!c.menuService.showSideBar?"text-primary":"text-muted-foreground/50"),a(),F("src",r.icon),l("svgClass","h-5 w-5"),a(),l("ngTemplateOutlet",r.children?i:n)("ngTemplateOutletContext",_(8,Mt,r)),a(5),l("ngIf",r.children),a(),l("ngIf",!c.menuService.showSideBar),a(),l("submenu",r)}}function Nt(e,t){e&1&&(o(0,"div",24),m(1,"hr",25),s())}function jt(e,t){if(e&1&&(o(0,"div",3)(1,"div",4)(2,"small",5),u(3),s()(),o(4,"ul",6),p(5,Ot,12,10,"li",7),s(),p(6,Nt,2,0,"div",8),s()),e&2){let r=t.$implicit,n=d();a(2),l("ngClass",_(4,wt,!n.menuService.showSideBar)),a(),x(" ",r.group," "),a(2),l("ngForOf",r.items),a(),l("ngIf",r.separator)}}var Ve=(()=>{let t=class t{constructor(n){this.menuService=n}toggleMenu(n){this.menuService.toggleMenu(n)}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-sidebar-menu"]],standalone:!0,features:[b],decls:1,vars:1,consts:[["parentMenu",""],["childMenu",""],["class","pt-4",4,"ngFor","ngForOf"],[1,"pt-4"],[1,"mx-1","mb-2","flex","items-center","justify-between"],[1,"text-xs","font-semibold","text-muted-foreground/50",3,"ngClass"],[1,"flex","flex-col","space-y-1"],[4,"ngFor","ngForOf"],["class","pt-3",4,"ngIf"],[1,"group","relative","text-muted-foreground",3,"click"],[1,"pointer-events-none","absolute","m-2",3,"ngClass"],[3,"src","svgClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","pointer-events-none absolute top-1 right-0 flex items-center p-1 text-muted-foreground/50 transition-all duration-500",3,"ngClass",4,"ngIf"],["class","fixed w-full",4,"ngIf"],[3,"submenu"],[1,"flex","h-9","cursor-pointer","items-center","justify-start","rounded","text-muted-foreground","hover:bg-card","hover:text-foreground",3,"routerLink"],["routerLinkActive","text-primary",1,"mr-10","truncate","text-xs","font-semibold","tracking-wide","focus:outline-none"],[1,"flex","h-9","cursor-pointer","items-center","justify-start","rounded","hover:bg-card"],[1,"mr-10","truncate","text-xs","font-semibold","tracking-wide","text-muted-foreground","focus:outline-none","group-hover:text-foreground"],[1,"pointer-events-none","absolute","top-1","right-0","flex","items-center","p-1","text-muted-foreground/50","transition-all","duration-500",3,"ngClass"],["src","assets/icons/heroicons/solid/chevron-right.svg",3,"svgClass"],[1,"fixed","w-full"],[1,"z-1","absolute","right-14","-top-[34px]","w-auto","min-w-max","origin-left","scale-0","rounded-md","bg-foreground","p-2","text-xs","font-bold","text-background","shadow-md","transition-all","duration-200","group-hover:scale-100"],[1,"pt-3"],[1,"border-dashed","border-border"]],template:function(i,c){i&1&&p(0,jt,7,6,"div",2),i&2&&l("ngForOf",c.menuService.pagesMenu)},dependencies:[O,y,h,C,L,N,R,V,De],changeDetection:0});let e=t;return e})();var At=e=>({"rotate-180":e});function Lt(e,t){if(e&1){let r=k();o(0,"div",8)(1,"a",9),v("click",function(){w(r);let i=d();return M(i.toggleSidebar())}),m(2,"img",10),s(),o(3,"b",11),u(4),s()()}if(e&2){let r=d();a(4),x(" ",r.appJson.displayName," ")}}var $e=(()=>{let t=class t{constructor(n){this.menuService=n,this.appJson=Re}ngOnInit(){}toggleSidebar(){this.menuService.toggleSidebar()}};t.\u0275fac=function(i){return new(i||t)(f(S))},t.\u0275cmp=g({type:t,selectors:[["app-sidebar"]],standalone:!0,features:[b],decls:9,vars:5,consts:[[1,"scrollbar-thumb-rounded","scrollbar-track-rounded","hidden","h-full","flex-col","justify-between","overflow-auto","bg-background","pt-3","transition-all","duration-300","scrollbar-thin","scrollbar-track-transparent","scrollbar-thumb-card","lg:flex",3,"ngClass"],[1,"px-4"],[1,"relative","h-10"],["class","flex items-center",4,"ngIf"],[1,"absolute","top-2","left-2","flex","h-5","w-5","items-center","justify-center","rounded","text-muted-foreground/50","transition-all","duration-200","focus:outline-none","hover:text-muted-foreground",3,"click","ngClass"],["src","assets/icons/heroicons/solid/chevron-double-left.svg"],[1,"pt-3"],[1,"border-dashed","border-muted"],[1,"flex","items-center"],[1,"flex","cursor-pointer","items-center","justify-center","rounded","bg-primary","p-2","focus:outline-none","focus:ring-1",3,"click"],["src","assets/logo.png",1,"w-8"],[1,"mr-1","pr-2","text-sm","font-bold","text-foreground"]],template:function(i,c){i&1&&(o(0,"nav",0)(1,"div",1)(2,"div",2),p(3,Lt,5,1,"div",3),o(4,"button",4),v("click",function(){return c.toggleSidebar()}),m(5,"svg-icon",5),s()(),o(6,"div",6),m(7,"hr",7),s(),m(8,"app-sidebar-menu"),s()()),i&2&&(l("ngClass",c.menuService.showSideBar?"w-52 xl:w-64":"w-[70px]"),a(3),l("ngIf",c.menuService.showSideBar),a(),l("ngClass",_(3,At,!c.menuService.showSideBar)))},dependencies:[y,V,h,C,Ve]});let e=t;return e})();var Be=(()=>{let t=class t{constructor(n){this.router=n,this.mainContent=null,this.router.events.subscribe(i=>{i instanceof Z&&this.mainContent&&(this.mainContent.scrollTop=0)})}ngOnInit(){this.mainContent=document.getElementById("main-content")}};t.\u0275fac=function(i){return new(i||t)(f(q))},t.\u0275cmp=g({type:t,selectors:[["app-layout"]],standalone:!0,features:[b],decls:7,vars:0,consts:[[1,"flex","h-screen","w-full","overflow-hidden"],[1,"flex","grow","flex-col","content-start","overflow-hidden","bg-card"],["id","main-content",1,"scrollbar-thumb-rounded","scrollbar-track-rounded","grow","overflow-auto","scrollbar-thin","scrollbar-track-transparent","scrollbar-thumb-muted"],[1,"mx-auto","px-4","py-4","sm:px-8","lg:container"]],template:function(i,c){i&1&&(o(0,"div",0),m(1,"app-sidebar"),o(2,"div",1),m(3,"app-navbar"),o(4,"div",2)(5,"div",3),m(6,"router-outlet"),s()()()())},dependencies:[$e,Le,Ce]});let e=t;return e})();var Pe=(()=>{let t=class t{constructor(n,i){this.authService=n,this.router=i}canActivate(){return this.authService.getToken()?!0:(this.router.navigate(["/auth"]),!1)}};t.\u0275fac=function(i){return new(i||t)(J(ye),J(q))},t.\u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Rt=[{path:"dashboard",component:Be,loadChildren:()=>import("./chunk-JYID5TRQ.js").then(e=>e.DashboardModule),canActivate:[Pe]},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",redirectTo:"error/404"}],ze=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=G({type:t}),t.\u0275inj=U({imports:[ie.forChild(Rt),ie]});let e=t;return e})();var ai=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=G({type:t}),t.\u0275inj=U({providers:[_e()],imports:[ze,h.forRoot()]});let e=t;return e})();export{ai as LayoutModule};
