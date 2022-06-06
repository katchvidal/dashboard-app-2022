"use strict";(self.webpackChunkingreo_egreso_app=self.webpackChunkingreo_egreso_app||[]).push([[504],{4504:(f,g,t)=>{t.r(g),t.d(g,{IngresoEgresoModule:()=>p});var l=t(9808),a=t(4232),r=t(2382),e=t(5e3),c=t(8302);const u=[{path:"",component:(()=>{class o{constructor(n){this.ingresoEgresoService=n,this.tipo="ingreso"}ngOnInit(){this.f=new r.cw({descripcion:new r.NI("",r.kI.required),monto:new r.NI(0,r.kI.min(0)),tipo:new r.NI("",r.kI.required)})}submitIngreso(){Object.assign({},this.f.value)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(c.W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-ingreso-egreso"]],decls:40,vars:2,consts:[[1,"grid","gap-6","md:grid-cols-2","lg:grid-cols-3"],[1,"md:col-span-2","lg:col-span-1"],[1,"h-full","py-8","px-6","space-y-6","rounded-xl","border","border-gray-200","bg-white"],[3,"formGroup","ngSubmit"],[1,"flex"],[1,"flex-1","py-5","pl-5","overflow-hidden"],["height","24px","viewBox","0 0 24 24","width","24px","xmlns","http://www.w3.org/2000/svg","fill","#000000",1,"inline","align-text-top"],["d","m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z","fill","none","id","svg_1","stroke","null"],["d","m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z","id","svg_2"],["cx","7.04807","cy","6.97256","r","2.5","id","svg_3"],[1,"inline","text-2xl","font-semibold","leading-none"],[1,"px-5","pb-5"],["placeholder","Descripcion","name","descripcion","formControlName","descripcion",1,"text-black","placeholder-gray-600","w-full","px-4","py-2.5","mt-2","text-base","transition","duration-500","ease-in-out","transform","border-transparent","rounded-lg","bg-gray-200","focus:border-blueGray-500","focus:bg-white","dark:focus:bg-gray-800","focus:outline-none","focus:shadow-outline","focus:ring-2","ring-offset-current","ring-offset-2","ring-gray-400"],[1,"flex-grow","w-1/4","pr-2"],["type","number","placeholder","Monto","name","monto","formControlName","monto",1,"currency","text-black","placeholder-gray-600","w-full","px-4","py-2.5","mt-2","text-base","transition","duration-500","ease-in-out","transform","border-transparent","rounded-lg","bg-gray-200","focus:border-blueGray-500","focus:bg-white","dark:focus:bg-gray-800","focus:outline-none","focus:shadow-outline","focus:ring-2","ring-offset-current","ring-offset-2","ring-gray-400"],[1,"flex-grow"],["placeholder","Tipo Ingreso / Egreso","name","tipo","formControlName","tipo",1,"text-black","placeholder-gray-600","w-full","px-4","py-2.5","mt-2","text-base","transition","duration-500","ease-in-out","transform","border-transparent","rounded-lg","bg-gray-200","focus:border-blueGray-500","focus:bg-white","dark:focus:bg-gray-800","focus:outline-none","focus:shadow-outline","focus:ring-2","ring-offset-current","ring-offset-2","ring-gray-400"],[1,"px-5"],[1,"mt-4"],[1,"flex","flex-row-reverse","p-3"],[1,"flex-initial","pl-3"],["type","submit",1,"flex","items-center","px-5","py-2.5","font-medium","tracking-wide","text-white","capitalize","bg-black","rounded-md","hover:bg-gray-800","focus:outline-none","focus:bg-gray-900","transition","duration-300","transform","active:scale-95","ease-in-out",3,"disabled"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px","fill","#FFFFFF"],["d","M0 0h24v24H0V0z","fill","none"],["d","M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z","opacity",".3"],["d","M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"],[1,"pl-2","mx-1"],[1,"flex-initial"],["type","reset",1,"flex","items-center","px-5","py-2.5","font-medium","tracking-wide","text-black","capitalize","rounded-md","hover:bg-red-200","hover:fill-current","hover:text-red-600","focus:outline-none","transition","duration-300","transform","active:scale-95","ease-in-out"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px"],["d","M8 9h8v10H8z","opacity",".3"],["d","M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),e.NdJ("ngSubmit",function(){return i.submitIngreso()}),e.TgZ(4,"div",4)(5,"div",5),e.O4$(),e.TgZ(6,"svg",6)(7,"g"),e._UZ(8,"path",7)(9,"path",8)(10,"circle",9),e.qZA()(),e.kcU(),e.TgZ(11,"h1",10),e._uU(12,"Ingreso / Egreso Form"),e.qZA()()(),e.TgZ(13,"div",11),e._UZ(14,"input",12),e.TgZ(15,"div",4)(16,"div",13),e._UZ(17,"input",14),e.qZA(),e.TgZ(18,"div",15),e._UZ(19,"input",16),e.qZA()()(),e._UZ(20,"div",17)(21,"hr",18),e.TgZ(22,"div",19)(23,"div",20)(24,"button",21),e.O4$(),e.TgZ(25,"svg",22),e._UZ(26,"path",23)(27,"path",24)(28,"path",25),e.qZA(),e.kcU(),e.TgZ(29,"span",26),e._uU(30,"Save"),e.qZA()()(),e.TgZ(31,"div",27)(32,"button",28),e.O4$(),e.TgZ(33,"svg",29),e._UZ(34,"path",23)(35,"path",30)(36,"path",31),e.qZA(),e.kcU(),e.TgZ(37,"span",26),e._uU(38,"Cancelar"),e.qZA()()()()()(),e._UZ(39,"div"),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("formGroup",i.f),e.xp6(21),e.Q6J("disabled",i.f.invalid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wV],encapsulation:2}),o})()}];let d=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,r.UX,d]]}),o})()}}]);