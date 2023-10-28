import { CanDeactivateFn } from '@angular/router';

export const saveValidationGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  //Antes de desactivar una ruta
  return confirm('Esta seguro que quiere abandonar esta vista?')
};
