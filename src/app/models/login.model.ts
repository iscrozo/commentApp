export class LoginModel {
  constructor(public email: string, public password: string) {}

  /**
   * Metodo que valida si es vacio o no
   * @param asData
   * @returns
   */
  isEmpty(asData: string): boolean {
    return !asData || asData.length === 0;
    //(!asData || new RegExp('/^\s*$/',asData) || asData.length === 0)
  }

  /**
   *  Metodo que valida los datos ingresados
   * @returns
   */
  validateData(): boolean {
    var EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!this.isEmpty(this.email) && !this.isEmpty(this.password)) {
      if (this.email.match(EMAIL_REGEX)) {
        return true;
      } else {
        console.log('Verifica el campo del correo');
        return false;
      }
    } else {
      console.log('Verifica el formulario, hay campos erroneos');
      return false;
    }
  }
}
