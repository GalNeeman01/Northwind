import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function extraSpacing() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        if (!control.value)
            return null; // If there is no value, all is good

        if (control.value.includes(" ")) 
            return {extraSpacing: "Extra spacing is forbidden."}

        return null;
    };
}