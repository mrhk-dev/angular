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


## Template form with Validation


For using the angular template validation we declare the #VarName="ngModel" inside the tag and we import the FormsModule

We then use this var name for dataValidation

```html
<input type="text" class="form-control" placeholder="First name" value="" #fName="ngModel" required [(ngModel)]="userObject.firstName" name="firstName">
<div class="input-group-text">
    @if (fName.errors?.['required'] && fName.touched) {
        <span class="input-group-text">First Name is Required</span>
    }
</div>
```

other example
```html
<input type="text" class="form-control" #lName="ngModel" minlength="3" placeholder="Last name" value="" required [(ngModel)]="userObject.latName" name="lastName">
<div class="input-group-text">
    <span *ngIf="lName.errors?.['required']" class="input-group-text">Lastt Name is Required</span>
    <span *ngIf="lName.errors?.['minlength']" class="input-group-text">Last name mush be of atleast 3 characters</span>
</div>
```

For using it in Button 
```html
<button class="btn btn-primary" [disabled]="ngForm.invalid" type="submit" (click)="clickSub()">Submit form</button>
```
In the above example the button is disabled if the form is valid  

But For entire Form validation we use ngForm and not ngModel
```html
<form #ngForm="ngForm">
```

## Reactive Form and Validation:
For using reactive form model we import "ReactiveFormModel"

```ts
    reactiveForm: FormGroup = new FormGroup({
        firstName:new FormControl("", Valida),
        lastName:new FormControl(""),
    })
```

```html
<form [formGroup]="reactiveForm" class="needs-validation" novalidate>
    <input formControlName="firstName">
</form>
```

If the Button type is submit then use the (ngSubmit)="functionNameToBeCalled()" in Form
In normal button types call the button with notmal function call

We refer the FormControl  

Form Validation we can add all the validation in the object  
```ts
reactiveForm: FormGroup = new FormGroup({
firstName:new FormControl("", [Validators.required, Validators.minLength(5)]), //Validation added here
lastName:new FormControl(""),
  })
}
```

```html
<input formControlName="firstName">
@if (reactiveForm.controls['firstName'].errors?.['required'] && reactiveForm.controls['firstName'].touched) {

}
```

We can Disable Or Enable the control at the ts

```ts
this.reactiveForm.controls['controlName'].disable();
```


In Button we can add the condition as 

```html
<button class="btn btn-primary" [disabled]="reactive.invalid" (click)="clickSub()" >Submit</button>
```



