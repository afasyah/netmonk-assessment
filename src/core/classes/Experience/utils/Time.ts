import EventEmitter from '../../EventEmitter';

/*
 *  Class that work a bit like the Clock in Three.JS
 *  It will save the current time, elapsed time and delta time between current and previous time
 *  It also trigger an event on each frame to listen and update the whole experience
 *  @constructor
 *    | start: number
 *    | current: number
 *    | elapsed: number
 *    | delta: number
 */
export class Time extends EventEmitter {
   public start: number;
   public current: number;
   public elapsed: number;
   public delta: number;

   constructor() {
      super();

      this.start = Date.now();
      this.current = this.start;
      this.elapsed = 0;
      this.delta = 16;

      window.requestAnimationFrame(() => {
         this.tick();
      });
   }

   tick() {
      const currentTime = Date.now();
      this.delta = currentTime - this.current;
      this.current = currentTime;
      this.elapsed = this.current - this.start;

      this.trigger('tick');
   }
}

export default Time;
