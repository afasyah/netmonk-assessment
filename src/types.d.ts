import Experience from './core/classes/Experience/Experience';

declare global {
   interface Window {
      experience: Experience;
   }
}
