import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template:
    `
    <h2> New Event </h2>
    <hr>
    <div class="col-md-6">
        <h3>[Create Form Will Go Here]</h3>
        <br>
        <br>
        <button type="Submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="handleCancel()">Cancel</button>
    </div>
    
    `
})
export class CreateEventComponent{
    isDirty:boolean = true
    constructor(private router:Router){

    }

    handleCancel(){
        this.router.navigate(['/events'])
    }
}