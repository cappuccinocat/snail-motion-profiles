import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const settings = {
      accel: 0,
      jerk: 0,
      vel: 0,
      width: 0
    };
    return {settings};
  }
}
