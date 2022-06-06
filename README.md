#   Angular DashBoard Google Firebase
```
-   Tecnologias:
    - Google Firebase
    - Angular
    - Tailwind

```

##  Module 01 Instalar y Configurar Conexio de Firebase y Angular
```
01
-   Instalar la depedencia global de firebase 
-   $ npm install -g firebase-tools ( necesario para hacer login a firebase )
-   $ firebase login
-   $ ng add angular/firestore ( nos pedira que tipo de instalacion queremos Necesitaremos lo modulos de FireStore Module )

02
#   Al Finalizar de ejecutar las acciones anteriores en el App Module deberan haber las siguientes instalaciones y configuraciones
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],

03
  dentro del enviroment debemos tener las siguientes configuraciones proveeidas por aplicacion creada dentro de firebase console
  export const environment = {
  production: false,
  firebase: {
    projectId: '',
    appId: '',
    storageBucket: '',
    locationId: '', ( este lo genera la instalacion del paso 01 )
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
  }
};

```
##  02 Authentication Module
```
  After that, go to app.module.ts file and import authentication service and pass the AuthService class into providers: [AuthService] array. By doing this our authentication service will be available throughout the application.
```

##  Angular Budger Minum Size
```
  Open angular.json file and find budgets keyword.
  It should look like:

      "budgets": [
        {
            "type": "initial",
            "maximumWarning": "2mb",
            "maximumError": "5mb"
        }
      ]
  As you’ve probably guessed you can increase the maximumWarning value to prevent this warning, i.e.:

      "budgets": [
        {
            "type": "initial",
            "maximumWarning": "4mb", <===
            "maximumError": "5mb"
        }
      ]
  What does budgets mean?
  A performance budget is a group of limits to certain values that affect site performance, that may not be exceeded in the design and development of any web project.

  In our case budget is the limit for bundle sizes.

  See also:

  https://github.com/webpack/webpack/issues/3216
  https://angular.io/guide/build#configure-size-budgets
  Performance Budgets (Keep Request Counts Low And File Sizes Small)
```