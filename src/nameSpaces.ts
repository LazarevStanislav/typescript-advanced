// type FormType = 'inline' | 'block'
// type FormState = 'active' | 'disabled'

// interface FormInfo {
//   type: FormType
//   state: FormState
// }

/// <reference path="./form-namespaces.ts" />
namespace IForm {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active' 
  
    constructor( public email: string ) {
      
    }
  
    getInfo (): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  
  export const myForm = new MyForm('l@mail.ru  ')
  
  
}

console.log(IForm.myForm);
