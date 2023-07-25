import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "admin" : "Admin view",
        "shops" : "Our shops",
        "contact" : "Contact us",
        "login" : "Log in",
        "cart" : "Shopping cart",
        "webshop-triin": "Triin's Webshop",
        "maintain-categories" : "Maintain categories",
        "maintain-shops" : "Maintain shops",
        "add-product" : "Add product",
        "maintain-products" : "Maintain products",
        "sort-AZ": "Products A - Z",
        "sort-ZA": "Products Z - A",
        "sort-price-asc": "Price low -> high ",
        "sort-price-desc": "Price high -> low",
        "added-to-cart": "{{productName}} added to the cart!",
        "add-to-cart": "Add to cart",
        "deleted-from-products" : "{{productName}} successfully removed",
        "delete" : "Delete",
        "remove-all": "Remove all",
        "total-sum": "Total sum",
        "edit": "Edit"
    }
  },
  ee: {
    translation: {
        "admin" : "Admin asjad",
        "shops" : "Meie poed",
        "contact" : "Kontakt",
        "login" : "Logi sisse",
        "cart" : "Ostukorv",
        "webshop-triin": "Triinu veebipood",
        "maintain-categories" : "Halda kategooriaid",
        "maintain-shops" : "Halda poode",
        "add-product" : "Lisa toode",
        "maintain-products" : "Halda tooteid",
         "sort-AZ": "Tooted A - Z",
        "sort-ZA": "Tooted Z - A",
        "sort-price-asc": "Odavamad -> kallimad",
        "sort-price-desc": "Kallimad -> odavamad",
        "added-to-cart": "{{productName}} on lisatud ostukorvi!",
        "add-to-cart" : "Lisa ostukorvi",
        "deleted-from-products" : "{{productName}} edukalt eemaldatud",
        "delete" : "Kustuta",
        "remove-all": "Tühenda ostukorv",
        "total-sum": "Summa kokku",
        "edit": "Muuda"
    }
  },

  es: {
    translation: {
        "admin" : "Administración",
        "shops" : "Nuestras tiendas",
        "contact" : "Contacto",
        "login" : "Iniciar sesión",
        "cart" : "Mi carro",
        "webshop-triin": "La tienda web de Triin",
        "maintain-categories" : "Mantener categorías",
        "maintain-shops" : "Mantener tiendas",
        "add-product" : "Agregar producto",
        "maintain-products" : "Mantener los productos",
        "sort-AZ": "Productos A - Z",
        "sort-ZA": "Productos Z - A",
        "sort-price-asc": "Precio bajo -> alto",
        "sort-price-desc": "Precio alto -> bajo",
        "added-to-cart": "{{productName}} se agrega al carro de compras!",
        "add-to-cart" : "Añadir al carro",
        "deleted-from-products" : "{{productName}} eliminado con éxito",
        "delete" : "Eliminar",
        "remove-all": "Eliminar todo",
        "total-sum": "Suma total",
        "edit": "Editar"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;