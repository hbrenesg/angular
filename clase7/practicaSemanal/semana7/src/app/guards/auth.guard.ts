import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //Antes de activar una vista
  return false;
};
