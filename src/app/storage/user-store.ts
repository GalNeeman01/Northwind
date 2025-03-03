import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { UserModel } from "../models/user.model";
import { computed } from "@angular/core";

// State (data) type
export type UserState = {
    user: UserModel;
}

// Initial state
const initialState: UserState = {
    user: null
};

// Store
export const UserStore = signalStore(
    {providedIn: "root"}, // Singleton object for DI

    withState(initialState), // Initial state

    withMethods(store => ({ // Operations we can perform
         initUser(user: UserModel): void {
            patchState(store, _currentState => ({ user }));
         },

         logoutUser(): void {
            patchState(store, _currentState => ({ user: null as UserModel }));
         }
    })),

    withComputed(store => ({
        fullName: computed(() => `${store.user()?.firstName} ${store.user()?.lastName}`)
    }))
)