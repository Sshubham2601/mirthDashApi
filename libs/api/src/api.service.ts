import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as https from 'https';

const config = require('./api.config.json');

@Injectable()
export class ApiService {
  private baseUrl: string;
  private apiAuth: string;
  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('API_BASE_URL') || '';
    this.apiAuth = this.configService.get<string>('API_AUTH') || '';  // Fetch Authorization from .env
  }

  getEndpoint(module: string, params: Record<string, string> = {}): string {
    if (!config[module]) {
        throw new Error(`Endpoint not found for module '${module}'`);
    }

    let path = config[module]; 
    Object.keys(params).forEach((key) => {
        path = path.replace(`:${key}`, params[key]);
    });

    //  Prevents duplicate base URLs
    if (path.startsWith('http')) {
        return path;
    }

    return `${this.baseUrl}${path}`;
  }

  async get(module: string, params = {}, headers = {}) {
    try {
      const url = this.getEndpoint(module, params);
      console.log(`Fetching URL: ${url}`);

      const response = await axios.get(url, {
        headers: {
          Accept: 'application/xml',
          'X-Requested-With': 'OpenAPI',
          Authorization: headers['Authorization'] || `Basic ${this.apiAuth}`,
    
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      });

      const jsonData = await parseStringPromise(response.data, { explicitArray: false });
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw new Error('Failed to fetch data');
    }
  }
}
