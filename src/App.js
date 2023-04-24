import { useEffect, useState } from "react";
import FormBlock from "./components/form-block/form-block";
import Input from "./components/input/input";
import Profile from "./components/profile/profile";
import Select from "./components/select/select";
import SplitLine from "./components/split-line/split-line";
import Status from "./components/status/status";
import cities from "./services/data/cities";
import { checkValid } from "./services/utils";

function App() {
  const [data, setData] = useState({
    email: {
      value: "",
      reg: "^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$",
    },
    password: {
      value: "",
      reg: "[A-Za-z0-9]{5,}", ///[A-Za-z0-9]{5,}/
    },
    passwordRepeat: {
      value: "",
      reg: "[A-Za-z0-9]{5,}",
    },
    city: "",
    checked: true,
  });
  const [validationOn, setValidationOn] = useState(false);
  const [update, setUpdate] = useState(false);
  useEffect(() => {}, [localStorage.getItem("date")]);

  const onEmailChange = (e) => {
    setData({ ...data, email: { ...data.email, value: e.target.value } });
  };

  const onPasswordChange = (e) => {
    setData({ ...data, password: { ...data.password, value: e.target.value } });
  };

  const onPasswordRepeatChange = (e) => {
    setData({
      ...data,
      passwordRepeat: { ...data.passwordRepeat, value: e.target.value },
    });
  };

  const onCityChange = (e) => {
    setData({ ...data, city: e.target.value });
  };

  const onCheckChange = (e) => {
    setData({ ...data, checked: !data.checked });
  };

  const filteredCities = cities.filter(({ population }) => {
    return population >= 50000;
  });

  const mail = [
    {
      name: "Электронная почта",
      input: {
        name: "email",
        type: "text",
        errorMessage: "Неверный E-mail",
        emptyMessage: "Укажите E-mail",
        onChange: onEmailChange,
        reg: data.email.reg,
        value: data.email.value,
      },
      description: "Можно изменить адрес, указанный при регистрации.",
    },
    {
      name: "Я согласен",
      checkbox: {
        name: "agree",
        description: "принимать актуальную информацию на емейл",
        onChange: onCheckChange,
        value: data.checked,
      },
      description: "",
    },
    {
      name: "",
      button: {
        description: localStorage.getItem("date")
          ? localStorage.getItem("date")
          : "последние изменения никогда",
        innerText: "Изменить",
        buttonType: "submit",
      },
      description: "",
    },
  ];

  const password = [
    {
      name: "Пароль",
      input: {
        name: "password",
        type: "password",
        errorMessage: "Используйте не менее 5 символов",
        emptyMessage: "Укажите пароль",
        onChange: onPasswordChange,
        value: data.password.value,
        reg: data.password.reg,
      },
      description: "Ваш новый пароль должен содержать не менее 5 символов.",
    },
    {
      name: "Пароль еще раз",
      input: {
        name: "repeat-password",
        type: "password",
        errorMessage: "Пароли не совпадают",
        emptyMessage: "Укажите пароль",
        onChange: onPasswordRepeatChange,
        value: data.passwordRepeat.value,
        reg: data.password.value,
      },
      description:
        "Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.",
    },
  ];

  const city = [
    {
      name: "Ваш город",
      select: {
        name: "city",
        options: filteredCities,
        onChange: onCityChange,
        value: data.city,
      },
      description: "",
    },
  ];

  const profileStyle = {
    width: "61.4%",
    margin: "0 0 32px 0",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validity = e.target.checkValidity();
    if (!validity) {
      setValidationOn(true);
      return;
    } else {
      setValidationOn(false);
    }
    localStorage.setItem("date", new Date().toUTCString());
    setUpdate(new Date().toUTCString());
    const formData = new FormData(e.target);
    const result = {
      city: formData.get("city"),
      password: formData.get("password"),
      email: formData.get("email"),
      agree: formData.get("agree"),
    };
    console.log(result);
  };

  return (
    <div className="App">
      <div className="content">
        <Profile style={profileStyle} />
        <form onSubmit={onSubmit} className="form" noValidate>
          <FormBlock settings={city} validation={validationOn} />
          <SplitLine mt="32px" mb="32px" />
          <FormBlock settings={password} validation={validationOn} />
          <SplitLine mt="32px" mb="32px" />
          <FormBlock settings={mail} validation={validationOn} />
        </form>
      </div>
    </div>
  );
}

export default App;
