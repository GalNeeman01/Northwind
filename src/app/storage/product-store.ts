import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ProductModel } from "../models/product.model";
import { computed } from "@angular/core";
import { withDevtools } from "@angular-architects/ngrx-toolkit";

export type ProductState = {
    products: ProductModel[];
}

const initialState: ProductState = {
    products: []
}

export const ProductStore = signalStore(
    // Creating ProductStore as a service in the app level.
    { providedIn: "root" },

    // Initial state
    withState(initialState),

    // Operation needed on this global state (init, add, update, delete)
    withMethods(store => ({
        
        // Init products given from backend:
        initProducts(products: ProductModel[]): void {
            patchState(store, currentState => ({products}))
        },

        // Add new product to global state:
        addProduct(product: ProductModel) : void {
            patchState(store, currentState => ({products: [...currentState.products, product]}));
        },

        // Update existing product in global state:
        updateProduct(product: ProductModel): void {
            patchState(store, currentState => ({products: currentState.products.map(p => p.id === product.id ? product : p)}));
        },

        // Delete from products:
        deleteProduct(id: number): void {
            patchState(store, currentState => ({products: currentState.products.filter(p => p.id !== id)}));
        }
    })),

    withComputed(store => ({
        count: computed(() => store.products().length)
    })),

    // Add reports to debug tool
    withDevtools("ProductStore")
);