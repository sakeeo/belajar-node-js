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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users23Service = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const uuid_1 = require("uuid");
const prisma_service_1 = require("../prisma/prisma.service");
let Users23Service = class Users23Service {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get() {
        const data = await this.prisma.users23.findMany();
        return data;
    }
    async create(dto) {
        const hash = await argon.hash(dto.password);
        const myuuid = (0, uuid_1.v4)();
        try {
            const user = await this.prisma.users23.create({
                data: {
                    uuid: myuuid,
                    username: dto.username,
                    password: hash,
                    idpegawai: Number(dto.idpegawai),
                    level: Number(dto.level),
                },
            });
            delete user.password;
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async update(dto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.users23.update({
                where: { iduser: Number(dto.iduser) },
                data: {
                    username: dto.username,
                    password: hash,
                    idpegawai: Number(dto.idpegawai),
                    level: Number(dto.level),
                },
            });
            delete user.password;
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
};
Users23Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], Users23Service);
exports.Users23Service = Users23Service;
//# sourceMappingURL=users23.service.js.map