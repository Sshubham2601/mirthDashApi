// import { Injectable } from '@nestjs/common';
// import { ApiService } from '@app/api';

// @Injectable()
// export class ChannelService {
//   constructor(private readonly apiService: ApiService) {}

//   async getChannelStatuses() {
//     return await this.apiService.get('DashBoard'); // ✅ Fetch JSON data
//   }
// }


import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/api';

@Injectable()
export class ChannelService {
  constructor(private readonly apiService: ApiService) {}

  async getChannelStatuses(authHeader: string) {
    return await this.apiService.get('DashBoard', {
      headers: { Authorization: authHeader }, // Pass token in headers
    });
  }
}
