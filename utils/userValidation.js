const Yup = require("yup");

const schema = Yup.object().shape({
  username: Yup.string()
    .required("نام کاربری الزامی می باشد")
    .min(4, "نام کاربری نباید کمتر از 4 کاراکتر باشد")
    .max(128, "نام کاربری نباید بیشتر از 128 کاراکتر باشد"),
  email: Yup.string()
    .email("ایمیل معتبر نمی باشد")
    .required("ایمیل الزامی می باشد"),
  password: Yup.string()
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
    .max(128, "کلمه عبور نباید بیشتر از 128 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
  passwordRepeat: Yup.string()
    .required("تکرار کلمه عبور الزامی می باشد")
    .oneOf([Yup.ref("password"), null], "کلمه عبور با تکرار آن مطابقت ندارد"),
});

module.exports = schema;
