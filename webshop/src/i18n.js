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
        "edit": "Edit",
        "details": "Details",
        "back": "Go back",
        "id": "ID",
        "name": "Product name",
        "price": "Price",
        "category":"Category",
        "description":"Description",
        "image":"Image",
        "active":"Active",
        "add": "Add",
        "save": "Save",
        "sender-name": "Name",
        "email": "E-mail",
        "email-message": "Message",
        "send": "Send",
        "product-not-found": "Product was not found :(",
        "product-added": "Product added successfully!",
        "product-not-added": "Product adding failed: missing values",
        "empty-cart" : "Shopping cart is empty",
        "total" : "Total",
        "pc" : "pc",
        "stick-vacuum" : "Stick vacuum",
        "robot-vacuum" : "Robot vacuum",
        "camping" : "Camping",
        "tent": "Tent", 
        "id-not-unique" : "This ID is already in use"
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
        "edit": "Muuda",
        "details": "Toote üksikasjad",
        "back": "Tagasi",
        "id": "ID",
        "name": "Toote nimi",
        "price": "Hind",
        "category":"Kategooria",
        "description":"Kirjeldus",
        "image":"Pilt",
        "active":"Aktiivsus",
        "add":"Lisa",
        "save": "Salvesta",
        "sender-name": "Nimi",
        "email": "E-mail",
        "email-message": "Sõnum",
        "send": "Saada",
        "product-not-found": "Toodet ei leitud :(",
        "product-added": "Toode lisatud!",
        "product-not-added": "Tühjade väärtustega toodet ei saa lisada",
        "empty-cart" : "Ostukorv on tühi",
        "total" : "Kokku",
        "pc" : "tk",
        "stick-vacuum" : "Varstolmuimeja",
        "robot-vacuum" : "Robot tolmuimeja",
        "camping" : "Matkamine",
        "tent": "Telk", 
        "id-not-unique" : "Selline ID on juba kasutusel",



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
        "edit": "Editar",
        "details": "Detalles",
        "back": "Volver atrás",
        "id": "ID",
        "name": "Nombre del producto",
        "price": "Precio",
        "category":"Categoría",
        "description":"Descripción",
        "image":"Imagen",
        "active":"Activo",
        "add":"Añadir",
        "save": "Quardar",
        "sender-name": "Nombre",
        "email": "Correo electrónico",
        "email-message": "Mensaje",
        "send": "Enviar",
        "product-not-found": "No se encontró el producto :(",
        "product-added": "Producto añadido con éxito",
        "product-not-added": "No se pudo agregar el producto: faltan valores",
        "empty-cart" : "El carro de compras está vacío",
        "total" : "Total",
        "pc" : "ud", 
        "stick-vacuum" : "Palo de vacío",
        "robot-vacuum" : "Robot aspirador",
        "camping" : "Cámping",
        "tent": "Carpa", 
        "id-not-unique" : "Este ID ya está en uso",


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