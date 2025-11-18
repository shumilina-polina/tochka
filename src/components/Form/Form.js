import emailjs from "@emailjs/browser";
import s from "./form.module.scss";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useState } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import SvgSelector from "components/SvgSelector";

const Form = () => {
  const location = useLocation();

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const radio = useRef(null);
  const budget = useRef(null);
  const [sended, setSended] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("radio.current.children: ", radio.current.children);
    Array.from(radio.current.children).map((elem) => {
      if (elem.children[0].classList.contains("Mui-checked"))
        budget.current.value = elem.children[1].innerText;
    });
    if (checked) {
      emailjs
        .sendForm(
          "service_ahvtike",
          "template_378i28t",
          e.target,
          "9HeTZAH8WW_l6M9xo"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.message);
          }
        );
      setSended(true);
      setTimeout(() => setSended(false), 7000);
      e.target.reset();
    }
  };

  return sended ? (
    <div className={cn(s.form, s.form_sended)}>
      <div className={s.wr}>
        <h2>Спасибо!</h2>
        <p>
          Ваша заявка уже&nbsp;летит к&nbsp;нам <br /> Ответим в&nbsp;течение
          часа
        </p>
      </div>
    </div>
  ) : (
    <div className={s.wr}>
      <h3>Обсудить проект</h3>

      <div className={s.wr_flex}>
        <form className={s.form} id="contacts" onSubmit={sendEmail}>
          <FormControl>
            <InputLabel htmlFor="fio-input">Ваше имя</InputLabel>
            <Input
              inputProps={{
                maxLength: 40,
                name: "name",
                required: true,
                type: "text",
              }}
              id="fio-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="company-input">Компания</InputLabel>
            <Input
              inputProps={{
                maxLength: 60,
                name: "company",
                required: true,
                type: "text",
              }}
              id="company-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone-input">
              Telegram или номер телефона
            </InputLabel>
            <Input
              inputProps={{
                maxLength: 20,
                name: "contacts",
                required: true,
                type: "tel",
              }}
              id="phone-input"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="issue-input">
              Расскажите кратко о задаче
            </InputLabel>
            <Input
              inputProps={{
                maxLength: 100,
                name: "description",
                required: true,
                type: "text",
              }}
              id="issue-input"
            />
          </FormControl>
          <FormControl>
            <label>Бюджет</label>
            <RadioGroup defaultValue={0} ref={radio}>
              {["<1 млн", "1-3 млн", "3-5 млн", ">5 млн"].map((elem, index) => (
                <FormControlLabel
                  key={index}
                  control={<Radio value={index} />}
                  label={elem}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <input
            style={{ display: "none" }}
            ref={budget}
            type="text"
            name="budget"
          />
        </form>
        <div className={s.policy}>
          <FormControlLabel
            label={
              <p className={s.policy_text}>
                Даю согласие на обработку персональных данных
                <br /> и принимаю условия{" "}
                <a
                  href={require("assets/documents/ПОЛИТИКА_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf")}
                >
                  Политики конфиденциальности
                </a>
              </p>
            }
            control={
              <Checkbox
                className={s.checkbox}
                disableFocusRipple
                disableTouchRipple
                disableRipple
                icon={<SvgSelector svg="unchecked" />}
                checkedIcon={<SvgSelector svg="checked" />}
                checked={checked}
                onChange={handleChange}
              />
            }
          />
        </div>
        <button
          disabled={!checked}
          className="button"
          form="contacts"
          type="submit"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Form;
