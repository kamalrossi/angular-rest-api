<div class="container">
    <h1>Update Product</h1>
  
    <a href="#" routerLink="/product/index" class="btn btn-primary">Back</a>
        
    <form [formGroup]="form" (ngSubmit)="submit()">
  
        <div class="form-group">
            <label for="title">Title:</label>
            <input 
                formControlName="title"
                id="title" 
                type="text" 
                [(ngModel)]="product.title"
                class="form-control">
            <div *ngIf="f.title.touched && f.title.invalid" class="alert alert-danger">
                <div *ngIf="f.title.errors?.required">Title is required.</div>
            </div>
        </div>
         
        <div class="form-group">
            <label for="body">Body</label>
            <textarea 
                formControlName="body"
                id="body" 
                type="text" 
                [(ngModel)]="product.body"
                class="form-control">
            </textarea>
            <div *ngIf="f.body.touched && f.body.invalid" class="alert alert-danger">
                <div *ngIf="f.body.errors?.required">Body is required.</div>
            </div>
        </div>
        
        <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Update</button>
    </form>
</div>
You will see preview as like bellow:

