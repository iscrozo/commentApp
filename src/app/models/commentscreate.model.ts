export class CommentsCreateModel {
  constructor(
    public name: string,
    public email: string,
    public website: string,
    public content: string
  ) {}

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
  validateData(): number {
    let EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let DATA_AZ_REGEX = /^([a-zA-Z ])*$/;

    if (
      !this.isEmpty(this.name) &&
      !this.isEmpty(this.email) &&
      !this.isEmpty(this.content)
    ) {
      if (this.name.match(DATA_AZ_REGEX)) { // validar solo letras y el tamaño 35
        return 1;
      } else if (this.email.match(EMAIL_REGEX)) {
        return 1;
      } else {
        console.log('Verifica el campo del correo');
        return 0;
      }
    } else {
      console.log(
        'Verifica el formulario - createcomment, hay campos erroneos'
      );
      return 0;
    }
  }
}
