// function Log ( constructor: Function ) {
//   console.log( constructor );
// }

// function Log2 ( target: any, propName: string | symbol ) {
//   console.log( target );
//   console.log( propName );
// }

// function Log3 ( target: any, propName: string | symbol, descriptor: PropertyDescriptor ) {
//   console.log( target );
//   console.log( propName );
//   console.log( descriptor );
// }

interface ComponentDecorator {
  selector: string
  template: string
}

function Component ( config: ComponentDecorator ) {
  return function
    <T extends { new( ...args: any[] ): object }>
    ( Constructor: T ) {
    return class extends Constructor {
      constructor( ...args: any[] ) {
        super( ...args )

        const el = document.querySelector( config.selector )!
        el.innerHTML = config.template
      }
    }
  }
}

@Component( {
  selector: '#card',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Card component</span>
      </div>
    </div>
  `
} )
class CardComponent {
  constructor( public name: string ) {
  }

  logName (): void {
    console.log( `Component name ${this.name}` );
  }
}

const card = new CardComponent( 'My card component' )
