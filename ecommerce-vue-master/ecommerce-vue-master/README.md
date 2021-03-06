# PrΓ‘ctica Calificada (Step - 2)

- Se deben implementar las vistas segun el diseΓ±o establecido
- Se debe utilizar el API proporcionado (Ver Documentacion del API)
- EL proyecto ya incluye Bootstrap + Paleta de colores
- Considerar la rubrica de calificaciΓ³n
  <br><br>

# Vue Ecommerce App

Se debe desarrollar una pagina web de acuerdo a los prototipos
<br><br>

# Referencia

URL : [Link de prototipos](https://www.figma.com/proto/KfvXzfkC7NVBSo1CQAYA7E/APP-ECOMMERCE?page-id=0%3A1&node-id=58%3A2961&viewport=344%2C48%2C0.58&scaling=scale-down&starting-point-node-id=58%3A2961)

![ejercicio](/assets/prototipos.png)
<br><br>

# π Estructura del proyecto

```bash
βββ assets/
β   βββ favicon.png                 # favicon (icono)
β   βββ loading.gif                 # loader image
β   βββ logo.png                    # logo
βββ css                             # css
β   βββ bootstrap.css               # bootstrap + Theme colors
β   βββ styles.css                  # custom css
βββ js                              # main source code
β   βββ api                         # api service
β   β   βββ client.js               # client api module (permite la conexion al API)
β   βββ components                  # vue components
β   β   βββ category_item.js        # category list item
β   β   βββ category_list.js        # category list
β   β   βββ loader.js               # loader
β   β   βββ navbar.js               # upper navbar
β   β   βββ product_item.js         # product list item
β   β   βββ product_list.js         # product list
β   β   βββ search_input.js         # search input
β   βββ pages                       # route pages
β   β   βββ categories_page.js      # categories page (empty)
β   β   βββ edit_product_page.js    # edit product page (empty)
β   β   βββ login_page.js           # login page
β   β   βββ products_page.js        # products page
β   β   βββ register_page.js        # register page (empty)
β   βββ utils                       # js utils
β   β   βββ storage.js              # storage module
β   βββ app.js                      # main file (vue app)
βββ layouts                         # helper templates
β   βββ product.html                # product view html layouts
βββ index.html                      # main index file
```

> NOTA 1: Los archivos que estan vacios (Empty) corresponden a las paginas que se deben implementar
> <br><br>

# π¨βπ» Rubrica de calificaciΓ³n

| Caracteristica         | Puntaje   |
| ---------------------- | --------- |
| CRUD Categorias        | 6pts      |
| CRUD Productos         | 5pts      |
| Registro               | 4pts      |
| InformaciΓ³n de usuario | 5pts      |
| **Total**              | **20pts** |

<br><br>

# π DocumentaciΓ³n del API

URL : http://silabuz-api-project.herokuapp.com

Fully Docs : http://silabuz-api-project.herokuapp.com/swagger/

The REST API for Silabuz Products Api

## Login session

Login user session platform

#### Request

`POST /authentication/login/`

    URL:            '/authentication/login/'
    HEADERS:        'Accept: application/json'

| Attribute | Description           |
| --------- | --------------------- |
| username  | username              |
| password  | PAssword email access |

    {
        "username": "cargamos",
        "password": "c4rg4m0s"
    }

## Register

Register platform

#### Request

`POST /authentication/sign-up/`

    URL:            '/authentication/sign-up/'
    HEADERS:        'Accept: application/json'

| Attribute | Description             |
| --------- | ----------------------- |
| username  | username for newaccount |
| password  | password for newaccount |
| email     | email for newaccount    |
| is_staff  | true / false            |

## Category CREATE

Create category

#### Request

`GET /api/products/categories/`

    URL:            '/products/categories/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description    |
| --------- | -------------- |
| name      | categorie name |

## Category Read

Get list of category (Required authentication)

#### Request

`GET /products/categories/`

    URL:            'products/categories/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/categories/?name={CATEGORYNAMEhere}`

    URL:            'products/categories/?name={CATEGORYNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/categories/?search={KEYWORDhere}`

    URL:            'products/categories/?search={KEYWORDhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

## Category UPDATE

Category data update

#### Request

`PUT products/categories/IDhere/`

    URL:            'products/categories/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute     | Description   |
| ------------- | ------------- |
| category-name | Category Name |

## CATEGORY DELETE

Delete category

#### Request

`DELETE products/categories/{IDhere}/`

    URL:            'products/categories/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description |
| --------- | ----------- |
| -         | -           |

## Product CREATE

Create product

#### Request

`POST /products/products/`

    URL:            '/products/products/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute      | Description           |
| -------------- | --------------------- |
| name           | product name          |
| category_id    | category ID           |
| description    | product description   |
| price          | price product         |
| discount_price | discount price        |
| image_url      | url image             |
| is_active      | is available in stock |

## Product Read

Get list of products

#### Request

`GET /products/products/`

    URL:            'products/products/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?name={PRODUCTNAMEhere}`

    URL:            'products/categories/?name={PRODUCTNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?category={CATEGORYIDhere}`

    URL:            'products/categories/?search={CATEGORYIDhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?category__name={CATEGORYNAMEhere}`

    URL:            'products/products/?category__name={CATEGORYNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

## Product UPDATE

Product data update

#### Request

`PUT products/products/IDhere/`

    URL:            'products/products/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute      | Description         |
| -------------- | ------------------- |
| name           | product name        |
| category_id    | category ID         |
| description    | product description |
| price          | price product       |
| discount_price | discount price      |
| image          | url image           |

## Product DELETE

Delete Product

#### Request

`DELETE products/products/{IDhere}/`

    URL:            'products/products/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description |
| --------- | ----------- |
| -         | -           |
