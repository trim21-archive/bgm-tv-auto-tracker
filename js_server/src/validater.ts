import * as validate from 'validate.js'

validate.validators.type = function (value, options, key, attributes) {
    // allow empty values by default (needs to be checked by "presence" check)
    if (value === null || typeof value === 'undefined') {
        return null
    }

    if (!validate.validators.type.checks[options]) {
        throw new Error('Could not find validator for type ' + options)
    }
    return validate.validators.type.checks[options](value) ? null : ' is not type "' + options + '"'
}
validate.validators.type.checks = {
    Object: function (value) {
        return validate.isObject(value) && !validate.isArray(value)
    },
    Array: validate.isArray,
    Integer: validate.isInteger,
    Number: validate.isNumber,
    string: validate.isString,
    Date: validate.isDate,
    Boolean: function (value) {
        return typeof value === 'boolean'
    }
}
export { validate }
