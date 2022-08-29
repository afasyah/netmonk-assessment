import Experience from './core/classes/Experience/Experience';
import { StringQueriesInterface } from './core/ts/interfaces/DataInterfaces';

declare global {
   interface Window {
      experience: Experience;
      stringQueries: StringQueriesInterface[];
   }
}
