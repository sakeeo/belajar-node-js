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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users23Controller = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const dto_1 = require("./dto");
const users23_service_1 = require("./users23.service");
let Users23Controller = class Users23Controller {
    constructor(users23Service) {
        this.users23Service = users23Service;
    }
    get() {
        return this.users23Service.get();
    }
    create(dto) {
        return this.users23Service.create(dto);
    }
    update(dto) {
        return this.users23Service.update(dto);
    }
};
__decorate([
    (0, common_1.Get)('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Users23Controller.prototype, "get", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.Users23Dto]),
    __metadata("design:returntype", void 0)
], Users23Controller.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.Users23Dto]),
    __metadata("design:returntype", void 0)
], Users23Controller.prototype, "update", null);
Users23Controller = __decorate([
    (0, common_1.Controller)('users23'),
    __metadata("design:paramtypes", [users23_service_1.Users23Service])
], Users23Controller);
exports.Users23Controller = Users23Controller;
//# sourceMappingURL=users23.controller.js.map