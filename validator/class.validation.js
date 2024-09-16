const yup = require("yup");

const classValidationSchema = yup.object({
    occupation: yup.string().required(),
    salary: yup.number().required(),
    workload: yup.number().required(),
});

module.exports = classValidationSchema;