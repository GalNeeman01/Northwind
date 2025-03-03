import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    @ViewChild("lazyContainer", {read: ViewContainerRef})
    public viewContainerDivRef: ViewContainerRef;

    public async showSale() : Promise<void> {
        this.viewContainerDivRef.clear();

        // Lazy load the component from back end
        const { SaleComponent } = await import("../sale/sale.component");

        // Inject the lazy component to the DOM
        this.viewContainerDivRef.createComponent(SaleComponent);
    }
}
