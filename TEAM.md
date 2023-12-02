# Dependencias del Proyecto

## 1. axios

- **Descripción:** Axios simplifica las solicitudes HTTP.
- **Uso:**

  ```javascript
  import axios from "axios";

  axios
    .get("https://api.example.com/data")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

## 2. date-fns

- **Descripción:** Facilita las operaciones de fechas.
- **Uso:**

  ```javascript
  import { format } from "date-fns";

  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd");
  console.log(formattedDate);
  ```

## 3. formik

- **Descripción:** Ayuda con la gestión de formularios.
- **Uso:**

  ```javascript
  import { useFormik } from "formik";

  const initialValues = { username: "", password: "" };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  ```

## 4. prop-types

- **Descripción:** Valida las propiedades de los componentes React.
- **Uso:**

  ```javascript
  import PropTypes from "prop-types";

  function MyComponent({ name, age }) {
    return (
      <div>
        <p>
          {name}, {age} years old
        </p>
      </div>
    );
  }

  MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  ```

## 5. react y react-dom

- **Descripción:** React para construir componentes, y React DOM para renderizarlos.
- **Uso:**

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom";

  const App = () => <h1>Hello, React!</h1>;

  ReactDOM.render(<App />, document.getElementById("root"));
  ```

## 6. react-icons

- **Descripción:** Proporciona iconos para utilizar en componentes React.
- **Uso:**

  ```javascript
  import { FaBeer } from "react-icons/fa";

  const MyComponent = () => (
    <div>
      <p>
        Enjoy a cold <FaBeer />!
      </p>
    </div>
  );
  ```

  Los iconos a utilizar seran de las librerias:
  [FONT AWESOME 5](https://react-icons.github.io/react-icons/icons/fa/)
  [FONT AWESOME 6](https://react-icons.github.io/react-icons/icons/fa6/)
  [MATERIAL DESIGN ICONS](https://react-icons.github.io/react-icons/icons/md/)
  [CIRCUM ICONS](https://react-icons.github.io/react-icons/icons/ci/)

  ## Para importar varios iconos no hagan varios imports, solo separenlos por comas => {ICONO1, ICONO2, ICONO3, ...} from 'react-icons/<LIBRERIA>'

  ## SI HAY OTROS ICONOS QUE LES PAREZCAN MEJORES O MAS PARECIDOS A LOS DEL DISEÑO, AGREGUENLA.

## 7. react-redux

- **Descripción:** Facilita la integración de React con Redux.
- **Uso:**

  ```javascript
  import { Provider } from "react-redux";
  import store from "./redux/store"; // Configura tu almacén de Redux

  const App = () => (
    <Provider store={store}>{/* Componentes conectados a Redux */}</Provider>
  );
  ```

## 8. react-router-config y react-router-dom

- **Descripción:** React Router para manejar la navegación en React.
- **Uso:**

  ```javascript
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

  const App = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
  ```

## 9. redux

- **Descripción:** Redux para el manejo del estado.
- **Uso:**

  ```javascript
  import { createStore } from "redux";
  import rootReducer from "./reducers"; // Configura tus reductores

  const store = createStore(rootReducer);
  ```

## 10. redux-thunk

    - **Descripción:** Middleware para acciones asíncronas con Redux.
    - **Uso:**
      ```javascript
      import { applyMiddleware, createStore } from 'redux';
      import thunk from 'redux-thunk';
      import rootReducer from './reducers'; // Configura tus reductores

      const store = createStore(rootReducer, applyMiddleware(thunk));
      ```
