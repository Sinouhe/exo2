exports.success = (message, data) => {
    return {
        status: 'success',
        result: data,
        message: message
    }
};

exports.error = (message, data) => {
    return {
        status: 'error',
        result: data,
        message: message
    }
};

