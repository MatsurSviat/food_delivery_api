/// <reference types="node" />
import { Repository } from 'typeorm';
import { User } from '@entities';
export declare class MulterService {
    private readonly _userRepository;
    private _logger;
    private readonly _ignoreFileName;
    private readonly _filesFolder;
    constructor(_userRepository: Repository<User>);
    bufferWithImageToFilePath(buffer: Buffer): Promise<string>;
    private _removeUnusedFiles;
}
