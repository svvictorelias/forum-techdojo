"use strict";

var _LikeRepository = require("../../modules/like/infra/repositories/LikeRepository");
var _QuestionRepository = require("../../modules/question/infra/repositories/QuestionRepository");
var _UserRepository = require("../../modules/user/infra/repositories/UserRepository");
var _tsyringe = require("tsyringe");
_tsyringe.container.registerSingleton('UserRepository', _UserRepository.UserRepository);
_tsyringe.container.registerSingleton('QuestionRepository', _QuestionRepository.QuestionRepository);
_tsyringe.container.registerSingleton('LikeRepository', _LikeRepository.LikeRepository);