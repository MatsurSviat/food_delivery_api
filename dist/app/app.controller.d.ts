import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(req: Request): Promise<void>;
    googleAuthRedirect(req: Request): any;
}
