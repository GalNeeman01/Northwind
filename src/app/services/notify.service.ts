import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
    private notyf = new Notyf({
        duration: 3000,
        position: {x: "center", y: "top"},
        dismissible: false,
        ripple: true
    });

    private extractError(error: any) : string {
        if (typeof error === "string") return error;

        if (typeof error.error === "string") return error.error;

        if(typeof error.message === "string") return error.message;

        return "Some error occurred...";
    }

    public success(message: string): void {
        this.notyf.success(message);
    }

    public error(error: any): void {
        this.notyf.error(this.extractError(error));
    }
}
