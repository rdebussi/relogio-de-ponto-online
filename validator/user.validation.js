const yup = require("yup");

const userValidationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    cpf: yup.number().required(),
    birthday: yup.date().required(),
    classId: yup.number().required(),
});

module.exports = userValidationSchema;
