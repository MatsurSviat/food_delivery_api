"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MulterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const _entities_1 = require("../../../db/entities/index");
const constants_1 = require("../../../models/constants");
let MulterService = MulterService_1 = class MulterService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
        this._logger = new common_1.Logger(MulterService_1.name);
        this._ignoreFileName = '.gitkeep';
        this._filesFolder = 'files';
    }
    async bufferWithImageToFilePath(buffer) {
        const fileName = `${(0, uuid_1.v1)()}.webp`;
        await (0, promises_1.writeFile)((0, path_1.resolve)(constants_1.PUBLIC_PATH, this._filesFolder, fileName), buffer);
        return (0, path_1.join)(this._filesFolder, fileName);
    }
    async _removeUnusedFiles() {
        this._logger.verbose('START: actualize files');
        const userImages = await this._userRepository
            .createQueryBuilder()
            .select([
            'IFNULL(GROUP_CONCAT(avatar), "") AS avatars',
            'IFNULL(GROUP_CONCAT(profileBackground), "") AS profileBackgrounds',
        ])
            .getRawOne();
        const pathsAsArray = `${userImages.avatars},${userImages.profileBackgrounds}`.split(',').filter(Boolean);
        const filesInFolder = await (0, promises_1.readdir)((0, path_1.resolve)(constants_1.PUBLIC_PATH, this._filesFolder));
        const filesWithoutIgnore = filesInFolder.filter(file => file !== this._ignoreFileName);
        if (filesWithoutIgnore.length) {
            for (const file of filesWithoutIgnore) {
                if (!pathsAsArray.includes(file)) {
                    await (0, promises_1.unlink)((0, path_1.resolve)(constants_1.PUBLIC_PATH, 'files', file));
                    this._logger.verbose(`INFO: "${file}" removed!`);
                }
            }
        }
        this._logger.verbose('FINISH: actualize files');
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MulterService.prototype, "_removeUnusedFiles", null);
MulterService = MulterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(_entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MulterService);
exports.MulterService = MulterService;
//# sourceMappingURL=multer.service.js.map