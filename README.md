# angular

## Routes/Navigation

For routing, we first create the navigation component.  
The component can be added in AppComponent

We add the paths in "app.routes.ts" file

```.ts
    export const routes: Routes = [
        {
            path:'',
            redirectTo:'home',  // Home here is the path defined below
            pathMatch:'full'
        },
        {
            path:'home',
            component:HomePageComponent
        },
        {
            path:'products',
            component:ProductsComponentComponent
        },
        {
            path:'about',
            component:AboutComponentComponent
        },
        {
            path:'contact',
            component:ContactComponentComponent
        }
    ];
```

We can then add this in the navComponent as follows:
```.ts
<nav>
    <div class="mainDiv">
        <div class="logoDiv">
            <img src="favicon.ico" alt="couldn't load website logo">
        </div>

        <div class="optionsDiv">
            <ul class="optionsUl">
                <li><a href="#" routerLink="home"><h3>Home</h3></a></li>
                <li><a href="#" routerLink="products"><h3>Products</h3></a></li>
                <li><a href="#" routerLink="contact"><h3>Contact</h3></a></li>
                <li><a href="#" routerLink="about"><h3>About</h3></a></li>
               
            </ul>

        </div>

        <div class="buttonsDiv">
            <button class="SwitchThemeBtn">SwitchTheme</button>
            <button class="LoginBtn">Login</button>
            <button class="SignUpBtn">Sign-Up</button>
        </div>
    </div>
</nav>
```

For adding a navigation on click of the button we add the routerlink to the button
```ts
<button class="LoginBtn" [routerLink]="'/login'">Login</button>
<button class="SignUpBtn" [routerLink]="'/signup'">Sign-Up</button>
```

For navigating through method on click of button

```html
<button (click)="navigateToLogin()">Signup</button>
```

```signup.ts
export class SignupPageComponent {
  constructor(private router:Router){

  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }
}
```
