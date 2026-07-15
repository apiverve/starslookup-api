declare module '@apiverve/starslookup' {
  export interface starslookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface starslookupResponse {
    status: string;
    error: string | null;
    data: StarsLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface StarsLookupData {
      starName: null | string;
      mass:     number | null;
      diameter: number | null;
      galX:     number | null;
      galY:     number | null;
      galZ:     number | null;
      dist:     number | null;
      starType: null | string;
      temp:     number | null;
      color:    null | string;
  }

  export default class starslookupWrapper {
    constructor(options: starslookupOptions);

    execute(callback: (error: any, data: starslookupResponse | null) => void): Promise<starslookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: starslookupResponse | null) => void): Promise<starslookupResponse>;
    execute(query?: Record<string, any>): Promise<starslookupResponse>;
  }
}
