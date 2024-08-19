'use strict';

/**
 * closing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::closing.closing');
