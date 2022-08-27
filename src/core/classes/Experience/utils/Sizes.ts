import EventEmitter from '../../EventEmitter';

/*
 *  Class for listening and giving an information about the device screen size
 *  @constructor
 *    | width: number
 *    | height: number
 *    | pixelRatio: number
 */
export class Sizes extends EventEmitter {
   public width: number;
   public height: number;
   public pixelRatio: number;
   public aspect: number;
   public frustum: number;

   constructor() {
      super();

      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.aspect = window.innerWidth / window.innerHeight;
      this.frustum = 5;

      window.addEventListener('resize', () => {
         // trigger EventEmitter methods to update the size, built for usability
         this.width = window.innerWidth;
         this.height = window.innerHeight;
         this.pixelRatio = Math.min(window.devicePixelRatio, 2);
         this.aspect = window.innerWidth / window.innerHeight;

         this.trigger('resize');
      });
   }
}

export default Sizes;
